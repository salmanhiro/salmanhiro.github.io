(() => {
const canvas = document.getElementById('castle-canvas');
const bestEl = document.getElementById('castle-best');
if (!canvas) return;
const ctx = canvas.getContext('2d');
if (!ctx) return;

const LAYER_H = 22;
const SNAP = 4;               // a drop this close to perfect snaps into place
const DUSK_AT = 25;           // layers until the sky is fully evening
const DAY = [246, 215, 167];  // afternoon sky
const DUSK = [59, 63, 107];   // evening sky
const WASH_FRAMES = 210;      // ~3.5 s for the rain to wash away the whole castle

let W, H, layers, mover, debris, drops, best, state, camY, animId, score, wet, framesPerLayer;

// -- Setup: size canvas to its container, crisp on high-DPI screens --
function setup() {
  const dpr = window.devicePixelRatio || 1;
  W = Math.min(canvas.parentElement.clientWidth, 720);
  H = Math.round(W * 0.65);
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  best = 0;
  reset();
  state = 'idle';
  draw();
}

function groundY() { return H - 40; }

function reset() {
  const w = W * 0.45;
  layers = [{ x: (W - w) / 2, w }];
  debris = [];
  drops = [];
  camY = 0;
  score = 0;
  wet = 0;
  spawnMover();
}

function spawnMover() {
  const top = layers[layers.length - 1];
  const speed = Math.min(2 + layers.length * 0.18, 7);
  const fromLeft = layers.length % 2 === 0;
  mover = { x: fromLeft ? -top.w : W, w: top.w, vx: fromLeft ? speed : -speed };
}

// -- Drawing --
function mix(a, b, t) {
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`;
}

function layerY(i) { return groundY() - (i + 1) * LAYER_H + camY; }

function drawLayer(x, y, w, shade) {
  ctx.fillStyle = shade;
  ctx.fillRect(x, y, w, LAYER_H);
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillRect(x, y, w, 3);
  ctx.fillStyle = 'rgba(90,70,40,0.25)';
  ctx.fillRect(x, y + LAYER_H - 3, w, 3);
}

function layerShade(i) {
  return i % 2 ? '#d9b97a' : '#e3c68b';
}

function drawCastleTop() {
  const top = layers[layers.length - 1];
  const y = layerY(layers.length - 1);
  const n = Math.max(2, Math.floor(top.w / 18));
  const step = top.w / (n * 2 - 1);
  ctx.fillStyle = '#e3c68b';
  for (let i = 0; i < n; i++) ctx.fillRect(top.x + i * 2 * step, y - 10, step, 10);
  const fx = top.x + top.w / 2;
  ctx.strokeStyle = '#6b5a45';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(fx, y - 10); ctx.lineTo(fx, y - 38); ctx.stroke();
  ctx.fillStyle = '#c0504d';
  ctx.beginPath(); ctx.moveTo(fx, y - 38); ctx.lineTo(fx + 16, y - 32); ctx.lineTo(fx, y - 26); ctx.fill();
}

function message(text, sub, cy = H / 2) {
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, cy - 42, W, sub ? 78 : 56);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.font = '600 20px system-ui, sans-serif';
  ctx.fillText(text, W / 2, cy - 8);
  if (sub) {
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText(sub, W / 2, cy + 20);
  }
}

function draw() {
  const t = Math.min((layers.length - 1) / DUSK_AT, 1);
  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, mix(DAY, DUSK, t));
  sky.addColorStop(1, mix([252, 236, 205], [120, 96, 120], t));
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  // beach
  ctx.fillStyle = mix([230, 218, 194], [168, 150, 122], wet);
  ctx.fillRect(0, groundY() + camY, W, H);

  layers.forEach((l, i) => drawLayer(l.x, layerY(i), l.w, layerShade(i)));
  for (const d of debris) drawLayer(d.x, d.y, d.w, 'rgba(217,185,122,' + d.a + ')');

  if (state === 'playing') {
    drawLayer(mover.x, layerY(layers.length), mover.w, layerShade(layers.length));
  } else if (state === 'built' && layers.length > 1) {
    drawCastleTop();
  }

  // rain
  ctx.strokeStyle = 'rgba(200,215,255,0.6)';
  ctx.lineWidth = 1.5;
  for (const r of drops) {
    ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.lineTo(r.x - 3, r.y + 14); ctx.stroke();
  }

  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.textAlign = 'left';
  ctx.font = '600 15px system-ui, sans-serif';
  ctx.fillText('Layers: ' + score, 14, 26);

  if (state === 'idle') message('Tap to start building', 'Drop each layer on the one below');
  if (state === 'built') message('Your castle stands ' + score + ' layers tall.', 'Tap to call the evening rain', 86);
  if (state === 'washed') message('The evening rain washed it away.', 'Tap to build again');
}

// -- Game loop --
function step() {
  if (state === 'playing') {
    mover.x += mover.vx;
    if (mover.x < -mover.w || mover.x > W) mover.vx = -mover.vx;
  }
  const targetCam = Math.max(0, layers.length * LAYER_H - H * 0.45);
  camY += (targetCam - camY) * 0.1;
  for (const d of debris) { d.vy += 0.4; d.y += d.vy; d.a = Math.max(0, d.a - 0.015); }
  debris = debris.filter(d => d.a > 0 && d.y < groundY() + camY);
  if (state === 'raining' || state === 'washed') {
    if (drops.length < 140) for (let i = 0; i < 4; i++) drops.push({ x: Math.random() * (W + 40), y: -20 });
    for (const r of drops) { r.y += 9; if (r.y > H) { r.y = -20; r.x = Math.random() * (W + 40); } }
    wet = Math.min(1, wet + 0.004);
    if (state === 'raining') wash();
  }
  draw();
  animId = requestAnimationFrame(step);
}

// -- Rain: melt the top layer from both sides, dripping sand as it goes --
function wash() {
  const top = layers[layers.length - 1];
  if (!top) return;
  const y = layerY(layers.length - 1);
  if (top.w0 === undefined) top.w0 = top.w;
  const bite = Math.min(top.w0 / (2 * framesPerLayer), top.w / 2);
  top.x += bite;
  top.w -= bite * 2;
  if (Math.random() < 0.5) {
    const side = Math.random() < 0.5 ? top.x - 4 : top.x + top.w;
    debris.push({ x: side, y: y + LAYER_H / 2, w: 4, vy: 0, a: 0.8 });
  }
  if (top.w <= 1) layers.pop();
  if (layers.length === 0) state = 'washed';
}

function drop() {
  const top = layers[layers.length - 1];
  let x = mover.x, w = mover.w;
  if (Math.abs(x - top.x) <= SNAP) x = top.x;
  const left = Math.max(x, top.x);
  const right = Math.min(x + w, top.x + top.w);
  const y = layerY(layers.length);
  if (right - left <= 0) {
    debris.push({ x, y, w, vy: 0, a: 1 });
    state = 'built';
    best = Math.max(best, score);
    if (bestEl) bestEl.textContent = best;
    return;
  }
  if (x < left) debris.push({ x, y, w: left - x, vy: 0, a: 1 });
  if (x + w > right) debris.push({ x: right, y, w: x + w - right, vy: 0, a: 1 });
  layers.push({ x: left, w: right - left });
  score++;
  spawnMover();
}

function act() {
  if (state === 'playing') drop();
  else if (state === 'built') {
    framesPerLayer = Math.max(4, Math.floor(WASH_FRAMES / layers.length));
    state = 'raining';
  }
  else if (state === 'idle' || state === 'washed') { reset(); state = 'playing'; }
  if (!animId) animId = requestAnimationFrame(step);
}

canvas.addEventListener('pointerdown', e => { e.preventDefault(); canvas.focus({ preventScroll: true }); act(); });
canvas.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); act(); }
});

setup();
})();
