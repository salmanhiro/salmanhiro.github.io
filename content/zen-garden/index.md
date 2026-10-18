---
title: 'Zen Garden'
date: 2026-10-18
type: landing
summary: 'A quiet corner of Salman Al Farisi’s website: a sand garden to rake and a sand castle to build before the evening rain.'

design:
  spacing: '5rem'

sections:
  - block: markdown
    content:
      title: 'Zen Garden'
      subtitle: ''
      text: |-
        <style>
          /* Break out of the narrow text column so the garden can use most of the screen */
          #zen-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; position: relative; left: 50%; transform: translateX(-50%); width: min(1100px, calc(100vw - 48px)); }
          #zen-canvas { display: block; max-width: 100%; border-radius: 0.75rem; cursor: crosshair; touch-action: none; box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
          #zen-reset-btn { padding: 0.45rem 1.5rem; border-radius: 999px; border: 1px solid rgba(128,128,128,0.4); background: transparent; color: inherit; font-size: 0.9rem; cursor: pointer; }
          #zen-reset-btn:hover { background: rgba(128,128,128,0.12); }
        </style>
        <div id="zen-wrap">
          <canvas id="zen-canvas" aria-label="A sand garden you can rake by dragging"></canvas>
          <div style="font-size: 0.85rem; opacity: 0.7;">Drag to rake the sand. Breathe out.</div>
          <button id="zen-reset-btn" type="button">Smooth the sand</button>
        </div>
        <script src="/js/zen-garden.js" defer></script>
    design:
      columns: '1'

  - block: markdown
    content:
      title: 'Sand Castle'
      subtitle: ''
      text: |-
        <style>
          #castle-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
          #castle-canvas { display: block; max-width: 100%; border-radius: 0.75rem; cursor: pointer; touch-action: manipulation; box-shadow: 0 8px 32px rgba(0,0,0,0.25); outline: none; }
        </style>
        <p style="text-align: center; margin-top: 0;">Tap, click, or press Space to drop each layer. When your castle is done, tap once more to call the evening rain.</p>
        <div id="castle-wrap">
          <canvas id="castle-canvas" tabindex="0" aria-label="Sand castle stacking game. Tap or press Space to drop each layer."></canvas>
          <div style="font-size: 0.85rem; opacity: 0.7;">Best this visit: <strong id="castle-best">0</strong> layers</div>
        </div>
        <figure style="margin: 2.5rem 0 0; text-align: center;">
          <blockquote style="margin: 0; border: none; padding: 0; font-size: 1.25rem; font-style: italic;">“Our place is playing in the sand before the evening rain.”</blockquote>
          <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.7;">— Ichiko Aoba</figcaption>
        </figure>
        <script src="/js/sand-castle.js" defer></script>
    design:
      columns: '1'

  - block: markdown
    content:
      title: 'Stories from Master Cheng Yen'
      subtitle: ''
      text: |-
        Short stories from Dharma Master Cheng Yen, founder of Tzu Chi, whose Jing Si Abode garden in Hualien is one of my favorite quiet places.

        <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; margin-top: 1.5rem; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.25);">
          <iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLvUFcOB1KtqwjvatQloZzcFc8QStpMcMk" title="Master Cheng Yen stories (YouTube playlist)" loading="lazy" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <p style="margin-top: 0.75rem; font-size: 0.85rem; opacity: 0.7;"><a href="https://www.youtube.com/playlist?list=PLvUFcOB1KtqwjvatQloZzcFc8QStpMcMk" target="_blank" rel="noopener">Open the full playlist on YouTube</a></p>
    design:
      columns: '1'

  - block: markdown
    content:
      title: 'Small Things'
      subtitle: ''
      text: |-
        > Doing small things well, and appreciating the small moments as they come.
    design:
      columns: '1'
---
