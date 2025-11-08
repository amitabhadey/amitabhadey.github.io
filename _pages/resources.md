---
permalink: /resources/
title: " "
---

<h1 style="margin:0 0 .75rem 0;">📣 Resources</h1>
<p style="margin:0 0 1rem 0;opacity:.9">Curated links I reference often—courses, papers, guides, and utilities.</p>

<!-- Top nav pills -->
<nav style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 1rem 0;">
  <a href="#bookmarks" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">📌 Bookmarks</a>
  <a href="#dsa"       style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🧩 DSA</a>
  <a href="#ml"        style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🤖 ML</a>
  <a href="#datasci"   style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">📊 Data Science</a>
  <a href="#math"      style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">∑ Math</a>
  <a href="#harvard"   style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🎓 Harvard</a>
  <a href="#jobs"      style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">💼 Jobs</a>
  <a href="#writing"   style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">✍️ Writing</a>
  <a href="#tools"     style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🛠️ Tools</a>
</nav>

<style>
/* Sections & cards */
.res-sec{ margin:1.5rem 0 2rem; }
.res-sec h3{ margin:.1rem 0 .8rem 0; font-size:1.05rem; letter-spacing:.01em; }
.links{ list-style:none; margin:0; padding:0; display:grid; gap:.65rem; }

.card{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px;
  padding:.7rem .85rem;
  background:rgba(255,255,255,.03);
}
.card h4{ margin:0 0 .25rem 0; font-size:.98rem; }
.card p{ margin:.15rem 0 0 0; font-size:.9rem; opacity:.95; }
.card .meta{
  display:flex; gap:.5rem; flex-wrap:wrap;
  font-size:.8rem; opacity:.8; margin:.25rem 0 .35rem;
}
.actions{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:.4rem; }
.actions a, .actions button{
  font-size:.82rem; text-decoration:none; padding:.25rem .55rem; border-radius:8px;
  border:1px dashed rgba(255,255,255,.35); background:transparent; color:inherit; cursor:pointer;
}
.actions a:hover, .actions button:hover{ border-style:solid; }

/* Tables (if you add any later) */
.table-wrap{ overflow:auto; border-radius:12px; border:1px solid rgba(255,255,255,.25); }
table.minimal{ width:100%; border-collapse:separate; border-spacing:0; }
table.minimal th, table.minimal td{
  padding:.6rem .75rem; border-bottom:1px solid rgba(255,255,255,.15); vertical-align:top;
}
table.minimal th{ text-align:left; font-weight:700; position:sticky; top:0; backdrop-filter:saturate(120%); }
table.minimal tr:last-child td{ border-bottom:none; }

/* Light mode */
@media (prefers-color-scheme: light){
  .card{ background:#fff; border-color:#e5e7eb; }
  .table-wrap{ border-color:#e5e7eb; }
  table.minimal th, table.minimal td{ border-bottom:1px solid #ececec; }
}

/* Tools grid (scoped) */
#tools .res-list{ list-style:none; margin:.5rem 0 0; padding:0; display:grid; gap:.6rem; }
@media(min-width:720px){ #tools .res-list{ grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media(min-width:1160px){ #tools .res-list{ grid-template-columns:repeat(3,minmax(0,1fr)); } }

#tools .res-item{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px;
  background:rgba(255,255,255,.03);
  padding:.8rem .9rem;
  display:grid; grid-template-rows:auto auto 1fr; gap:.35rem;
}
#tools .res-title{ margin:0; font-weight:700; letter-spacing:.01em; }
#tools .res-desc{ margin:0; opacity:.9; font-size:.92rem; line-height:1.45; }
#tools .res-link a{
  display:inline-block; margin-top:.15rem;
  text-decoration:none; border:1px dashed rgba(255,255,255,.35);
  padding:.25rem .55rem; border-radius:8px; font-size:.85rem; color:inherit;
}
#tools .res-link a:hover{ border-style:solid; }

@media (prefers-color-scheme: light){
  #tools .res-item{ background:#fff; border-color:#e5e7eb; }
  #tools .res-link a{ border-color:#e5e7eb; color:#111; }
  #tools .res-title, #tools .res-desc{ color:#111; }
}
</style>

{%- comment -%} Pull from CSV with robust matching {%- endcomment -%}
{%- assign all = site.data.resources -%}
{%- assign by_card = all | where_exp: "i", "i.format | downcase | strip == 'card'" -%}
{%- assign by_tile = all | where_exp: "i", "i.format | downcase | strip == 'tile'" -%}

<!-- ========= BOOKMARKS ========= -->
<section id="bookmarks" class="res-sec">
  <h3>📌 Bookmarks</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'bookmarks'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No bookmarks yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= DSA ========= -->
<section id="dsa" class="res-sec">
  <h3>🧩 Data Structures & Algorithms</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'dsa'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No DSA links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= MACHINE LEARNING ========= -->
<section id="ml" class="res-sec">
  <h3>🤖 Machine Learning</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'ml'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No ML links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= DATA SCIENCE ========= -->
<section id="datasci" class="res-sec">
  <h3>📊 Data Science</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'datasci'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No Data Science links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= MATHEMATICS ========= -->
<section id="math" class="res-sec">
  <h3>∑ Mathematics</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'math'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No Math links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= HARVARD COURSES ========= -->
<section id="harvard" class="res-sec">
  <h3>🎓 Harvard Courses</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'harvard'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No Harvard links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= JOBS ========= -->
<section id="jobs" class="res-sec">
  <h3>💼 Jobs & Interviews</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'jobs'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No Jobs links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= WRITING ========= -->
<section id="writing" class="res-sec">
  <h3>✍️ Writing</h3>
  {%- assign items = by_card | where_exp: "i", "i.section | downcase | strip == 'writing'" | sort: "title" -%}
  <ul class="links">
    {%- for item in items -%}
      {%- include resource_card.html item=item -%}
    {%- else -%}
      <li class="card"><p>No Writing links yet.</p></li>
    {%- endfor -%}
  </ul>
</section>

<!-- ========= TOOLS (LIST-CARDS) ========= -->
<section id="tools" class="res-sec">
  <h3>🛠️ Tools</h3>

  {%- assign items = by_tile | where_exp: "i", "i.section | downcase | strip == 'tools'" | sort: "title" -%}
  <ul class="res-list">
    {%- for item in items -%}
      {%- include resource_tile.html item=item -%}
    {%- else -%}
      <li class="res-item">
        <p class="res-title">No tools yet</p>
        <p class="res-desc">Add rows with format=tile in _data/resources.csv</p>
      </li>
    {%- endfor -%}
  </ul>
</section>

<!--
DATA-SOURCE NOTES:
- Rows live in _data/resources.csv with columns:
  section,title,url,meta,desc,tags,format
- Use format=card for normal sections, format=tile for Tools grid.
-->
