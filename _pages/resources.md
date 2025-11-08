---
permalink: /resources/
title: " "
---

<h1 style="margin:0 0 .75rem 0;">📣 Resources</h1>
<p style="margin:0 0 1rem 0;opacity:.9">Curated links I reference often—courses, papers, guides, and utilities.</p>

<!-- Top nav pills -->
<nav style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 1rem 0;">
  <a href="#bookmarks"            style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">📌 Bookmarks</a>
  <a href="#dsa"                  style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🧩 DSA</a>
  <a href="#ml"                   style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🤖 ML</a>
  <a href="#datasci"              style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">📊 Data Science</a>
  <a href="#math"                 style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">∑ Math</a>
  <a href="#harvard"              style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🎓 Harvard</a>
  <a href="#jobs"                 style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">💼 Jobs</a>
  <a href="#writing"              style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">✍️ Writing</a>
  <a href="#tools"                style="padding:.35rem .7rem;border:1px solid currentColor;border-radius:999px;text-decoration:none;">🛠️ Tools</a>
</nav>

<!-- Quick search -->
<div style="margin:.5rem 0 1.25rem 0;display:flex;gap:.6rem;align-items:center;">
  <input id="link-search" type="search" placeholder="Search resources…" 
         style="flex:1;max-width:520px;padding:.55rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:10px;background:transparent;color:inherit;">
  <small style="opacity:.7;">Press <kbd style="border:1px solid currentColor;border-radius:4px;padding:0 .25rem;opacity:.7;">/</kbd> to focus</small>
