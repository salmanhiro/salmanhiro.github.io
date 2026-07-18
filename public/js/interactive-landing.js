(() => {
  const root = document.getElementById('interactive-landing');
  if (!root) return;

  const canvas = document.getElementById('interactive-landing-bg');
  const title = document.getElementById('interactive-landing-title');
  const text = document.getElementById('interactive-landing-text');
  const chipButtons = root.querySelectorAll('.landing-chip');
  const context = canvas?.getContext('2d');

  if (!canvas || !title || !text || !context || chipButtons.length === 0) return;

  // Keep pointer far outside the card so shapes drift naturally when not hovered.
  const OFF_SCREEN_COORDINATE = -1000;
  const MAX_RESIZE_RETRIES = 30;
  const INFLUENCE_RADIUS = 90;
  const MIN_CANVAS_DIMENSION = 1;
  const MIN_DISTANCE = 1;
  const pointer = { x: OFF_SCREEN_COORDINATE, y: OFF_SCREEN_COORDINATE };
  const shapes = [];
  const shapeCount = 22;
  let frameId = null;
  let resizeRetries = 0;

  const randomBetween = (min, max) => Math.random() * (max - min) + min;
  const getCanvasDimensions = () => {
    const rootBounds = root.getBoundingClientRect();
    const width = canvas.clientWidth || rootBounds.width || root.clientWidth || MIN_CANVAS_DIMENSION;
    const height = canvas.clientHeight || rootBounds.height || root.clientHeight || MIN_CANVAS_DIMENSION;
    return { width, height };
  };

  const resizeCanvas = () => {
    const ratio = window.devicePixelRatio || 1;
    const { width, height } = getCanvasDimensions();
    canvas.width = Math.max(MIN_CANVAS_DIMENSION, Math.floor(width * ratio));
    canvas.height = Math.max(MIN_CANVAS_DIMENSION, Math.floor(height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if ((height <= MIN_CANVAS_DIMENSION || width <= MIN_CANVAS_DIMENSION) && resizeRetries < MAX_RESIZE_RETRIES) {
      resizeRetries += 1;
      window.requestAnimationFrame(resizeCanvas);
    } else {
      resizeRetries = 0;
    }
  };

  const seedShapes = () => {
    const { width, height } = getCanvasDimensions();
    shapes.length = 0;
    for (let i = 0; i < shapeCount; i += 1) {
      shapes.push({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        size: randomBetween(7, 24),
        vx: randomBetween(-0.4, 0.4),
        vy: randomBetween(-0.3, 0.3),
        rotation: randomBetween(0, Math.PI * 2),
        vr: randomBetween(-0.01, 0.01),
        kind: i % 2 === 0 ? 'circle' : 'square'
      });
    }
  };

  const drawShapes = () => {
    const { width, height } = getCanvasDimensions();
    context.clearRect(0, 0, width, height);
    shapes.forEach((shape) => {
      const dx = pointer.x - shape.x;
      const dy = pointer.y - shape.y;
      const distance = Math.max(Math.hypot(dx, dy), MIN_DISTANCE);
      const influence = Math.max(0, INFLUENCE_RADIUS - distance) / INFLUENCE_RADIUS;
      shape.x += shape.vx - (dx / distance) * influence * 0.35;
      shape.y += shape.vy - (dy / distance) * influence * 0.35;
      if (shape.x < -shape.size) shape.x = width + shape.size;
      if (shape.x > width + shape.size) shape.x = -shape.size;
      if (shape.y < -shape.size) shape.y = height + shape.size;
      if (shape.y > height + shape.size) shape.y = -shape.size;
      shape.rotation += shape.vr;
      context.save();
      context.translate(shape.x, shape.y);
      context.rotate(shape.rotation);
      context.fillStyle = shape.kind === 'circle' ? 'rgba(255,255,255,0.22)' : 'rgba(1,186,239,0.28)';
      if (shape.kind === 'circle') {
        context.beginPath();
        context.arc(0, 0, shape.size * 0.45, 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillRect(-shape.size * 0.45, -shape.size * 0.45, shape.size * 0.9, shape.size * 0.9);
      }
      context.restore();
    });
    frameId = window.requestAnimationFrame(drawShapes);
  };

  const updateSelection = (chipButton) => {
    chipButtons.forEach((chipElement) => {
      chipElement.classList.remove('is-active');
      chipElement.setAttribute('aria-pressed', 'false');
    });
    chipButton.classList.add('is-active');
    chipButton.setAttribute('aria-pressed', 'true');
    title.textContent = chipButton.dataset.title || '';
    text.textContent = chipButton.dataset.text || '';
  };

  chipButtons.forEach((chipButton) => {
    chipButton.addEventListener('click', () => updateSelection(chipButton));
    chipButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        updateSelection(chipButton);
      }
    });
  });

  root.addEventListener('pointermove', (event) => {
    const bounds = root.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
  });

  root.addEventListener('pointerleave', () => {
    pointer.x = OFF_SCREEN_COORDINATE;
    pointer.y = OFF_SCREEN_COORDINATE;
  });

  resizeCanvas();
  seedShapes();
  drawShapes();

  window.addEventListener('resize', () => {
    resizeCanvas();
    seedShapes();
  });

  window.addEventListener('beforeunload', () => {
    if (frameId !== null) window.cancelAnimationFrame(frameId);
  });
})();
