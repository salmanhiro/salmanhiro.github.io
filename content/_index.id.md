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
        text: Unduh CV
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
      title: '🚀 Game Mini: Hindari Asteroid'
      subtitle: 'Gerakkan dengan tombol panah atau mouse · Bertahanlah selama mungkin!'
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
            <span>⏱ Skor: <strong id="astro-score">0</strong></span>
            <span>❤️ Nyawa: <strong id="astro-lives">3</strong></span>
            <span>⚡ Level: <strong id="astro-level">1</strong></span>
          </div>
          <canvas id="astro-canvas" width="560" height="320" tabindex="0" aria-label="Layar gim Hindari Asteroid"></canvas>
          <button id="astro-start-btn" type="button">▶ Mulai Main</button>
        </div>
        <script src="/js/asteroid-dodger.js" defer></script>
    design:
      columns: '1'
  - block: markdown
    content:
      title: '📚 Riset Saya'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        Saya mempelajari "catatan fosil" Bima Sakti: aliran bintang (stellar stream), gugus bola yang tercerai-berai, dan galaksi katai yang tertarik masuk, yang semuanya merekam bagaimana Galaksi kita terbentuk. Dengan data dari DESI Milky Way Survey dan simulasi dinamika galaksi, saya mencari substruktur pasang surut di halo Galaksi dan mencoba menelusuri dari mana asalnya.

        Saat ini saya menggunakan algoritma particle-spray (Mock Stream) untuk mendeteksi aliran pasang surut di seluruh cakupan DESI Legacy Survey, termasuk menelusuri aliran LMS-1 beserta gugus bolanya hingga ke peristiwa akresi purba. Lebih luas lagi, saya penasaran bagaimana materi gelap, baik sebagai halo yang mulus maupun sebagai subhalo yang menggumpal, memengaruhi bentuk aliran bintang dan seberapa mudah aliran itu dideteksi.

        </div>
    design:
      columns: '2'
  - block: markdown
    content:
      title: '🎵 Musik Pilihan'
      subtitle: ''
      text: |-
        Belakangan ini lagu ini saya putar berulang-ulang kalau sedang butuh semangat ekstra:

        <iframe width="560" height="315" src="https://www.youtube.com/embed/xKps2G1zYms?si=k_bs217_hXQdXYc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  - block: markdown
    content:
      title: '🐘 Selamatkan Satwa'
      subtitle: ''
      text: |-
        <div style="text-align: justify; hyphens: none;">

        Saya mengajak semua orang untuk menghentikan penggundulan hutan dan perburuan liar demi menjaga habitat satwa liar, terutama di hutan hujan Indonesia. Saya mendukung hak harimau sumatra dan satwa langka lainnya untuk hidup berdampingan dengan manusia, bukan dianggap sebagai ancaman.
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
        <span class="animals-img-wrap"><img src="https://www.greeners.co/wp-content/uploads/2015/01/Mendesak_Perlindungan_Terhadap_Satwa_Langka.jpg" alt="Harimau sumatra dan satwa langka lain yang habitatnya perlu dilindungi"></span>


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
