---
permalink: /resources/
title: " "
---

<h1 style="margin:0 0 .75rem 0;">📣 Resources</h1>
<p style="margin:0 0 .5rem 0;opacity:.9">
Curated links I reference often—courses, papers, guides, and utilities.
</p>

<!-- SEARCH BAR -->
<input id="searchInput" type="text" placeholder="Search..." 
style="width:100%;padding:.6rem .75rem;border-radius:8px;border:1px solid rgba(255,255,255,.25);margin:0 0 1.2rem 0;background:rgba(255,255,255,.03);color:inherit;">

<!-- NAV -->
<nav style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 1.4rem 0;">
  <a href="#aillmtech" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">AI/LLM/TECH</a>
  <a href="#finance" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">FINANCE</a>
  <a href="#health" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">HEALTH</a>
  <a href="#productivity" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">PRODUCTIVITY</a>
  <a href="#psychology" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">PSYCHOLOGY</a>
  <a href="#science" style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">SCIENCE</a>
</nav>

<style>
.res-sec{ margin:1.6rem 0 2.2rem; }
.res-sec h3{ margin:0 0 .85rem 0; font-size:1.05rem; }
.links{ list-style:none; margin:0; padding:0; display:grid; gap:.65rem; }
.card{ border:1px solid rgba(255,255,255,.25); border-radius:12px; padding:.7rem .85rem; background:rgba(255,255,255,.03);}
.card h4{ margin:0 0 .15rem 0; font-size:.98rem; }
.card .meta{ font-size:.8rem; opacity:.75; margin:0 0 .35rem 0; }
.actions a{ font-size:.82rem; border:1px dashed rgba(255,255,255,.35); padding:.25rem .55rem; border-radius:8px; text-decoration:none; }
.actions a:hover{ border-style:solid; }
@media (prefers-color-scheme: light){
  .card{ background:#fff;border-color:#e5e7eb; }
}
</style>

{% assign list = site.data.resources | map: "" %}
{% assign sections = "ai/llm/tech,finance,health,productivity,psychology,science" | split: "," %}

{% for sec in sections %}
  <section id="{{ sec | replace: '/', '' | replace: ' ', '' }}" class="res-sec">
    <h3>
      {% case sec %}
        {% when "ai/llm/tech" %}🤖 AI / LLM / Tech
        {% when "finance" %}💰 Finance
        {% when "health" %}🩺 Health
        {% when "productivity" %}⚡ Productivity
        {% when "psychology" %}🧠 Psychology
        {% when "science" %}🔬 Science
      {% endcase %}
    </h3>

    {% assign items = "" | split: "" %}
    {% for item in list %}
      {% assign clean_section = item.section | replace: "﻿", "" %}
      {% if clean_section == sec %}
        {% assign items = items | push: item %}
      {% endif %}
    {% endfor %}
    {% assign items = items | sort: "title" %}

    <ul class="links">
      {% for item in items %}
      <li class="card" data-search="{{ item.title }} {{ item.meta }} {{ item.desc }}">
        <h4><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h4>
        {% if item.meta %}<div class="meta">{{ item.meta }}</div>{% endif %}
        {% if item.desc %}<p>{{ item.desc }}</p>{% endif %}
        <div class="actions"><a href="{{ item.url }}" target="_blank" rel="noopener">Open</a></div>
      </li>
      {% endfor %}
      {% if items.size == 0 %}<li class="card"><p>No links yet.</p></li>{% endif %}
    </ul>
  </section>
{% endfor %}

<script>
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const q = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const t = card.getAttribute("data-search")?.toLowerCase() || "";
    card.style.display = t.includes(q) ? "" : "none";
  });
});
</script>
