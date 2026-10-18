(() => {
const canvas = document.getElementById('zen-canvas');
const resetBtn = document.getElementById('zen-reset-btn');
if (!canvas) return;
const ctx = canvas.getContext('2d');
if (!ctx) return;

const SAND = '#e6dac2';
const GROOVE = 'rgba(120, 98, 66, 0.35)';
const RIDGE = 'rgba(255, 255, 255, 0.45)';
const TINES = 7;
const TINE_GAP = 11;
const GROOVE_W = 3.5;

let W, H, stones;

// -- Setup: size canvas to its container, crisp on high-DPI screens --
function setup() {
  const dpr = window.devicePixelRatio || 1;
  W = canvas.parentElement.clientWidth;
  H = Math.round(W < 640 ? W * 1.1 : W * 0.55);  // taller on phones
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  stones = [
    { x: W * 0.25, y: H * 0.45, r: W * 0.05 },
    { x: W * 0.68, y: H * 0.35, r: W * 0.035 },
    { x: W * 0.74, y: H * 0.68, r: W * 0.025 },
  ];
  smooth();
}

// -- Sand: flat base, faint grain, raked rings around each stone --
function smooth() {
  ctx.fillStyle = SAND;
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < W * H * 0.02; i++) {
    ctx.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)';
    ctx.fillRect(Math.random() * W, Math.random() * H, 1, 1);
  }
  for (const s of stones) {
    for (let k = 1; k <= 4; k++) {
      const r = s.r + k * TINE_GAP * 1.4;
      ctx.lineWidth = GROOVE_W;
      ctx.strokeStyle = GROOVE;
      ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = RIDGE;
      ctx.beginPath(); ctx.arc(s.x, s.y, r + GROOVE_W, 0, Math.PI * 2); ctx.stroke();
    }
  }
  drawStones();
}

function drawStones() {
  for (const s of stones) {
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath(); ctx.ellipse(s.x + 3, s.y + 4, s.r, s.r * 0.85, 0, 0, Math.PI * 2); ctx.fill();
    const g = ctx.createRadialGradient(s.x - s.r * 0.3, s.y - s.r * 0.3, s.r * 0.1, s.x, s.y, s.r);
    g.addColorStop(0, '#8a8f8c');
    g.addColorStop(1, '#4b504e');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(s.x, s.y, s.r, s.r * 0.85, 0, 0, Math.PI * 2); ctx.fill();
  }
}

// -- Raking: parallel grooves perpendicular to the direction of travel --
function rake(x0, y0, x1, y1) {
  const dx = x1 - x0, dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 1) return;
  const nx = -dy / len, ny = dx / len;
  ctx.lineCap = 'round';
  for (let i = 0; i < TINES; i++) {
    const o = (i - (TINES - 1) / 2) * TINE_GAP;
    ctx.lineWidth = GROOVE_W;
    ctx.strokeStyle = GROOVE;
    ctx.beginPath();
    ctx.moveTo(x0 + nx * o, y0 + ny * o);
    ctx.lineTo(x1 + nx * o, y1 + ny * o);
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = RIDGE;
    ctx.beginPath();
    ctx.moveTo(x0 + nx * (o + GROOVE_W), y0 + ny * (o + GROOVE_W));
    ctx.lineTo(x1 + nx * (o + GROOVE_W), y1 + ny * (o + GROOVE_W));
    ctx.stroke();
  }
  drawStones();
}

// -- Input: mouse, pen and touch via pointer events --
let last = null;
function pos(e) {
  const rect = canvas.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
canvas.addEventListener('pointerdown', e => {
  last = pos(e);
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
  if (!last) return;
  const p = pos(e);
  rake(last.x, last.y, p.x, p.y);
  last = p;
});
['pointerup', 'pointercancel'].forEach(t => canvas.addEventListener(t, () => { last = null; }));

if (resetBtn) resetBtn.addEventListener('click', smooth);

// Re-fit when the available width changes (e.g. rotating a phone)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (canvas.parentElement.clientWidth !== W) setup();
  }, 200);
});
setup();
})();