</div>

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
.actions a, .actions button{
  font-size:.82rem; text-decoration:none; padding:.25rem .55rem; border-radius:8px;
  border:1px dashed rgba(255,255,255,.35); background:transparent; color:inherit; cursor:pointer;
}
.actions a:hover, .actions button:hover{ border-style:solid; }
/* Light mode */
@media (prefers-color-scheme: light){
  .card{ background:#fff;border-color:#e5e7eb; }
  #link-search{ border-color:#e5e7eb; }
}
/* Table */
.table-wrap{ overflow:auto; border-radius:12px; border:1px solid rgba(255,255,255,.25); }
table.minimal{ width:100%; border-collapse:separate; border-spacing:0; }
table.minimal th, table.minimal td{ padding:.6rem .75rem; border-bottom:1px solid rgba(255,255,255,.15); vertical-align:top; }
table.minimal th{ text-align:left; font-weight:700; position:sticky; top:0; backdrop-filter:saturate(120%); }
table.minimal tr:last-child td{ border-bottom:none; }
@media (prefers-color-scheme: light){
  .table-wrap{ border-color:#e5e7eb; }
  table.minimal th, table.minimal td{ border-bottom:1px solid #ececec; }
}
kbd{ font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; font-size:.75em; }
</style>

<!-- ========= BOOKMARKS ========= -->
<section id="bookmarks" class="res-sec">
  <h3>📌 Bookmarks</h3>
  <ul class="links">
    <li class="card" data-tags="healthcare course mit data">
      <h4><a href="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+HST.953x+3T2020/course/" target="_blank" rel="noopener">Collaborative Data Science for Healthcare — MIT</a></h4>
      <div class="meta">Course • Healthcare • MITx</div>
      <p>Team-based analytics and decision-making in clinical settings.</p>
      <div class="actions">
        <a href="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+HST.953x+3T2020/course/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://openlearninglibrary.mit.edu/courses/course-v1:MITx+HST.953x+3T2020/course/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="visualization stanford graphics">
      <h4><a href="https://web.stanford.edu/class/archive/cs/cs448b/cs448b.1166/cgi-bin/wiki/index.php?title=Main_Page" target="_blank" rel="noopener">CS448B: Visualization — Stanford</a></h4>
      <div class="meta">Course • Visualization • Stanford</div>
      <p>Foundations of interactive visualization and systems design.</p>
      <div class="actions">
        <a href="https://web.stanford.edu/class/archive/cs/cs448b/cs448b.1166/cgi-bin/wiki/index.php?title=Main_Page" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://web.stanford.edu/class/archive/cs/cs448b/cs448b.1166/cgi-bin/wiki/index.php?title=Main_Page">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="quantitative reasoning math pedagogy">
      <h4><a href="http://www.uwyo.edu/wisdome/_files/documents/QRinContext_MayesPeterson.pdf" target="_blank" rel="noopener">Quantitative Reasoning in Context</a></h4>
      <div class="meta">PDF • QR • Pedagogy</div>
      <p>Applied quantitative reasoning examples and instructional framing.</p>
      <div class="actions">
        <a href="http://www.uwyo.edu/wisdome/_files/documents/QRinContext_MayesPeterson.pdf" target="_blank" rel="noopener">Open</a>
        <button data-copy="http://www.uwyo.edu/wisdome/_files/documents/QRinContext_MayesPeterson.pdf">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="quantitative reasoning mit practice">
      <h4><a href="https://web.mit.edu/eglenn/www/QR/QR_Review_Web/Review_Handout_Web.html" target="_blank" rel="noopener">Quantitative Reasoning Test-Out — MIT</a></h4>
      <div class="meta">Practice • MIT • QR</div>
      <p>Concise QR drills for numeracy calibration.</p>
      <div class="actions">
        <a href="https://web.mit.edu/eglenn/www/QR/QR_Review_Web/Review_Handout_Web.html" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://web.mit.edu/eglenn/www/QR/QR_Review_Web/Review_Handout_Web.html">Copy link</button>
      </div>
    </li>

    <!-- Keep adding <li class="card"> blocks here; they’ll auto-style and be searchable -->
  </ul>
</section>

<!-- ========= DSA ========= -->
<section id="dsa" class="res-sec">
  <h3>🧩 Data Structures & Algorithms</h3>
  <ul class="links">
    <li class="card" data-tags="awesome list algorithms">
      <h4><a href="https://github.com/gaerae/awesome-algorithms-education" target="_blank" rel="noopener">Awesome Algorithms Education</a></h4>
      <div class="meta">GitHub • Curated</div>
      <p>Hand-picked algorithm learning resources across formats.</p>
      <div class="actions">
        <a href="https://github.com/gaerae/awesome-algorithms-education" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/gaerae/awesome-algorithms-education">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="algorithms repository">
      <h4><a href="https://github.com/tayllan/awesome-algorithms" target="_blank" rel="noopener">Awesome Algorithms</a></h4>
      <div class="meta">GitHub • Curated</div>
      <p>Broad algorithm references and implementations.</p>
      <div class="actions">
        <a href="https://github.com/tayllan/awesome-algorithms" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/tayllan/awesome-algorithms">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="python algorithms">
      <h4><a href="https://github.com/TheAlgorithms/Python" target="_blank" rel="noopener">TheAlgorithms/Python</a></h4>
      <div class="meta">GitHub • Implementations</div>
      <p>Canonical Python implementations for hundreds of algorithms.</p>
      <div class="actions">
        <a href="https://github.com/TheAlgorithms/Python" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/TheAlgorithms/Python">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="book interactive dsa">
      <h4><a href="https://runestone.academy/ns/books/published/pythonds/index.html" target="_blank" rel="noopener">Problem Solving with Algorithms & Data Structures (Python)</a></h4>
      <div class="meta">Interactive • Textbook</div>
      <p>Runestone’s interactive textbook for DSA in Python.</p>
      <div class="actions">
        <a href="https://runestone.academy/ns/books/published/pythonds/index.html" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://runestone.academy/ns/books/published/pythonds/index.html">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="practice roadmap">
      <h4><a href="https://github.com/bakhodir10/AlgoCS" target="_blank" rel="noopener">AlgoCS</a></h4>
      <div class="meta">GitHub • Roadmap</div>
      <p>Study roadmap and practice sets for CS interviews.</p>
      <div class="actions">
        <a href="https://github.com/bakhodir10/AlgoCS" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/bakhodir10/AlgoCS">Copy link</button>
      </div>
    </li>
  </ul>
</section>

<!-- ========= MACHINE LEARNING ========= -->
<section id="ml" class="res-sec">
  <h3>🤖 Machine Learning</h3>
  <ul class="links">
    <li class="card" data-tags="book code">
      <h4><a href="https://github.com/iamtrask/Grokking-Deep-Learning" target="_blank" rel="noopener">Grokking Deep Learning</a></h4>
      <div class="meta">Code • Concepts</div>
      <p>From first principles to working neural nets—hands-on.</p>
      <div class="actions">
        <a href="https://github.com/iamtrask/Grokking-Deep-Learning" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/iamtrask/Grokking-Deep-Learning">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="lectures deep learning goodfellow">
      <h4><a href="https://www.deeplearningbook.org/lecture_slides.html" target="_blank" rel="noopener">Deep Learning Lectures</a></h4>
      <div class="meta">Slides • Goodfellow–Bengio–Courville</div>
      <p>Authoritative lecture deck companion to the DL Book.</p>
      <div class="actions">
        <a href="https://www.deeplearningbook.org/lecture_slides.html" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://www.deeplearningbook.org/lecture_slides.html">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="ideas projects beginners">
      <h4><a href="https://github.com/NirantK/awesome-project-ideas" target="_blank" rel="noopener">Awesome DL Project Ideas</a></h4>
      <div class="meta">GitHub • Ideas</div>
      <p>Project prompts to sharpen practical ML skills.</p>
      <div class="actions">
        <a href="https://github.com/NirantK/awesome-project-ideas" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/NirantK/awesome-project-ideas">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="tutorial beginner">
      <h4><a href="https://iamtrask.github.io/2015/07/12/basic-python-network/" target="_blank" rel="noopener">A Neural Network in 11 Lines of Python</a></h4>
      <div class="meta">Tutorial • Hands-on</div>
      <p>Tiny, readable implementation to demystify backprop.</p>
      <div class="actions">
        <a href="https://iamtrask.github.io/2015/07/12/basic-python-network/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://iamtrask.github.io/2015/07/12/basic-python-network/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="course fastai">
      <h4><a href="https://course.fast.ai/" target="_blank" rel="noopener">Practical Deep Learning for Coders</a></h4>
      <div class="meta">Course • fast.ai</div>
      <p>Top-down DL course with strong production focus.</p>
      <div class="actions">
        <a href="https://course.fast.ai/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://course.fast.ai/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="course berkeley rl">
      <h4><a href="http://rail.eecs.berkeley.edu/deeprlcourse/" target="_blank" rel="noopener">Deep Reinforcement Learning — Berkeley</a></h4>
      <div class="meta">Course • RL</div>
      <p>Foundational and modern RL techniques with labs.</p>
      <div class="actions">
        <a href="http://rail.eecs.berkeley.edu/deeprlcourse/" target="_blank" rel="noopener">Open</a>
        <button data-copy="http://rail.eecs.berkeley.edu/deeprlcourse/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="projects python learning-by-building">
      <h4><a href="https://github.com/practical-tutorials/project-based-learning#python" target="_blank" rel="noopener">Project-Based Learning (Python)</a></h4>
      <div class="meta">GitHub • Projects</div>
      <p>Build real projects across domains to cement concepts.</p>
      <div class="actions">
        <a href="https://github.com/practical-tutorials/project-based-learning#python" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/practical-tutorials/project-based-learning#python">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="paper feed arxiv">
      <h4><a href="https://arxiv-sanity-lite.com/" target="_blank" rel="noopener">arXiv Sanity Lite</a></h4>
      <div class="meta">Papers • Feed</div>
      <p>Lightweight viewer for staying current with arXiv.</p>
      <div class="actions">
        <a href="https://arxiv-sanity-lite.com/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://arxiv-sanity-lite.com/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="course google tf">
      <h4><a href="https://developers.google.com/machine-learning/crash-course/" target="_blank" rel="noopener">ML Crash Course (Google)</a></h4>
      <div class="meta">Course • TensorFlow</div>
      <p>Short, structured ML intro with exercises.</p>
      <div class="actions">
        <a href="https://developers.google.com/machine-learning/crash-course/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://developers.google.com/machine-learning/crash-course/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="curation resources">
      <h4><a href="https://sgfin.github.io/learning-resources/" target="_blank" rel="noopener">ML Resources — Sam Finlayson</a></h4>
      <div class="meta">Curation</div>
      <p>Compact, practical resource list for ML learners.</p>
      <div class="actions">
        <a href="https://sgfin.github.io/learning-resources/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://sgfin.github.io/learning-resources/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="overview beginner">
      <h4><a href="https://towardsdatascience.com/the-7-steps-of-machine-learning-2877d7e5548e" target="_blank" rel="noopener">The 7 Steps of ML</a></h4>
      <div class="meta">Article • Overview</div>
      <p>Approachable pipeline framing for newcomers.</p>
      <div class="actions">
        <a href="https://towardsdatascience.com/the-7-steps-of-machine-learning-2877d7e5548e" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://towardsdatascience.com/the-7-steps-of-machine-learning-2877d7e5548e">Copy link</button>
      </div>
    </li>
  </ul>
</section>

<!-- ========= DATA SCIENCE ========= -->
<section id="datasci" class="res-sec">
  <h3>📊 Data Science</h3>
  <ul class="links">
    <li class="card" data-tags="python book">
      <h4><a href="https://github.com/StephenElston/ExploringDataWithPython" target="_blank" rel="noopener">Exploring Data with Python</a></h4>
      <div class="meta">GitHub • Book</div>
      <p>Exploratory analysis patterns and recipes in Python.</p>
      <div class="actions">
        <a href="https://github.com/StephenElston/ExploringDataWithPython" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/StephenElston/ExploringDataWithPython">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="blogs companies">
      <h4><a href="https://github.com/caitlinhudon/company_data_science_blogs" target="_blank" rel="noopener">Company Data Science Blogs</a></h4>
      <div class="meta">GitHub • Curation</div>
      <p>Engineering & analytics blogs from leading teams.</p>
      <div class="actions">
        <a href="https://github.com/caitlinhudon/company_data_science_blogs" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/caitlinhudon/company_data_science_blogs">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="sql intro">
      <h4><a href="https://www.khanacademy.org/computing/computer-programming/sql" target="_blank" rel="noopener">Intro to SQL — Khan Academy</a></h4>
      <div class="meta">Course • SQL</div>
      <p>Fast, interactive primer on SQL fundamentals.</p>
      <div class="actions">
        <a href="https://www.khanacademy.org/computing/computer-programming/sql" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://www.khanacademy.org/computing/computer-programming/sql">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="python cs text">
      <h4><a href="http://www.openbookproject.net/thinkcs/python/english3e/" target="_blank" rel="noopener">How to Think Like a Computer Scientist</a></h4>
      <div class="meta">Textbook • Python</div>
      <p>Gentle introduction to CS with Python examples.</p>
      <div class="actions">
        <a href="http://www.openbookproject.net/thinkcs/python/english3e/" target="_blank" rel="noopener">Open</a>
        <button data-copy="http://www.openbookproject.net/thinkcs/python/english3e/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="caltech course">
      <h4><a href="https://work.caltech.edu/lectures.html#lectures" target="_blank" rel="noopener">Learning from Data — Caltech</a></h4>
      <div class="meta">Course • ML theory</div>
      <p>Classic ML theory course with lectures and notes.</p>
      <div class="actions">
        <a href="https://work.caltech.edu/lectures.html#lectures" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://work.caltech.edu/lectures.html#lectures">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="automation python">
      <h4><a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener">Automate the Boring Stuff with Python</a></h4>
      <div class="meta">Book • Practical</div>
      <p>Automations for daily tasks—files, web, spreadsheets, and more.</p>
      <div class="actions">
        <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://automatetheboringstuff.com/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="ml resources raschka">
      <h4><a href="https://pages.stat.wisc.edu/~sraschka/teaching/stat479-fs2018/#resources" target="_blank" rel="noopener">ML Resources — Sebastian Raschka</a></h4>
      <div class="meta">Curated • ML</div>
      <p>Links and references from Raschka’s courses.</p>
      <div class="actions">
        <a href="https://pages.stat.wisc.edu/~sraschka/teaching/stat479-fs2018/#resources" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://pages.stat.wisc.edu/~sraschka/teaching/stat479-fs2018/#resources">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="projects kaggle cleaning">
      <h4><a href="https://www.kaggle.com/learn/data-cleaning" target="_blank" rel="noopener">Data Cleaning — Kaggle</a></h4>
      <div class="meta">Course • Kaggle</div>
      <p>Realistic exercises on messy data handling.</p>
      <div class="actions">
        <a href="https://www.kaggle.com/learn/data-cleaning" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://www.kaggle.com/learn/data-cleaning">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="dssg guide">
      <h4><a href="https://github.com/dssg/hitchhikers-guide" target="_blank" rel="noopener">The Hitchhiker’s Guide to Data Science</a></h4>
      <div class="meta">Guide • DSSG</div>
      <p>Playbooks for DS projects from scoping to delivery.</p>
      <div class="actions">
        <a href="https://github.com/dssg/hitchhikers-guide" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://github.com/dssg/hitchhikers-guide">Copy link</button>
      </div>
    </li>
  </ul>
</section>

<!-- ========= MATHEMATICS ========= -->
<section id="math" class="res-sec">
  <h3>∑ Mathematics</h3>
  <ul class="links">
    <li class="card" data-tags="stats text stanford">
      <h4><a href="https://www.statlearning.com/" target="_blank" rel="noopener">An Introduction to Statistical Learning</a></h4>
      <div class="meta">Textbook • Stanford</div>
      <p>The classic applied statistics + ML text (with labs).</p>
      <div class="actions">
        <a href="https://www.statlearning.com/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://www.statlearning.com/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="calculus notes">
      <h4><a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" target="_blank" rel="noopener">Calculus I — Paul’s Online Notes</a></h4>
      <div class="meta">Reference • Calculus</div>
      <p>Concise, reliable notes & exercises.</p>
      <div class="actions">
        <a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="probability cheatsheet">
      <h4><a href="https://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf" target="_blank" rel="noopener">Probability Cheatsheet</a></h4>
      <div class="meta">PDF • Reference</div>
      <p>Quick reference for distributions and identities.</p>
      <div class="actions">
        <a href="https://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf">Copy link</button>
      </div>
    </li>

    <!-- Add remaining math links in same pattern… -->
  </ul>
</section>

<!-- ========= HARVARD COURSES ========= -->
<section id="harvard" class="res-sec">
  <h3>🎓 Harvard Courses</h3>
  <ul class="links">
    <li class="card" data-tags="cs50 intro">
      <h4><a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noopener">CS50: Introduction to Computer Science</a></h4>
      <div class="meta">Course • Harvard</div>
      <p>Legendary CS intro—problem sets, lectures, and labs.</p>
      <div class="actions">
        <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://pll.harvard.edu/course/cs50-introduction-computer-science">Copy link</button>
      </div>
    </li>
    <!-- Add the rest of your Harvard list the same way… -->
  </ul>
</section>

<!-- ========= JOBS ========= -->
<section id="jobs" class="res-sec">
  <h3>💼 Jobs & Interviews</h3>
  <ul class="links">
    <li class="card" data-tags="interview prep talk">
      <h4><a href="https://www.youtube.com/live/ii9NLvcAfpE?feature=share" target="_blank" rel="noopener">How to Prepare for Technical Interviews</a></h4>
      <div class="meta">Talk • YouTube</div>
      <p>Concrete strategies and timelines for interview prep.</p>
      <div class="actions">
        <a href="https://www.youtube.com/live/ii9NLvcAfpE?feature=share" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://www.youtube.com/live/ii9NLvcAfpE?feature=share">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="resume cover letter">
      <h4><a href="https://drive.google.com/file/d/1VZTaSr87VBqp8COtuGOW1PH7tuyp8mnS/view?usp=sharing" target="_blank" rel="noopener">Harvard Resume & Cover Letter Guides</a></h4>
      <div class="meta">Guides • PDF</div>
      <p>Current templates and strong examples from OCS.</p>
      <div class="actions">
        <a href="https://drive.google.com/file/d/1VZTaSr87VBqp8COtuGOW1PH7tuyp8mnS/view?usp=sharing" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://drive.google.com/file/d/1VZTaSr87VBqp8COtuGOW1PH7tuyp8mnS/view?usp=sharing">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="job board newsletter">
      <h4><a href="https://jobs.dataelixir.com/jobs" target="_blank" rel="noopener">Jobs for Data Lovers — Data Elixir</a></h4>
      <div class="meta">Board • Data</div>
      <p>Frequent DS/ML openings curated by Data Elixir.</p>
      <div class="actions">
        <a href="https://jobs.dataelixir.com/jobs" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://jobs.dataelixir.com/jobs">Copy link</button>
      </div>
    </li>
  </ul>
</section>

<!-- ========= WRITING ========= -->
<section id="writing" class="res-sec">
  <h3>✍️ Writing</h3>
  <ul class="links">
    <li class="card" data-tags="workflow practice">
      <h4><a href="https://nesslabs.com/writing-thinking-tool" target="_blank" rel="noopener">Writing as a Thinking Tool</a></h4>
      <div class="meta">Essay • Metacognition</div>
      <p>Use writing to clarify models and decisions.</p>
      <div class="actions">
        <a href="https://nesslabs.com/writing-thinking-tool" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://nesslabs.com/writing-thinking-tool">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="classic guide online">
      <h4><a href="https://perell.com/essay/the-ultimate-guide-to-writing-online/" target="_blank" rel="noopener">The Ultimate Guide to Writing Online</a></h4>
      <div class="meta">Guide • Publishing</div>
      <p>Distribution, cadence, and systems for consistent output.</p>
      <div class="actions">
        <a href="https://perell.com/essay/the-ultimate-guide-to-writing-online/" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://perell.com/essay/the-ultimate-guide-to-writing-online/">Copy link</button>
      </div>
    </li>

    <li class="card" data-tags="notes illustrated">
      <h4><a href="https://maggieappleton.com/basb" target="_blank" rel="noopener">Building a Second Brain — Illustrated</a></h4>
      <div class="meta">Notes • PKM</div>
      <p>A visual summary of PARA, capture, and retrieval.</p>
      <div class="actions">
        <a href="https://maggieappleton.com/basb" target="_blank" rel="noopener">Open</a>
        <button data-copy="https://maggieappleton.com/basb">Copy link</button>
      </div>
    </li>

    <!-- Add remaining writing links similarly… -->
  </ul>
</section>

<!-- ========= TOOLS (LIST-CARDS) ========= -->
<section id="tools" class="res-sec">
  <h3>🛠️ Tools</h3>

  <!-- Scoped styles to this section only -->
  <style>
    #tools .res-list{list-style:none;margin:.5rem 0 0;padding:0;display:grid;gap:.6rem}
    /* Two-up / three-up responsive grid */
    @media(min-width:720px){#tools .res-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(min-width:1160px){#tools .res-list{grid-template-columns:repeat(3,minmax(0,1fr))}}

    #tools .res-item{
      border:1px solid rgba(255,255,255,.25);
      border-radius:12px;
      background:rgba(255,255,255,.03);
      padding:.8rem .9rem;
      display:grid;
      grid-template-rows:auto auto 1fr;
      gap:.35rem
    }
    #tools .res-title{margin:0;font-weight:700;letter-spacing:.01em}
    #tools .res-desc{margin:0;opacity:.9;font-size:.92rem;line-height:1.45}
    #tools .res-link a{
      display:inline-block;margin-top:.15rem;
      text-decoration:none;border:1px dashed rgba(255,255,255,.35);
      padding:.25rem .55rem;border-radius:8px;font-size:.85rem;color:inherit
    }
    #tools .res-link a:hover{border-style:solid}

    /* Light mode fallback */
    @media (prefers-color-scheme: light){
      #tools .res-item{background:#fff;border-color:#e5e7eb}
      #tools .res-link a{border-color:#e5e7eb;color:#111}
      #tools .res-title,#tools .res-desc{color:#111}
    }
  </style>

  <ul class="res-list">
    <li class="res-item">
      <p class="res-title">Typings</p>
      <p class="res-desc">A sleek and modern typing test website.</p>
      <p class="res-link"><a href="https://typings.gg/" target="_blank" rel="noopener">typings.gg</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Ghostwriter</p>
      <p class="res-desc">Free, open-source, distraction-free Markdown editor.</p>
      <p class="res-link"><a href="https://ghostwriter.kde.org/" target="_blank" rel="noopener">ghostwriter.kde.org</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Letter Count</p>
      <p class="res-desc">Counts characters—perfect for tweets and length limits.</p>
      <p class="res-link"><a href="https://www.lettercount.com/" target="_blank" rel="noopener">lettercount.com</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Zeoob</p>
      <p class="res-desc">Fake post &amp; chat generators for social media mockups.</p>
      <p class="res-link"><a href="https://zeoob.com/" target="_blank" rel="noopener">zeoob.com</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Word Hippo</p>
      <p class="res-desc">Thesaurus and word-choice tools for better phrasing.</p>
      <p class="res-link"><a href="https://www.wordhippo.com/" target="_blank" rel="noopener">wordhippo.com</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Hemingway Editor</p>
      <p class="res-desc">Readability highlights to simplify and tighten prose.</p>
      <p class="res-link"><a href="https://hemingwayapp.com/" target="_blank" rel="noopener">hemingwayapp.com</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">Ludwig</p>
      <p class="res-desc">Sentence search with high-quality, contextual examples.</p>
      <p class="res-link"><a href="https://ludwig.guru/" target="_blank" rel="noopener">ludwig.guru</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">YourDictionary</p>
      <p class="res-desc">Find sentence examples and usage patterns fast.</p>
      <p class="res-link"><a href="https://sentence.yourdictionary.com/" target="_blank" rel="noopener">sentence.yourdictionary.com</a></p>
    </li>

    <li class="res-item">
      <p class="res-title">A-Z Alternative Words</p>
      <p class="res-desc">Plain-English alternatives to complex or pompous terms.</p>
      <p class="res-link"><a href="https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html" target="_blank" rel="noopener">plainenglish.co.uk</a></p>
    </li>
  </ul>
</section>


<!-- ========= SEARCH & COPY (tiny JS) ========= -->
<script>
(function(){
  const q = document.getElementById('link-search');
  const cards = Array.from(document.querySelectorAll('.card'));
  function filter(){
    const v = (q.value || '').toLowerCase().trim();
    cards.forEach(c=>{
      const t = c.innerText.toLowerCase();
      c.style.display = v && !t.includes(v) ? 'none' : '';
    });
  }
  if(q){
    q.addEventListener('input', filter);
    document.addEventListener('keydown', e=>{
      if(e.key === '/' && document.activeElement !== q){ e.preventDefault(); q.focus(); }
    });
  }
  document.addEventListener('click',e=>{
    const btn = e.target.closest('button[data-copy]');
    if(!btn) return;
    const url = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(url).then(()=>{
      const old = btn.textContent; btn.textContent = 'Copied! ✓';
      setTimeout(()=>btn.textContent = old, 900);
    });
  });
})();
</script>

<!--
HOW TO ADD NEW LINKS QUICKLY:
Copy a block:

<li class="card" data-tags="tag1 tag2">
  <h4><a href="https://example.com" target="_blank" rel="noopener">Title Here</a></h4>
  <div class="meta">Type • Topic</div>
  <p>One-line description.</p>
  <div class="actions">
    <a href="https://example.com" target="_blank" rel="noopener">Open</a>
    <button data-copy="https://example.com">Copy link</button>
  </div>
</li>

Paste under the right <ul class="links">. It will auto-style and be searchable.
-->
