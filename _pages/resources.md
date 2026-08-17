---
permalink: /resources/
title: " "
---

<h1 style="margin:0 0 .75rem 0;">Resources</h1>

<input id="searchInput" type="text" placeholder="Search..."
style="width:100%;padding:.6rem .75rem;border-radius:8px;border:1px solid rgba(255,255,255,.25);margin:0 0 1.2rem 0;background:rgba(255,255,255,.03);color:inherit;">

<style>
.res-sec{ margin:1.6rem 0 2.2rem; }
.res-sec h3{ margin:0 0 .85rem 0; font-size:1.05rem; }
.links{ list-style:none; margin:0; padding:0; display:grid; gap:.65rem; }
.card{ border:1px solid rgba(255,255,255,.25); border-radius:12px; padding:.7rem .85rem; background:rgba(255,255,255,.03);}
.card h4{ margin:0 0 .15rem 0; font-size:.98rem; }
.card .meta{ font-size:.8rem; opacity:.75; margin:0 0 .35rem 0; }
.card img{ display:block; width:100%; max-height:220px; object-fit:cover; border-radius:10px; border:1px solid rgba(255,255,255,.2); margin:0 0 .7rem 0; }
.actions a{ font-size:.82rem; border:1px dashed rgba(255,255,255,.35); padding:.25rem .55rem; border-radius:8px; text-decoration:none; }
.actions a:hover{ border-style:solid; }
@media (prefers-color-scheme: light){ .card{ background:#fff;border-color:#e5e7eb; } .card img{ border-color:#e5e7eb; } }
</style>

{% assign raw = site.data.resources %}
{% assign extras = site.data.resources_images %}
{% if extras %}
  {% assign raw = raw | concat: extras %}
{% endif %}
{% assign sections = "ai/llm/tech,finance,health,productivity,psychology,science" | split: "," %}

{% assign all_items = raw | sort: "title" %}

<ul class="links">
  {% for item in all_items %}
  <li class="card" data-search="{{ item.title }} {{ item.meta }} {{ item.desc }}">
    {% if item.image %}
      <a href="{{ item.url | default: item.image }}" target="_blank" rel="noopener"><img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy"></a>
    {% endif %}
    <h4><a href="{{ item.url | default: item.image }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
    {% if item.meta %}<div class="meta">{{ item.meta }}</div>{% endif %}
    {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
    <div class="actions"><a href="{{ item.url | default: item.image }}" target="_blank" rel="noopener">Open</a></div>
  </li>
  {% endfor %}
  {% if all_items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
</ul>

<script>
const input = document.getElementById("searchInput");
input.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const t = card.getAttribute("data-search").toLowerCase();
    card.style.display = t.includes(q) ? "" : "none";
  });
});
</script>
