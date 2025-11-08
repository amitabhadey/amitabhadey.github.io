---
permalink: /feed/
title: " "
layout: single
---

<h1 style="margin:0 0 .5rem 0;">📜 Feed &amp; Highlights</h1>
<p style="margin:0 0 1.25rem 0; opacity:.9;">
  A curated timeline of professional milestones, academic achievements, and research updates.
</p>
<hr style="border:none;border-top:1px solid #666;opacity:.4;margin:1rem 0 1.25rem;">

<!-- ===== INLINE STYLES (NAMESPACED) ===== -->
<style>
/* scope everything so Minimal Mistakes styles don't override */
.mm-feed .feed-year{ margin:1.25rem 0 2rem; }
.mm-feed .feed-year h2{ margin:.5rem 0 1rem; font-size:1.05rem; font-weight:800; letter-spacing:.02em; opacity:.95; }
.mm-feed .feed-list{ list-style:none; margin:0; padding:0; display:grid; gap:.75rem; }

/* Item (compact like publication entries) */
.mm-feed .feed-item{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px;
  background:rgba(255,255,255,.03);
  padding:.75rem .9rem;
}
.mm-feed .feed-head{
  display:flex; align-items:center; gap:.6rem; flex-wrap:wrap;
  font-size:.95rem; line-height:1.35;
}
.mm-feed .feed-title{ font-weight:700; margin:0; }
.mm-feed .feed-tag{
  border:1px solid rgba(255,255,255,.35);
  border-radius:999px; padding:.05rem .5rem;
  font-size:.72rem; opacity:.9;
}
.mm-feed .feed-time{ font-size:.82rem; opacity:.75; }
.mm-feed .feed-note{ font-size:.9rem; opacity:.9; margin:.15rem 0 0; }

/* Expandable body */
.mm-feed .feed-details summary{
  cursor:pointer; font-weight:600; margin:.4rem 0 0; list-style:none;
}
.mm-feed .feed-details summary::-webkit-details-marker{ display:none; }
.mm-feed .feed-details[open] summary{ opacity:.95; }
.mm-feed .feed-body{ margin:.45rem 0 0; font-size:.94rem; line-height:1.55; opacity:.95; }

/* Images + lightbox */
.mm-feed .feed-img{
  width:100%; height:auto; border-radius:10px; margin:.45rem 0;
  border:1px solid rgba(255,255,255,.15); cursor:zoom-in;
}

