---
title: 'Zen Garden'
date: 2026-10-18
type: landing
summary: 'A quiet corner of Salman Al Farisi’s website: mountain adventures, slow music, slow reading, and a sand garden to rake.'

design:
  spacing: '5rem'

sections:
  - block: markdown
    content:
      title: 'Zen Garden'
      subtitle: 'A quiet corner. No deadlines, no data reduction.'
      text: |-
        <style>
          #zen-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
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
      title: 'Adventures'
      subtitle: ''
      text: |-
        Mountains taught me most of what I know about patience. I picked up mountaineering during my undergraduate years in Bandung, and I still go hiking whenever I can, ideally ending the day watching fireflies.

        <figure style="margin: 2rem 0; text-align: center;">
          <img src="/about/taroko-gorge.jpg" alt="Taroko Gorge in Hualien, Taiwan" loading="lazy" style="max-width: 100%; border-radius: 0.75rem; box-shadow: 0 8px 32px rgba(0,0,0,0.35);">
          <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.7;">Taroko Gorge, Hualien.</figcaption>
        </figure>

        - **Hualien** is where I go to recharge: Taroko Gorge, Qixingtan beach, the Tzu Chi garden, and an ice cream shop with cats.
        - **Bosscha Observatory** in Lembang, where I spent many nights during my undergraduate years.
        - **Lampung**, where I grew up, and where a night of fishing with my father first showed me a sky full of stars.
    design:
      columns: '1'

  - block: markdown
    content:
      title: 'Slow Listening'
      subtitle: ''
      text: |-
        Music for when the code finally runs, or when it doesn't.

        - [Ryuichi Sakamoto, piano](https://www.youtube.com/watch?v=bZrfMU71W9I), which is also what I'm learning to play during my PhD.
        - [Literature references for Yorushika songs](https://docs.google.com/document/d/1znyYF97f8nhHLvDTAJpqQH7wxqiq6cgJNBOLMNIJEWs/edit?tab=t.0), a document I keep on the books behind the lyrics.
    design:
      columns: '1'

  - block: markdown
    content:
      title: 'Slow Reading'
      subtitle: ''
      text: |-
        Genzaburō Yoshino's *How Do You Live?* (君たちはどう生きるか), which I read in English and then again in Japanese. Its questions about observing the world honestly still shape how I approach both life and science.
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
