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
        text: 履歴書をダウンロード
        url: /uploads/CV_salman.pdf
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
      title: '🚀 ミニゲーム：小惑星よけ'
      subtitle: '矢印キーかマウスで移動 · できるだけ長く生き残ろう！'
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
            <span>⏱ スコア： <strong id="astro-score">0</strong></span>
            <span>❤️ ライフ： <strong id="astro-lives">3</strong></span>
            <span>⚡ レベル： <strong id="astro-level">1</strong></span>
          </div>
          <canvas id="astro-canvas" width="560" height="320" tabindex="0" aria-label="小惑星よけゲームの画面"></canvas>
          <button id="astro-start-btn" type="button">▶ ゲーム開始</button>
        </div>
        <script src="/js/asteroid-dodger.js" defer></script>
    design:
      columns: '1'
  - block: markdown
    content:
      title: '📚 研究について'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        私は天の川銀河の「化石記録」を研究しています。恒星ストリーム、破壊された球状星団、そして降着した矮小銀河は、私たちの銀河がどのように形づくられてきたかを今に伝えています。DESI 天の川サーベイ（DESI Milky Way Survey）のデータと銀河力学シミュレーションを用いて、ハローの中に潮汐による下部構造を探し、その起源を明らかにしようとしています。

        現在は、パーティクル・スプレー法（Mock Stream）を使って DESI Legacy Survey の観測領域全体から潮汐ストリームを検出しています。その一つとして、LMS-1 ストリームとそれに付随する球状星団を、遠い昔の降着イベントまでさかのぼって調べています。より広くは、なめらかなハローとしての暗黒物質と、塊状のサブハローとしての暗黒物質が、恒星ストリームの姿や見つけやすさにどう影響するのかに興味を持っています。

        </div>
    design:
      columns: '2'
  - block: markdown
    content:
      title: '🎵 おすすめの音楽'
      subtitle: ''
      text: |-
        最近、気合いを入れたいときにはこの曲をくり返し聴いています。

        <iframe width="560" height="315" src="https://www.youtube.com/embed/xKps2G1zYms?si=k_bs217_hXQdXYc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  - block: markdown
    content:
      title: '🐘 動物を守ろう'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        森林伐採と密猟をやめ、野生動物のすみか、とくにインドネシアの熱帯雨林を守ろうと呼びかけています。スマトラトラをはじめとする絶滅危惧種が、人間にとっての脅威としてではなく、人間とともに生きる権利を持っていると私は考えています。
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
        <span class="animals-img-wrap"><img src="https://www.greeners.co/wp-content/uploads/2015/01/Mendesak_Perlindungan_Terhadap_Satwa_Langka.jpg" alt="すみかの保護が必要なスマトラトラなどの絶滅危惧種"></span>


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
