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

<!-- Quick search -->
<div style="margin:.5rem 0 1.25rem 0;display:flex;gap:.6rem;align-items:center;">
  <input id="link-search" type="search" placeholder="Search resources…"
         style="flex:1;max-width:520px;padding:.55rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:10px;background:transparent;color:inherit;">
  <small style="opacity:.7;">Press <kbd style="border:1px solid currentColor;border-radius:4px;padding:0 .25rem;opacity:.7;">/</kbd> to focus</small>
</div>
<p id="no-results" style="display:none;opacity:.75;margin:.25rem 0 1rem 0;">No results. Try a different search.</p>

<style>
/* Cards */
.res-sec{ margin:1.5rem 0 2rem; }
.res-sec h3{ margin:.1rem 0 .8rem 0; font-size:1.05rem; letter-spacing:.01em; }
.links{ list-style:none; margin:0; padding:0; display:grid; gap:.65rem; }
.card{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px; padding:.7rem .85rem; background:rgba(255,255,255,.03);
}
.card h4{ margin:0 0 .25rem 0; font-size:.98rem; }
.card p{ margin:.15rem 0 0 0; font-size:.9rem; opacity:.95; }
.card .meta{ display:flex; gap:.5rem; flex-wrap:wrap; font-size:.8rem; opacity:.8; margin:.25rem 0 .35rem; }
.actions{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:.4rem; }
.actions a{
  font-size:.82rem; text-decoration:none; padding:.25rem .55rem; border-radius:8px;
  border:1px dashed rgba(255,255,255,.35); background:transparent; color:inherit; cursor:pointer;
}
.actions a:hover{ border-style:solid; }