/* Lightbox overlay */
.mm-feed .lightbox{ position:fixed; inset:0; background:rgba(0,0,0,.88); display:none; place-items:center; z-index:9999; }
.mm-feed .lightbox.open{ display:grid; }
.mm-feed .lightbox img{ max-width:92vw; max-height:92vh; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,.6); }
.mm-feed .lightbox:after{ content:'✕'; position:fixed; top:14px; right:18px; font-size:22px; color:#fff; opacity:.85; }
.mm-feed .lightbox, .mm-feed .lightbox img{ cursor:zoom-out; }

/* Light mode fallback */
@media (prefers-color-scheme: light){
  .mm-feed .feed-item{ background:#fff; border-color:#e5e7eb; }
  .mm-feed .feed-tag{ border-color:#e5e7eb; color:#111; }
  .mm-feed .feed-year h2, .mm-feed .feed-title, .mm-feed .feed-note, .mm-feed .feed-time, .mm-feed .feed-details summary{ color:#111; }
}

/* Optional: center/tighten */
@media (min-width:1080px){
  .mm-feed .feed-wrap{ max-width:980px; margin:0 auto; }
}
</style>

<div class="mm-feed">
  <div class="feed-wrap">

    <!-- ===== 2023–Present ===== -->
    <section class="feed-year" aria-label="2023–Present">
      <h2>🚀 2023–Present</h2>
      <ul class="feed-list">

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Career</span>
            <time class="feed-time" datetime="2023-08-01">Aug 1, 2023</time>
          </div>
          <p class="feed-title">Started at Optum (UnitedHealth Group) — Senior SWE ➜ Senior Data Scientist</p>
          <p class="feed-note">Working at the intersection of <strong>LLMs</strong>, healthcare systems, and enterprise AI.</p>
          <details class="feed-details">
            <summary>View details &amp; media</summary>
            <div class="feed-body">
              <p>Building scalable model pipelines that improve patient outcomes and operational efficiency. #TeamUnited</p>
              <img class="feed-img lightboxable" src="/images/optum.jpg" alt="Optum banner">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Teaching</span>
            <time class="feed-time">Fall 2022 → Present</time>
          </div>
          <p class="feed-title">Commendations from Students</p>
          <p class="feed-note">Grateful for the feedback that fuels rigorous, supportive learning experiences.</p>
          <details class="feed-details">
            <summary>View gallery</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/evaluation/Commendations%20from%20Students-1.png" alt="Commendations 1">
              <img class="feed-img lightboxable" src="/images/evaluation/Commendations%20from%20Students-2.png" alt="Commendations 2">
              <img class="feed-img lightboxable" src="/images/evaluation/Commendations%20from%20Students-3.png" alt="Commendations 3">
              <img class="feed-img lightboxable" src="/images/evaluation/Commendations%20from%20Students-4.png" alt="Commendations 4">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Review</span>
            <time class="feed-time" datetime="2025-04-05">Apr 5, 2025</time>
          </div>
          <p class="feed-title">CAS Sciences PTF Annual Review (Computer Science) — 2024</p>
          <p class="feed-note">Highlights ongoing contributions to instruction, mentorship, and research initiatives.</p>
          <details class="feed-details">
            <summary>Open images</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/cas_annual_review/2024_1.png" alt="CAS review 2024 page 1">
              <img class="feed-img lightboxable" src="/images/cas_annual_review/2024_2.png" alt="CAS review 2024 page 2">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Research</span>
            <time class="feed-time" datetime="2024-06-01">Jun 1, 2024</time>
          </div>
          <p class="feed-title">13th Annual COE Graduate Poster Competition</p>
          <p class="feed-note"><em>“A Machine Learning Approach to Predict 3D Printability of Biopolymer-Based Ink.”</em></p>
          <details class="feed-details">
            <summary>View poster</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/13th%20COE%20Poster_Shakib_CBBE_Dr.%20Azad-1.png" alt="Poster">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Review</span>
            <time class="feed-time" datetime="2024-04-03">Apr 3, 2024</time>
          </div>
          <p class="feed-title">CAS Sciences PTF Annual Review (Computer Science) — 2023</p>
          <p class="feed-note">Documenting growth across teaching, service, and lab collaborations.</p>
          <details class="feed-details">
            <summary>Open images</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/cas_annual_review/2023_1.jpeg" alt="CAS review 2023 page 1">
              <img class="feed-img lightboxable" src="/images/cas_annual_review/2023_2.jpg" alt="CAS review 2023 page 2">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Teaching</span>
            <time class="feed-time" datetime="2023-08-01">Aug 1, 2023</time>
          </div>
          <p class="feed-title">Joined UNCG as Computer Science Lecturer</p>
          <p class="feed-note">Taught Systems Programming, Advanced Data Structures, and Data Science.</p>
          <details class="feed-details">
            <summary>View photo</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/lecturer.jpeg" alt="UNCG lecturer">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Preprint</span>
            <time class="feed-time" datetime="2023-06-06">Jun 6, 2023</time>
          </div>
          <p class="feed-title">LDEB — arXiv Preprint Announced</p>
          <details class="feed-details">
            <summary>Open post</summary>
            <div class="feed-body">
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7071891478133817345"
                      height="360" width="100%" frameborder="0" allowfullscreen=""
                      title="LinkedIn post: LDEB"></iframe>
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Award</span>
            <time class="feed-time" datetime="2023-05-05">May 5, 2023</time>
          </div>
          <p class="feed-title">Outstanding Graduate Student Award</p>
          <p class="feed-note">Recognized by UNCG CS for scholarly accomplishment and department contributions.</p>
          <details class="feed-details">
            <summary>View photo</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/gradaward.jpeg" alt="Award photo">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Milestone</span>
            <time class="feed-time" datetime="2023-05-04">May 4, 2023</time>
          </div>
          <p class="feed-title">Doctoral &amp; Master’s Commencement — UNCG</p>
          <details class="feed-details">
            <summary>View photo</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/graduation.jpeg" alt="Graduation photo">
            </div>
          </details>
        </li>

        <li class="feed-item">
          <div class="feed-head">
            <span class="feed-tag">Feature</span>
            <time class="feed-time" datetime="2023-05-04">May 4, 2023</time>
          </div>
          <p class="feed-title">Featured on UNCG CS Website</p>
          <details class="feed-details">
            <summary>View image</summary>
            <div class="feed-body">
              <img class="feed-img lightboxable" src="/images/featured.jpeg" alt="Featured image">
            </div>
          </details>
        </li>

      </ul>
    </section>

  </div>

  <!-- ===== LIGHTBOX ===== -->
  <div class="lightbox" id="lightbox" onclick="this.classList.remove('open')">
    <img alt="">
  </div>
</div>

<script>
// minimal, namespaced lightbox
(function(){
  var box=document.getElementById('lightbox');
  if(!box) return;
  var img=box.querySelector('img');
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t.classList && t.classList.contains('lightboxable')){
      img.src=t.getAttribute('src'); img.alt=t.getAttribute('alt')||''; box.classList.add('open');
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){ box.classList.remove('open'); }
  });
})();
</script>
