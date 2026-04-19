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
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
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
      title: '✨ Interactive Landing'
      subtitle: ''
      text: |-
        <style>
          #interactive-landing {
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, #06202b 0%, #0b4f6c 55%, #01baef 100%);
            color: #fff;
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          #interactive-landing-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.8;
          }
          #interactive-landing .landing-content {
            position: relative;
            z-index: 1;
          }
          #interactive-landing:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
          }
          #interactive-landing .landing-caption {
            margin: 0 0 0.5rem 0;
            opacity: 0.9;
          }
          #interactive-landing .landing-title {
            margin: 0 0 0.5rem 0;
          }
          #interactive-landing .landing-text {
            margin: 0 0 1rem 0;
            line-height: 1.6;
          }
          #interactive-landing .landing-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          #interactive-landing .landing-chip {
            padding: 0.45rem 0.85rem;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.06);
            color: #fff;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.15s ease;
          }
          #interactive-landing .landing-chip.is-active {
            background: rgba(255, 255, 255, 0.16);
          }
          #interactive-landing .landing-chip:hover,
          #interactive-landing .landing-chip:focus-visible {
            background: rgba(255, 255, 255, 0.28);
            transform: scale(1.06);
          }
          #interactive-landing .landing-chip:focus-visible {
            outline: 2px solid #fff;
            outline-offset: 2px;
          }
        </style>
        <div id="interactive-landing">
          <canvas id="interactive-landing-bg" aria-hidden="true"></canvas>
          <div class="landing-content">
            <p class="landing-caption">Explore what I do</p>
            <div aria-live="polite" aria-atomic="true">
              <h3 id="interactive-landing-title" class="landing-title">Dark Matter Research</h3>
              <p id="interactive-landing-text" class="landing-text">
                I study dark matter and galactic structures using surveys and simulations.
              </p>
            </div>
            <div class="landing-actions">
              <button type="button" class="landing-chip is-active" data-title="Dark Matter Research" data-text="I study dark matter and galactic structures using surveys and simulations." aria-pressed="true" aria-label="Show Research topic">Research</button>
              <button type="button" class="landing-chip" data-title="Music Motivation" data-text="Music keeps me focused and energized while working through complex analysis." aria-pressed="false" aria-label="Show Music topic">Music</button>
              <button type="button" class="landing-chip" data-title="Wildlife Advocacy" data-text="I support preserving habitats so endangered species can coexist with us safely." aria-pressed="false" aria-label="Show Advocacy topic">Advocacy</button>
            </div>
          </div>
        </div>
        <script src="/js/interactive-landing.js" defer></script>
    design:
      columns: '1'
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I am trying to understand the nature of dark matter and the influence on the formation of galactic halo substructures. I studied the history of Milky Way using DESI Milky Way survey data and galactic dynamics simulations in Lambda-CDM. Currently, I am looking forward to find and characterize new stellar streams from the orbit of dwarf galaxies and globular clusters to better understand Milky Way merger history. Tl;dr some of my simulations predicting "invisible" and disrupted stellar stream caused by intrinsic dark matter characteristics. In addition, I also working on fuzzy dark matter (FDM) simulation for a better understanding on the nature of dark matter particle properties.
    design:
      columns: '1'
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
        I am calling everyone to stop hunting and preserves the habitat of wild animals. I support the rights for Sumatran tigers and other animals to live along with human and not as a threat. 

        <style>
          .animals-img-wrap {
            display: inline-block;
            overflow: hidden;
            border-radius: 0.75rem;
            line-height: 0;
          }
          .animals-img-wrap img {
            transition: transform 0.35s ease;
            display: block;
          }
          .animals-img-wrap:hover img {
            transform: scale(1.06);
          }
        </style>
        <span class="animals-img-wrap"><img src="https://www.greeners.co/wp-content/uploads/2015/01/Mendesak_Perlindungan_Terhadap_Satwa_Langka.jpg" alt="Sumatran tiger and other endangered wildlife that need habitat preservation" style="max-width:100%;height:auto;"></span>


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
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!
        
        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