/* Light mode */
@media (prefers-color-scheme: light){
  .card{ background:#fff;border-color:#e5e7eb; }
  #link-search{ border-color:#e5e7eb; }
}

/* Tables (kept if you add any later) */
.table-wrap{ overflow:auto; border-radius:12px; border:1px solid rgba(255,255,255,.25); }
table.minimal{ width:100%; border-collapse:separate; border-spacing:0; }
table.minimal th, table.minimal td{ padding:.6rem .75rem; border-bottom:1px solid rgba(255,255,255,.15); vertical-align:top; }
table.minimal th{ text-align:left; font-weight:700; position:sticky; top:0; backdrop-filter:saturate(120%); }
table.minimal tr:last-child td{ border-bottom:none; }

@media (prefers-color-scheme: light){
  .table-wrap{ border-color:#e5e7eb; }
  table.minimal th, table.minimal td{ border-bottom:1px solid #ececec; }
}
kbd{ font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace; font-size:.75em; }

/* Tools grid */
#tools .res-list{list-style:none;margin:.5rem 0 0;padding:0;display:grid;gap:.6rem}
@media(min-width:720px){#tools .res-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(min-width:1160px){#tools .res-list{grid-template-columns:repeat(3,minmax(0,1fr))}}
#tools .res-item{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px; background:rgba(255,255,255,.03);
  padding:.8rem .9rem; display:grid; grid-template-rows:auto auto 1fr; gap:.35rem
}
#tools .res-title{margin:0;font-weight:700;letter-spacing:.01em}
#tools .res-desc{margin:0;opacity:.9;font-size:.92rem;line-height:1.45}
#tools .res-link a{
  display:inline-block;margin-top:.15rem;text-decoration:none;border:1px dashed rgba(255,255,255,.35);
  padding:.25rem .55rem;border-radius:8px;font-size:.85rem;color:inherit
}
#tools .res-link a:hover{border-style:solid}
@media (prefers-color-scheme: light){
  #tools .res-item{background:#fff;border-color:#e5e7eb}
  #tools .res-link a{border-color:#e5e7eb;color:#111}
  #tools .res-title,#tools .res-desc{color:#111}
}
</style>

{%- comment -%} Load and split CSV rows {%- endcomment -%}
{%- assign all = site.data.resources | default: empty -%}
{%- assign by_card = all | where: "format", "card" -%}
{%- assign by_tile = all | where: "format", "tile" -%}

{%- comment -%} ======== BOOKMARKS ======== {%- endcomment -%}
<section id="bookmarks" class="res-sec">
  <h3>📌 Bookmarks</h3>
  {%- assign items = by_card | where: "section", "bookmarks" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4>
          <a href="{{ item.url | escape }}" target="_blank" rel="noopener">
            {{ item.title | default: item.url | escape }}
          </a>
        </h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions">
          <a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a>
        </div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No bookmarks yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== DSA ======== {%- endcomment -%}
<section id="dsa" class="res-sec">
  <h3>🧩 Data Structures & Algorithms</h3>
  {%- assign items = by_card | where: "section", "dsa" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No DSA links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== ML ======== {%- endcomment -%}
<section id="ml" class="res-sec">
  <h3>🤖 Machine Learning</h3>
  {%- assign items = by_card | where: "section", "ml" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No ML links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== DATA SCIENCE ======== {%- endcomment -%}
<section id="datasci" class="res-sec">
  <h3>📊 Data Science</h3>
  {%- assign items = by_card | where: "section", "datasci" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No Data Science links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== MATH ======== {%- endcomment -%}
<section id="math" class="res-sec">
  <h3>∑ Mathematics</h3>
  {%- assign items = by_card | where: "section", "math" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No Math links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== HARVARD ======== {%- endcomment -%}
<section id="harvard" class="res-sec">
  <h3>🎓 Harvard Courses</h3>
  {%- assign items = by_card | where: "section", "harvard" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No Harvard links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== JOBS ======== {%- endcomment -%}
<section id="jobs" class="res-sec">
  <h3>💼 Jobs & Interviews</h3>
  {%- assign items = by_card | where: "section", "jobs" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No Jobs links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== WRITING ======== {%- endcomment -%}
<section id="writing" class="res-sec">
  <h3>✍️ Writing</h3>
  {%- assign items = by_card | where: "section", "writing" | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="links">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="card" data-tags="{{ item.tags | default: '' | escape }}">
        <h4><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.title | default: item.url | escape }}</a></h4>
        <div class="meta">{{ item.meta | default: '' }}</div>
        {%- if item.desc -%}<p>{{ item.desc }}</p>{%- endif -%}
        <div class="actions"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {%- endfor -%}
  {%- else -%}
    <li class="card"><p>No Writing links yet.</p></li>
  {%- endif -%}
  </ul>
</section>

{%- comment -%} ======== TOOLS (TILES) ======== {%- endcomment -%}
<section id="tools" class="res-sec">
  <h3>🛠️ Tools</h3>
  {%- assign items = by_tile | where: "section", "tools" -%}
  {%- assign items = items | where_exp: "i","i.title" | sort: "title" -%}
  <ul class="res-list">
  {%- if items and items.size > 0 -%}
    {%- for item in items -%}
      <li class="res-item">
        <p class="res-title">{{ item.title | default: item.url | escape }}</p>
        {%- if item.desc -%}<p class="res-desc">{{ item.desc }}</p>{%- endif -%}
        <p class="res-link"><a href="{{ item.url | escape }}" target="_blank" rel="noopener">{{ item.url | escape }}</a></p>
      </li>
    {%- endfor -%}
  {%- else -%}
      <li class="res-item">
        <p class="res-title">No tools yet</p>
        <p class="res-desc">Add rows with format=tile in <code>_data/resources.csv</code></p>
      </li>
  {%- endif -%}
  </ul>
</section>

<!-- ========= SEARCH (tiny JS) ========= -->
<script>
(function(){
  function onReady(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn, { once:true });
  }

  onReady(function(){
    const q = document.getElementById('link-search');
    const noRes = document.getElementById('no-results');

    if(!q) return;

    // Get all searchable items (cards + tool tiles)
    const getItems = () => Array.from(document.querySelectorAll('.card, #tools .res-item'));

    // Build text index for each element: text + tags + hrefs
    function indexEl(el){
      const parts = [];
      parts.push(el.textContent || '');
      const tags = el.getAttribute('data-tags');
      if (tags) parts.push(tags);
      el.querySelectorAll('a[href]').forEach(a=>{
        parts.push(a.textContent || '');
        parts.push(a.getAttribute('href') || '');
      });
      el.dataset._idx = parts.join(' ').replace(/\s+/g,' ').toLowerCase();
    }

    let items = getItems();
    items.forEach(indexEl);

    function anyVisibleInSection(section){
      return !!section.querySelector('.card:not([style*="display: none"]) , .res-item:not([style*="display: none"])');
    }

    function filter(){
      const v = (q.value || '').toLowerCase().trim();

      if(!v){
        items.forEach(el => el.style.display = '');
      }else{
        items.forEach(el => {
          const idx = el.dataset._idx || '';
          el.style.display = idx.includes(v) ? '' : 'none';
        });
      }

      // Hide entire sections with no visible items
      document.querySelectorAll('.res-sec').forEach(sec=>{
        sec.style.display = anyVisibleInSection(sec) ? '' : 'none';
      });

      // Toggle global "no results" message
      const anyVisible = items.some(el => el.style.display !== 'none');
      if (noRes) noRes.style.display = anyVisible ? 'none' : '';
    }

    // Debounce typing
    let to = null;
    q.addEventListener('input', () => { clearTimeout(to); to = setTimeout(filter, 60); });

    // Keyboard shortcuts: "/" to focus, "Esc" to clear
    document.addEventListener('keydown', (e)=>{
      if (e.key === '/' && document.activeElement !== q){
        e.preventDefault(); q.focus(); q.select();
      } else if (e.key === 'Escape' && document.activeElement === q){
        q.value = ''; filter();
      }
    });

    // Reindex on BFCache restore or DOM mutations in tools
    function rebind(){
      items = getItems();
      items.forEach(indexEl);
      filter();
    }
    window.addEventListener('pageshow', rebind);

    const toolsRoot = document.getElementById('tools');
    if (toolsRoot && 'MutationObserver' in window){
      const mo = new MutationObserver(rebind);
      mo.observe(toolsRoot, { childList:true, subtree:true });
    }

    // Initial pass
    filter();
  });
})();
</script>
