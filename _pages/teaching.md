---
permalink: /teaching/
title: " "
---

<!-- ===== PAGE HEADER ===== -->
<h1 style="margin:0 0 .5rem 0;">🎓 Teaching</h1>
<p style="margin:0 0 1.25rem 0; opacity:.9;">
  Selected courses I’ve taught at the University of North Carolina at Greensboro (UNCG).
</p>
<hr style="border:none;border-top:1px solid #666;opacity:.35;margin:1rem 0 1.25rem;">

<!-- ===== INLINE STYLES ===== -->
<style>
  .teach-wrap{ margin:0; padding:0; }
  .teach-list{ list-style:none; margin:0; padding:0; display:grid; gap:1rem; }
  .teach-card{
    border:1px solid rgba(255,255,255,.28);
    border-radius:14px;
    background:rgba(255,255,255,.03);
    padding:14px 16px;
  }
  .teach-hd{
    display:flex; flex-wrap:wrap; gap:.5rem .75rem; align-items:center; margin:0 0 .35rem 0;
  }
  .teach-title{ margin:0; font-weight:800; font-size:1.05rem; line-height:1.35; }
  .teach-meta{ font-size:.82rem; opacity:.85; display:flex; gap:.5rem; flex-wrap:wrap; }
  .badge{
    display:inline-block; padding:.12rem .55rem; border-radius:999px;
    border:1px solid rgba(255,255,255,.35); font-size:.72rem; opacity:.95;
  }
  .teach-note{ margin:.35rem 0 .5rem; font-size:.95rem; line-height:1.55; opacity:.96; }
  .teach-actions{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:.4rem; }
  .teach-actions a{
    text-decoration:none; border:1px dashed rgba(255,255,255,.35);
    padding:.28rem .65rem; border-radius:8px; font-size:.85rem;
  }
  .teach-actions a:hover{ border-style:solid; }

  /* Expandable details */
  .teach-details summary{
    cursor:pointer; list-style:none; font-weight:700; margin-top:.35rem;
  }
  .teach-details summary::-webkit-details-marker{ display:none; }
  .teach-body{ margin:.4rem 0 0; font-size:.94rem; line-height:1.6; opacity:.95; }
  .teach-body ul{ margin:.35rem 0 0 1.05rem; }

  /* Light mode fallback */
  @media (prefers-color-scheme: light){
    .teach-card{ background:#fff; border-color:#e5e7eb; }
    .badge{ border-color:#e5e7eb; color:#111; }
    .teach-actions a{ color:#111; }
  }

  /* Optional max width on very wide screens */
  @media (min-width:1080px){ .teach-wrap{ max-width:980px; } }
</style>

<div class="teach-wrap">
  <ul class="teach-list">

    <!-- CSC 362 -->
    <li class="teach-card" id="csc362">
      <div class="teach-hd">
        <h2 class="teach-title">CSC 362 — System Programming</h2>
        <span class="badge">In-person</span>
        <span class="badge">SP24 • FA24 • SP25</span>
        <span class="badge">UNCG • 2024</span>
      </div>
      <p class="teach-note">
        System-level programming with an emphasis on building efficient, secure, and robust applications. Students gain
        hands-on experience with C, processes, memory, threads, IPC, synchronization, networking basics, and virtualization—tying
        concepts to practical debugging and performance analysis.
      </p>
      <details class="teach-details">
        <summary>Topics covered</summary>
        <div class="teach-body">
          <ul>
            <li>Terminal workflow, Git, build systems</li>
            <li>C fundamentals, pointers, dynamic memory</li>
            <li>Processes, address spaces, scheduling, memory management</li>
            <li>IPC (pipes, sockets), threads & synchronization, deadlock avoidance</li>
            <li>Security themes, network fundamentals, virtualization concepts</li>
          </ul>
        </div>
      </details>
      <div class="teach-actions">
        <a href="https://amitabhadey.github.io/teaching/CSC362" target="_blank" rel="noopener">Course page →</a>
      </div>
    </li>

    <!-- CSC 330 -->
    <li class="teach-card" id="csc330">
      <div class="teach-hd">
        <h2 class="teach-title">CSC 330 — Advanced Data Structures</h2>
        <span class="badge">In-person</span>
        <span class="badge">Spring 2024</span>
        <span class="badge">UNCG • 2024</span>
      </div>
      <p class="teach-note">
        Deep dive into data structures and algorithmic analysis to develop strong problem-solving instincts. Students design,
        implement, and benchmark structures across varied workloads and constraints.
      </p>
      <details class="teach-details">
        <summary>Topics covered</summary>
        <div class="teach-body">
          <ul>
            <li>Arrays (static/dynamic), linked lists, stacks/queues</li>
            <li>Hash tables, trees (BST/AVL), heaps & priority queues</li>
            <li>Graphs (traversals, shortest paths), disjoint sets</li>
            <li>Sorting families, amortized analysis, complexity trade-offs</li>
          </ul>
        </div>
      </details>
      <div class="teach-actions">
        <a href="https://amitabhadey.github.io/teaching/CSC330" target="_blank" rel="noopener">Course page →</a>
      </div>
    </li>

    <!-- CSC 250 -->
    <li class="teach-card" id="csc250">
      <div class="teach-hd">
        <h2 class="teach-title">CSC 250 — Foundations of Computer Science I</h2>
        <span class="badge">In-person</span>
        <span class="badge">Fall 2023</span>
        <span class="badge">UNCG • 2023</span>
      </div>
      <p class="teach-note">
        Core CS ideas and mathematical maturity for downstream courses. From algorithms and complexity to automata and
        compilers, students build a rigorous mental model for computing.
      </p>
      <details class="teach-details">
        <summary>Topics covered</summary>
        <div class="teach-body">
          <ul>
            <li>Functions, recursion, algorithmic paradigms</li>
            <li>Complexity notions & counting (combinatorics)</li>
            <li>Data structures overview & invariants</li>
            <li>Compiler basics, formal languages & automata</li>
            <li>Security perspectives woven into problem-solving</li>
          </ul>
        </div>
      </details>
      <div class="teach-actions">
        <a href="https://amitabhadey.github.io/teaching/CSC250" target="_blank" rel="noopener">Course page →</a>
      </div>
    </li>

    <!-- CSC 105 -->
    <li class="teach-card" id="csc105">
      <div class="teach-hd">
        <h2 class="teach-title">CSC 105 — Data, Computing, and Quantitative Reasoning</h2>
        <span class="badge">In-person</span>
        <span class="badge">Fall 2023</span>
        <span class="badge">UNCG • 2023</span>
      </div>
      <p class="teach-note">
        Python-first introduction to data analysis with an emphasis on clear thinking and reproducibility. We practice loading,
        transforming, visualizing, and communicating insights from real-world datasets.
      </p>
      <details class="teach-details">
        <summary>Topics covered</summary>
        <div class="teach-body">
          <ul>
            <li>Python for data: <em>Pandas</em>, <em>NumPy</em>, tidy workflows</li>
            <li>Visualization: <em>Matplotlib</em>, <em>Seaborn</em>, storytelling with data</li>
            <li>Exploratory analysis, cleaning, and basic statistics</li>
            <li>Reasoning with uncertainty & quantitative communication</li>
          </ul>
        </div>
      </details>
      <div class="teach-actions">
        <a href="https://amitabhadey.github.io/teaching/CSC105" target="_blank" rel="noopener">Course page →</a>
      </div>
    </li>

  </ul>
</div>
