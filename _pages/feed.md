---
permalink: /feed/
title: " "  
---

<!-- ===== FEED HEADER ===== -->
<h1 style="margin:0 0 .5rem 0;">📜 Feed & Highlights</h1>
<p style="margin:0 0 1.25rem 0; opacity:.9;">
  A curated timeline of professional milestones, academic achievements, and research updates.
</p>
<hr style="border:none;border-top:1px solid #666;opacity:.4;margin:1rem 0 1.25rem;">

<!-- ===== FEED STYLES (INLINE) ===== -->
<style>
  /* Masonry (collage) container using CSS columns */
  .feed-grid{
    column-gap:16px;
    margin:0; padding:0; list-style:none;
  }
  /* Column counts at breakpoints */
  @media (max-width:719px){ .feed-grid{ column-count:1; } }
  @media (min-width:720px) and (max-width:1159px){ .feed-grid{ column-count:2; } }
  @media (min-width:1160px){ .feed-grid{ column-count:3; } }

  /* Cards must be inline-block and avoid breaking across columns */
  .feed-card{
    display:inline-block; width:100%;
    margin:0 0 16px; /* spacing between rows in masonry */
    border:1px solid rgba(255,255,255,.25);
    border-radius:12px;
    padding:14px 16px;
    background:rgba(255,255,255,.03);
    backdrop-filter:saturate(120%);
    break-inside:avoid;
  }

  /* Light mode fallback */
  @media (prefers-color-scheme: light){
    .feed-card{ background:#fff;border-color:#e5e7eb; }
    .feed-tag{ border-color:#e5e7eb; color:#111; }
    .feed-title a{ color:#111 !important; }
    .feed-meta{ color:#444; }
    .feed-text{ color:#222; }
  }

  /* Elements */
  .feed-title{ margin:.15rem 0 .35rem 0; font-weight:700; font-size:1.02rem; line-height:1.35; }
  .feed-title a{ text-decoration:none; color:#fff; }
  .feed-title a:hover{ text-decoration:underline; }
  .feed-meta{ font-size:.82rem; opacity:.8; margin-bottom:.5rem; display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
  .feed-tag{ display:inline-block; padding:.1rem .5rem; font-size:.7rem; border:1px solid rgba(255,255,255,.35); border-radius:999px; opacity:.9; }
  .feed-img{ width:100%; height:auto; border-radius:10px; margin:.5rem 0; border:1px solid rgba(255,255,255,.15); cursor: zoom-in; }
  .feed-text{ font-size:.94rem; line-height:1.5; opacity:.95; margin: .25rem 0 .5rem; }
  .feed-actions{ display:flex; gap:10px; flex-wrap:wrap; }
  .feed-actions a{ text-decoration:none; border:1px dashed rgba(255,255,255,.35); padding:.25rem .55rem; border-radius:8px; font-size:.82rem; }
  .feed-actions a:hover{ border-style:solid; }
  .feed-actions a, .feed-meta a{ color:inherit; }

  /* Simple lightbox */
  .lightbox{
    position:fixed; inset:0; background:rgba(0,0,0,.88);
    display:none; align-items:center; justify-content:center; z-index:9999;
  }
  .lightbox.open{ display:flex; }
  .lightbox img{
    max-width:92vw; max-height:92vh; border-radius:12px;
    box-shadow:0 10px 30px rgba(0,0,0,.6);
  }
  .lightbox:after{
    content:'✕';
    position:fixed; top:14px; right:18px; font-size:22px; color:#fff; opacity:.85;
  }
  .lightbox, .lightbox img{ cursor: zoom-out; }
</style>

<!-- ===== FEED BODY ===== -->
<ul class="feed-grid">

  <!-- Card: Optum start -->
  <li class="feed-card">
    <div class="feed-meta">
      🚀 <strong>2023 → Present</strong>
      <span class="feed-tag">Career</span>
      <time datetime="2023-08-01">Aug 1, 2023</time>
    </div>
    <h3 class="feed-title">Started at Optum (UnitedHealth Group) — Senior SWE ➜ Senior Data Scientist</h3>
    <img class="feed-img lightboxable" src="/images/optum.jpg" alt="Optum logo / banner">
    <p class="feed-text">
      Thrilled to work at the intersection of <strong>LLMs</strong>, healthcare systems, and enterprise AI—building scalable model
      pipelines that improve patient outcomes and operational efficiency. #TeamUnited
    </p>
    <div class="feed-actions">
      <a href="/">About my work</a>
    </div>
  </li>

  <!-- Card: Commendations -->
  <li class="feed-card">
    <div class="feed-meta">
      📌 <strong>Pinned</strong>
      <span class="feed-tag">Teaching</span>
      <time datetime="2022-08-15">Fall 2022 → Present</time>
    </div>
    <h3 class="feed-title">Commendations from Students</h3>
    <img class="feed-img lightboxable" src="/images/evaluation/Commendations from Students-1.png" alt="Commendations sample 1">
    <img class="feed-img lightboxable" src="/images/evaluation/Commendations from Students-2.png" alt="Commendations sample 2">
    <img class="feed-img lightboxable" src="/images/evaluation/Commendations from Students-3.png" alt="Commendations sample 3">
    <img class="feed-img lightboxable" src="/images/evaluation/Commendations from Students-4.png" alt="Commendations sample 4">
    <p class="feed-text">Grateful for the generous feedback that keeps me motivated to design rigorous, supportive learning experiences.</p>
  </li>

  <!-- Card: CAS PTF 2024 -->
  <li class="feed-card">
    <div class="feed-meta">
      🏆 <strong>2024</strong>
      <span class="feed-tag">Review</span>
      <time datetime="2025-04-05">Apr 5, 2025</time>
    </div>
    <h3 class="feed-title">CAS Sciences PTF Annual Review (Computer Science) — 2024</h3>
    <img class="feed-img lightboxable" src="/images/cas_annual_review/2024_1.png" alt="CAS review 2024 page 1">
    <img class="feed-img lightboxable" src="/images/cas_annual_review/2024_2.png" alt="CAS review 2024 page 2">
    <p class="feed-text">Highlights ongoing contributions to instruction, mentorship, and research initiatives.</p>
  </li>

  <!-- Card: COE Poster -->
  <li class="feed-card">
    <div class="feed-meta">
      🧪 <strong>2024</strong>
      <span class="feed-tag">Research</span>
      <time datetime="2024-06-01">Jun 1, 2024</time>
    </div>
    <h3 class="feed-title">13th Annual COE Graduate Poster Competition</h3>
    <img class="feed-img lightboxable" src="/images/13th COE Poster_Shakib_CBBE_Dr. Azad-1.png" alt="Poster image">
    <p class="feed-text">
      <em>“A Machine Learning Approach to Predict 3D Printability of Biopolymer-Based Ink.”</em>
      Exploring rheology-aware features and predictive modeling for additive manufacturing workflows.
    </p>
  </li>

  <!-- Card: CAS PTF 2023 -->
  <li class="feed-card">
    <div class="feed-meta">
      🏆 <strong>2023</strong>
      <span class="feed-tag">Review</span>
      <time datetime="2024-04-03">Apr 3, 2024</time>
    </div>
    <h3 class="feed-title">CAS Sciences PTF Annual Review (Computer Science) — 2023</h3>
    <img class="feed-img lightboxable" src="/images/cas_annual_review/2023_1.jpeg" alt="CAS review 2023 page 1">
    <img class="feed-img lightboxable" src="/images/cas_annual_review/2023_2.jpg" alt="CAS review 2023 page 2">
    <p class="feed-text">Documenting growth across teaching, service, and lab collaborations.</p>
  </li>

  <!-- Card: UNCG Lecturer -->
  <li class="feed-card">
    <div class="feed-meta">
      🎓 <strong>2023</strong>
      <span class="feed-tag">Teaching</span>
      <time datetime="2023-08-01">Aug 1, 2023</time>
    </div>
    <h3 class="feed-title">Joined UNCG as Computer Science Lecturer</h3>
    <img class="feed-img lightboxable" src="/images/lecturer.jpeg" alt="UNCG lecturer">
    <p class="feed-text">
      Honored to teach Systems Programming, Advanced Data Structures, and Data Science—aiming to cultivate clear thinking and
      craftsmanship in code.
    </p>
  </li>

  <!-- Card: LDEB preprint -->
  <li class="feed-card">
    <div class="feed-meta">
      📄 <strong>2023</strong>
      <span class="feed-tag">Preprint</span>
      <time datetime="2023-06-06">Jun 6, 2023</time>
    </div>
    <h3 class="feed-title">LDEB — arXiv Preprint Announced</h3>
    <div class="feed-text">
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7071891478133817345"
              height="360" width="100%" frameborder="0" allowfullscreen=""
              title="LinkedIn post: LDEB"></iframe>
    </div>
  </li>

  <!-- Card: Outstanding Grad Award -->
  <li class="feed-card">
    <div class="feed-meta">
      🏅 <strong>2023</strong>
      <span class="feed-tag">Award</span>
      <time datetime="2023-05-05">May 5, 2023</time>
    </div>
    <h3 class="feed-title">Outstanding Graduate Student Award</h3>
    <img class="feed-img lightboxable" src="/images/gradaward.jpeg" alt="Award photo">
    <p class="feed-text">
      Recognized by UNCG Computer Science for scholarly accomplishment and department contributions. Grateful to mentors,
      colleagues, friends, and family—“Remember the Love Bit.”
    </p>
  </li>

  <!-- Card: Commencement -->
  <li class="feed-card">
    <div class="feed-meta">
      🎓 <strong>2023</strong>
      <span class="feed-tag">Milestone</span>
      <time datetime="2023-05-04">May 4, 2023</time>
    </div>
    <h3 class="feed-title">Doctoral & Master’s Commencement — UNCG</h3>
    <img class="feed-img lightboxable" src="/images/graduation.jpeg" alt="Graduation photo">
    <p class="feed-text">
      Completed M.Sc. in Computer Science (Big Data & Data Science) at the Greensboro Coliseum ceremony.
    </p>
  </li>

  <!-- Card: Featured -->
  <li class="feed-card">
    <div class="feed-meta">
      🔊 <strong>2023</strong>
      <span class="feed-tag">Feature</span>
      <time datetime="2023-05-04">May 4, 2023</time>
    </div>
    <h3 class="feed-title">Featured on UNCG CS Website</h3>
    <img class="feed-img lightboxable" src="/images/featured.jpeg" alt="Featured image">
    <p class="feed-text">
      Presenting progress updates in IFFS-ML (Suthaharan Lab)—sharing results and next steps with peers.
    </p>
  </li>

</ul>

<!-- ===== LIGHTBOX (INLINE) ===== -->
<div class="lightbox" id="lightbox" onclick="this.classList.remove('open')">
  <img alt="">
</div>

<script>
  (function(){
    var box = document.getElementById('lightbox');
    var img = box.querySelector('img');
    document.addEventListener('click', function(e){
      var t = e.target;
      if(t.classList && t.classList.contains('lightboxable')){
        img.src = t.src;
        img.alt = t.alt || '';
        box.classList.add('open');
      }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ box.classList.remove('open'); }
    });
  })();
</script>
