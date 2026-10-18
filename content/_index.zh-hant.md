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
        text: 下載履歷
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
      title: '小遊戲：躲避小行星'
      subtitle: '用方向鍵或滑鼠移動 · 撐得越久越好！'
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
            <span>⏱ 分數： <strong id="astro-score">0</strong></span>
            <span>❤️ 生命： <strong id="astro-lives">3</strong></span>
            <span>⚡ 關卡： <strong id="astro-level">1</strong></span>
          </div>
          <canvas id="astro-canvas" width="560" height="320" tabindex="0" aria-label="躲避小行星遊戲畫面"></canvas>
          <button id="astro-start-btn" type="button">▶ 開始遊戲</button>
        </div>
        <script src="/js/asteroid-dodger.js" defer></script>
    design:
      columns: '1'
  - block: markdown
    content:
      title: '📚 我的研究'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        我研究銀河系的「化石紀錄」：恆星流、被瓦解的球狀星團，以及被吸積的矮星系，它們記錄著我們的星系如何一步步形成。我利用 DESI 銀河系巡天（DESI Milky Way Survey）的資料和星系動力學模擬，在銀暈中尋找潮汐子結構，並試著追溯它們的來源。

        目前我使用粒子噴射（Mock Stream）演算法，在 DESI Legacy Survey 的觀測範圍內偵測潮汐流，包括把 LMS-1 恆星流及其球狀星團追溯回一次古老的吸積事件。更廣泛地說，我很好奇暗物質，無論是平滑的暗物質暈還是成團的次暈，如何影響恆星流的樣貌，以及它們被偵測到的難易程度。

        </div>
    design:
      columns: '2'
  - block: markdown
    content:
      title: '🎵 音樂推薦'
      subtitle: ''
      text: |-
        最近需要提振狀態的時候，我都會重複播放這首：

        <iframe width="560" height="315" src="https://www.youtube.com/embed/xKps2G1zYms?si=k_bs217_hXQdXYc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  - block: markdown
    content:
      title: '🐘 保護動物'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        我呼籲大家一起停止森林砍伐與盜獵，保護野生動物的棲息地，尤其是印尼的雨林。我支持蘇門答臘虎和其他瀕危物種與人類共存的權利，牠們不是我們的威脅。
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
        <span class="animals-img-wrap"><img src="https://www.greeners.co/wp-content/uploads/2015/01/Mendesak_Perlindungan_Terhadap_Satwa_Langka.jpg" alt="需要棲地保護的蘇門答臘虎與其他瀕危野生動物"></span>


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
