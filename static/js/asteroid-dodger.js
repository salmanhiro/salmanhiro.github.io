(() => {
const canvas = document.getElementById('astro-canvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('astro-score');
const livesEl = document.getElementById('astro-lives');
const levelEl = document.getElementById('astro-level');
const startBtn = document.getElementById('astro-start-btn');
if (!canvas || !ctx) return;

const W = canvas.width, H = canvas.height;
const SHIP_W = 34, SHIP_H = 28;
const ASTEROID_MIN = 14, ASTEROID_MAX = 28;
const STAR_COUNT = 60;
const SPAWN_RATE_BASE = 28;
const SPAWN_RATE_DECREASE = 2;
const SPAWN_RATE_MIN = 10;
const FRAMES_PER_LEVEL = 900; // ~15 seconds at 60 fps

let ship, asteroids, stars, score, lives, level, frame, running, animId, keys;

// -- Stars background --
function makeStars() {
  return Array.from({length: STAR_COUNT}, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    a: Math.random() * 0.6 + 0.3,
  }));
}

function init() {
  ship = { x: W / 2, y: H - 44, vx: 0, invincible: 0 };
  asteroids = [];
  stars = makeStars();
  score = 0; lives = 3; level = 1; frame = 0;
  keys = {};
  updateHud();
}

function updateHud() {
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  levelEl.textContent = level;
}

// -- Spawn asteroids --
function spawnAsteroid() {
  const r = ASTEROID_MIN + Math.random() * (ASTEROID_MAX - ASTEROID_MIN);
  const speed = (0.9 + level * 0.25) * (0.8 + Math.random() * 0.8);
  asteroids.push({
    x: r + Math.random() * (W - r * 2),
    y: -r,
    r,
    speed,
    wobble: (Math.random() - 0.5) * 0.6,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.06,
  });
}

// -- Drawing helpers --
function drawStars() {
  stars.forEach(s => {
    ctx.globalAlpha = s.a;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function drawShip(sx, sy, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(sx, sy);
  // Body
  ctx.beginPath();
  ctx.moveTo(0, -SHIP_H / 2);
  ctx.lineTo(SHIP_W / 2, SHIP_H / 2);
  ctx.lineTo(0, SHIP_H / 3);
  ctx.lineTo(-SHIP_W / 2, SHIP_H / 2);
  ctx.closePath();
  ctx.fillStyle = '#01baef';
  ctx.fill();
  // Cockpit
  ctx.beginPath();
  ctx.ellipse(0, -2, 6, 9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#aef0ff';
  ctx.fill();
  // Engine glow
  if (frame % 6 < 3) {
    ctx.beginPath();
    ctx.moveTo(-8, SHIP_H / 2);
    ctx.lineTo(8, SHIP_H / 2);
    ctx.lineTo(0, SHIP_H / 2 + 10);
    ctx.closePath();
    ctx.fillStyle = '#ff9900';
    ctx.fill();
  }
  ctx.restore();
}

function drawAsteroid(a) {
  ctx.save();
  ctx.translate(a.x, a.y);
  ctx.rotate(a.angle);
  ctx.beginPath();
  const pts = 8;
  for (let i = 0; i < pts; i++) {
    const ang = (i / pts) * Math.PI * 2;
    const jitter = a.r * (0.75 + 0.25 * Math.sin(i * 3.7));
    const px = Math.cos(ang) * jitter;
    const py = Math.sin(ang) * jitter;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = '#6b7c93';
  ctx.fill();
  ctx.strokeStyle = '#99aabb';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function drawOverlay(msg, sub) {
  ctx.fillStyle = 'rgba(2,12,27,0.72)';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#01baef';
  ctx.font = 'bold 28px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(msg, W / 2, H / 2 - 16);
  if (sub) {
    ctx.fillStyle = '#cce6ff';
    ctx.font = '16px monospace';
    ctx.fillText(sub, W / 2, H / 2 + 16);
  }
}

// -- Mouse / touch control --
canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = W / rect.width;
  ship.x = (e.clientX - rect.left) * scaleX;
});
canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const scaleX = W / rect.width;
  ship.x = (e.touches[0].clientX - rect.left) * scaleX;
}, {passive: false});

// -- Keyboard control --
window.addEventListener('keydown', e => { keys[e.key] = true; });
window.addEventListener('keyup', e => { keys[e.key] = false; });

// -- Collision --
function circleRect(cx, cy, cr, rx, ry, rw, rh) {
  const nearX = Math.max(rx, Math.min(cx, rx + rw));
  const nearY = Math.max(ry, Math.min(cy, ry + rh));
  return (cx - nearX) ** 2 + (cy - nearY) ** 2 < cr * cr;
}

// -- Game loop --
function loop() {
  if (!running) return;
  frame++;

  // Input
  const speed = 4.5;
  if (keys['ArrowLeft'] || keys['a'] || keys['A']) ship.x -= speed;
  if (keys['ArrowRight'] || keys['d'] || keys['D']) ship.x += speed;
  ship.x = Math.max(SHIP_W / 2, Math.min(W - SHIP_W / 2, ship.x));

  // Spawn rate speeds up with level
  const spawnRate = Math.max(SPAWN_RATE_BASE - level * SPAWN_RATE_DECREASE, SPAWN_RATE_MIN);
  if (frame % spawnRate === 0) spawnAsteroid();

  // Level up every 15 s (900 frames @ 60fps)
  if (frame % FRAMES_PER_LEVEL === 0) { level++; updateHud(); }

  // Move asteroids
  asteroids.forEach(a => {
    a.y += a.speed;
    a.x += a.wobble;
    a.angle += a.spin;
  });
  asteroids = asteroids.filter(a => a.y - a.r < H + 10);

  // Score
  score = Math.floor(frame / 10);
  scoreEl.textContent = score;

  // Invincibility countdown
  if (ship.invincible > 0) ship.invincible--;

  // Hit detection
  if (ship.invincible === 0) {
    const hx = ship.x - SHIP_W / 2 + 4, hy = ship.y - SHIP_H / 2 + 4;
    const hw = SHIP_W - 8, hh = SHIP_H - 8;
    for (let i = asteroids.length - 1; i >= 0; i--) {
      const a = asteroids[i];
      if (circleRect(a.x, a.y, a.r * 0.8, hx, hy, hw, hh)) {
        asteroids.splice(i, 1);
        lives--;
        ship.invincible = 120;
        livesEl.textContent = lives;
        if (lives <= 0) { gameOver(); return; }
      }
    }
  }

  // Draw
  ctx.clearRect(0, 0, W, H);
  drawStars();
  asteroids.forEach(drawAsteroid);
  const shipAlpha = ship.invincible > 0 && Math.floor(ship.invincible / 8) % 2 === 0 ? 0.3 : 1;
  drawShip(ship.x, ship.y, shipAlpha);

  animId = requestAnimationFrame(loop);
}

function gameOver() {
  running = false;
  ctx.clearRect(0, 0, W, H);
  drawStars();
  drawOverlay('💥 Game Over', `Score: ${score}  |  Level: ${level}`);
  startBtn.textContent = '🔄 Play Again';
  startBtn.style.display = '';
}

function startGame() {
  if (animId) cancelAnimationFrame(animId);
  init();
  running = true;
  startBtn.style.display = 'none';
  canvas.focus();
  loop();
}

startBtn.addEventListener('click', startGame);

// Draw idle screen
ctx.clearRect(0, 0, W, H);
drawStars();
drawOverlay('🚀 Asteroid Dodger', 'Press Start · Arrow keys or mouse to move');
})();
