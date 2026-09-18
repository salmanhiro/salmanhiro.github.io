---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
    design:
      background:
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '🚀 Mini Game — Asteroid Dodger'
      subtitle: 'Arrow keys or mouse to move · Survive as long as you can!'
      text: |-
        <style>
          #astro-game-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          #astro-canvas {
            border-radius: 0.75rem;
            background: #020c1b;
            cursor: none;
            display: block;
            max-width: 100%;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          }
          #astro-hud {
            display: flex;
            gap: 2rem;
            font-size: 1rem;
            color: #cce6ff;
            font-family: monospace;
          }
          #astro-start-btn {
            padding: 0.55rem 1.8rem;
            border-radius: 999px;
            border: 1.5px solid #01baef;
            background: rgba(1,186,239,0.12);
            color: #01baef;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.15s ease;
          }
          #astro-start-btn:hover {
            background: rgba(1,186,239,0.28);
            transform: scale(1.05);
          }
        </style>
        <div id="astro-game-wrap">
          <div id="astro-hud">
            <span>⏱ Score: <strong id="astro-score">0</strong></span>
            <span>❤️ Lives: <strong id="astro-lives">3</strong></span>
            <span>⚡ Level: <strong id="astro-level">1</strong></span>
          </div>
          <canvas id="astro-canvas" width="560" height="320" tabindex="0" aria-label="Asteroid Dodger game canvas"></canvas>
          <button id="astro-start-btn" type="button">▶ Start Game</button>
        </div>
        <script src="/js/asteroid-dodger.js" defer></script>
    design:
      columns: '1'
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        I study the fossil record of the Milky Way: the stellar streams, disrupted globular clusters, and accreted dwarf galaxies that trace how our Galaxy came together. Using data from the DESI Milky Way Survey and galactic dynamics simulations, I look for tidal substructures in the halo and try to figure out where they came from.

        Right now I'm using the particle-spray (Mock Stream) algorithm to detect tidal streams across the DESI Legacy Survey footprint, including tracing the LMS-1 stream and its globular clusters back to an ancient accretion event. More broadly, I'm curious how dark matter, both as a smooth halo and as clumpy subhalos, shapes the way stellar streams look and how easy they are to detect.

        </div>
    design:
      columns: '2'
  - block: markdown
    content:
      title: '🎵 Selected Music'
      subtitle: ''
      text: |-
        I recently listening to this on repeat if I need to step up the game

        <iframe width="560" height="315" src="https://www.youtube.com/embed/xKps2G1zYms?si=k_bs217_hXQdXYc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  - block: markdown
    content:
      title: '🐘 Save Animals'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        I'm calling on everyone to stop hunting and to help preserve the habitat of wild animals. I support the rights of Sumatran tigers and other endangered species to live alongside humans, not as a threat to them.

        </div>

        <style>
          .animals-img-wrap {
            display: block;
            overflow: hidden;
            border-radius: 0.75rem;
            line-height: 0;
            margin: 1.5rem auto 0;
            max-width: 32rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.35);
          }
          .animals-img-wrap img {
            transition: transform 0.35s ease;
            display: block;
            width: 100%;
            height: auto;
          }
          .animals-img-wrap:hover img {
            transform: scale(1.06);
          }
        </style>
        <span class="animals-img-wrap"><img src="https://www.greeners.co/wp-content/uploads/2015/01/Mendesak_Perlindungan_Terhadap_Satwa_Langka.jpg" alt="Sumatran tiger and other endangered wildlife that need habitat preservation"></span>


    design:
      columns: '2'
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: ""
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
  #     view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: article-grid
  #     columns: 1
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
---
