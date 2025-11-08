---
permalink: /resources/
title: " "
---

<h1 style="margin:0 0 .75rem 0;">📣 Resources</h1>
<p style="margin:0 0 1rem 0;opacity:.9">
Curated links I reference often—courses, papers, guides, and utilities.
</p>

<!-- Top nav pills (kept exactly as requested) -->
<nav style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 1rem 0;">
  <a href="#aillmtech" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">AI/LLM/TECH</a>
  <a href="#finance" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">FINANCE</a>
  <a href="#health" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">HEALTH</a>
  <a href="#productivity" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">PRODUCTIVITY</a>
  <a href="#psychology" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">PSYCHOLOGY</a>
</nav>

<style>
.res-sec{ margin:1.6rem 0 2.2rem; }
.res-sec h3{ margin:0 0 .85rem 0; font-size:1.05rem; letter-spacing:.01em; }
.links{ list-style:none; margin:0; padding:0; display:grid; gap:.65rem; }

.card{
  border:1px solid rgba(255,255,255,.25);
  border-radius:12px; padding:.7rem .85rem;
  background:rgba(255,255,255,.03);
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

@media (prefers-color-scheme: light){
  .card{ background:#fff;border-color:#e5e7eb; }
}
</style>

{% assign all = site.data.resources | default: empty %}
{% assign by_card = all | where: "format", "card" %}

<!-- AI/LLM/TECH -->
<section id="aillmtech" class="res-sec">
  <h3>🤖 AI / LLM / Tech</h3>
  {% assign tag = "ai/llm/tech" %}
  {% assign items = by_card | where_exp:"i","i.title" | sort:"title" | where_exp:"i","i.tags and i.tags contains tag" %}
  <ul class="links">
    {% for item in items %}
      <li class="card">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        <div class="meta">{{ item.meta }}</div>
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {% endfor %}
    {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
  </ul>
</section>

<!-- FINANCE -->
<section id="finance" class="res-sec">
  <h3>💰 Finance</h3>
  {% assign tag = "finance" %}
  {% assign items = by_card | where_exp:"i","i.title" | sort:"title" | where_exp:"i","i.tags and i.tags contains tag" %}
  <ul class="links">
    {% for item in items %}
      <li class="card">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        <div class="meta">{{ item.meta }}</div>
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {% endfor %}
    {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
  </ul>
</section>

<!-- HEALTH -->
<section id="health" class="res-sec">
  <h3>🩺 Health</h3>
  {% assign tag = "health" %}
  {% assign items = by_card | where_exp:"i","i.title" | sort:"title" | where_exp:"i","i.tags and i.tags contains tag" %}
  <ul class="links">
    {% for item in items %}
      <li class="card">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        <div class="meta">{{ item.meta }}</div>
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {% endfor %}
    {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
  </ul>
</section>

<!-- PRODUCTIVITY -->
<section id="productivity" class="res-sec">
  <h3>⚡ Productivity</h3>
  {% assign tag = "productivity" %}
  {% assign items = by_card | where_exp:"i","i.title" | sort:"title" | where_exp:"i","i.tags and i.tags contains tag" %}
  <ul class="links">
    {% for item in items %}
      <li class="card">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        <div class="meta">{{ item.meta }}</div>
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {% endfor %}
    {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
  </ul>
</section>

<!-- PSYCHOLOGY -->
<section id="psychology" class="res-sec">
  <h3>🧠 Psychology</h3>
  {% assign tag = "psychology" %}
  {% assign items = by_card | where_exp:"i","i.title" | sort:"title" | where_exp:"i","i.tags and i.tags contains tag" %}
  <ul class="links">
    {% for item in items %}
      <li class="card">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        <div class="meta">{{ item.meta }}</div>
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
    {% endfor %}
    {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
  </ul>
</section>
