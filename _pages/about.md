---
permalink: /
title: " "          # was " " — make truly empty to avoid duplicate H1
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- Anchor Navigation -->
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin: 1.8rem 0;">
  <a href="#about-me" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">About</a>
  <a href="#what-i-do" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">Work</a>
  <a href="#professional-experience" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">Experience</a>
  <a href="#academic-background" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">Academic Background</a>
  <a href="#research-themes" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">Research</a>
  <a href="#publications-list" style="padding: 6px 18px; border: 1px solid #fff; border-radius: 8px; text-decoration: none; color: #fff; font-size: 0.95rem; display: inline-block; white-space: nowrap; line-height: 1;">Publications</a>
</div>


---

<h1 style="margin:0 0 .75rem 0;">👋 About Me</h1>
<span id="about-me"></span>

I am a **Senior Data Scientist** at **Optum (UnitedHealth Group)**, working at the intersection of **Large Language Models (LLMs)**, healthcare systems, and enterprise AI.  
My work focuses on transforming **general-purpose language models** into **clinically specialized systems** that operate under real-world constraints such as interpretability, regulatory safety, workflow alignment, and domain knowledge grounding.

<p style="margin-top: .75rem;">
  Occasionally, I journal and reflect on research, work, and life on <a href="https://amitabhadey.substack.com/" target="_blank" style="border-bottom:1px dotted; text-decoration:none; color:#fff;">Substack</a>. If you’re curious about the journey behind the work, you’re welcome to read along. ✦
</p>
---

## What I Do
<span id="what-i-do"></span>

### 🧠 Healthcare-Focused Language Models
I design and deploy **domain-adapted LLMs** that support:
- Automated **medical coding** and clinical documentation intelligence  
- **Long-sequence** chart and encounter reasoning  
- Improved **provider–patient communication** understanding  
- **Evaluation and safety frameworks** aligned with clinical correctness  

### ☁️ Large-Scale Training & Deployment
I build and maintain **multi-cloud ML infrastructure** across:
- **AWS SageMaker** and **Azure AI Foundry**
- Distributed GPU clusters (e.g., **NC80adis_H100_v5**)
- **Containerized CI/CD** workflows for model training and inference

This work spans large-scale data ingestion, preprocessing, fine-tuning, versioning, benchmarking, and production deployment.

---

## Professional Experience
<span id="professional-experience"></span>

I have worked across **industry**, **research**, and **academia**, building machine learning systems and guiding others in how to think and experiment in this space.

- 🎓 **Computer Science Lecturer — UNCG**
  - Taught **Systems Programming**, **Advanced Data Structures**, and **Data Science**
  - Mentored students in research thinking and applied experimentation
  - Advised students on research and academic development.

- 🧪 - **Data Scientist — DevResonance Ltd.**
  - Worked on public health and social impact analytics
  - Built end-to-end **machine learning workflows** using **Python**, **PyTorch**, **scikit-learn**
  - Developed interactive analysis dashboards with **Streamlit** and **Plotly**
  - Collaborated with global health organizations on data-driven decision systems

- 🛠️ **Data Science Intern — Redgreen Corporation**
  - Applied statistical modeling and predictive analytics to support business operations
  - Worked with feature engineering, regression pipelines, and exploratory analytics
  - Contributed to internal dashboards for business insight and product decision-making

These experiences collectively shaped how I approach problem formulation, data reasoning, model alignment with real-world constraints, and measurable impact.



---

## Academic Background
<span id="academic-background"></span>

I completed my **M.Sc. in Computer Science** at the **University of North Carolina at Greensboro (UNCG)**, where I worked as a graduate researcher in the **IFFS-ML Lab** under **Dr. Shan Suthaharan**.  
My thesis — **LDEB: Label Digitization with Emotion Binarization** — proposed a structured encoding approach for **emotion recognition in conversational dialogues**, enabling more stable learning in label-sparse environments.

Before that, I earned my **B.Sc. in Computer Science & Engineering** from **BRAC University**, where I conducted research under **Dr. Amitabha Chakrabarty**.  
My undergraduate thesis — **Fake News Pattern Recognition using Linguistic Analysis** — explored how linguistic cues can reveal author bias and deceptive intent in political social media discourse.

---

## Research Themes
<span id="research-themes"></span>

- 🏥 **Healthcare LLMs**: domain adaptation aligned with clinical language + workflows  
- 📝 **Long-Sequence Modeling**: reasoning across multi-note patient histories  
- 🔄 **Model Adaptation Pipelines**: embedding spaces, structured prompting, evaluation  
- 🎛️ **Past Work**: multimodal misinformation detection, conversational AI, cross-lingual adaptation  

---

## Publications
<span id="publications-list"></span>

<style>
.pub-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }

/* Black background + white border + white text */
.pub-card { 
  border: 1px solid #ffffff !important; 
  border-radius: 12px; 
  padding: 1rem 1.25rem; 
  background: #000 !important; 
  color: #ffffff !important; 
}

.pub-title { 
  font-weight: 600; 
  font-size: 1.05rem; 
  margin: 0 0 .25rem 0; 
  color: #ffffff !important; 
}

.pub-meta { 
  font-size: .9rem; 
  color: #e5e5e5 !important; 
  margin: 0 0 .5rem 0; 
}

.pub-actions a { 
  text-decoration: none; 
  color: #ffffff !important; 
  border-bottom: 1px dotted #ffffff; 
}

.pub-actions a:hover { 
  border-bottom: 1px solid #ffffff; 
}

.pub-details summary { 
  cursor: pointer; 
  font-weight: 600; 
  color: #ffffff !important; 
  margin-top: .5rem; 
}

.pub-details div { 
  margin-top: .4rem; 
  color: #ffffff !important; 
}

.cite { 
  font-size: .9rem; 
  color: #e5e5e5 !important; 
  margin-top: .75rem; 
}

.badge { 
  display: inline-block; 
  border: 1px solid #ffffff !important; 
  border-radius: 999px; 
  padding: 0.15rem .6rem; 
  font-size: .75rem; 
  color: #ffffff !important; 
  background: #000000 !important; 
  vertical-align: middle; 
}
</style>

<ul class="pub-list">

  <li class="pub-card">
    <p class="pub-title">LDEB — Label Digitization with Emotion Binarization and Machine Learning for Emotion Recognition in Conversational Dialogues</p>
    <p class="pub-meta"><span class="badge">2023</span> • arXiv</p>
    <p class="pub-actions">
      <a href="https://arxiv.org/abs/2306.02193" target="_blank">Paper</a>
    </p>
    <details class="pub-details">
      <summary>Abstract</summary>
      <div>
        Emotion recognition in conversations (ERC) is vital to the advancements of conversational AI and its applications. Therefore, the development of an automated ERC model using machine learning (ML) is beneficial. However, conversational dialogues present nested emotions that entangle emotional descriptors with the emotion label. LDEB resolves this through digitization and binarization, enabling more meaningful model training. We evaluate the proposed method using hierarchical RF and ANN models on the FETA-DailyDialog dataset, demonstrating promising accuracy and precision.
      </div>
    </details>
    <p class="cite"><strong>Citation:</strong> Dey, A., & Suthaharan, S. (2023). LDEB -- Label Digitization with Emotion Binarization and Machine Learning for Emotion Recognition in Conversational Dialogues. arXiv:2306.02193.</p>
  </li>

  <li class="pub-card">
    <p class="pub-title">Fake News Pattern Recognition using Linguistic Analysis</p>
    <p class="pub-meta"><span class="badge">2018</span> • ICIEV & icIVPR, Kitakyushu, Japan</p>
    <p class="pub-actions">
      <a href="https://ieeexplore.ieee.org/document/8641018" target="_blank">Paper</a>
    </p>
    <details class="pub-details">
      <summary>Abstract</summary>
      <div>
        This work presents a framework for detecting deception and bias in political social media content. Using linguistic normalization, feature extraction, pattern recognition, and k-nearest neighbor classification on tweets related to the 2016 election, the study demonstrates how automated linguistic analysis can support fake news detection and evaluation.
      </div>
    </details>
    <p class="cite"><strong>Citation:</strong> A. Dey, R. Z. Rafi, S. H. Parash, S. K. Arko and A. Chakrabarty (2018). Fake News Pattern Recognition using Linguistic Analysis. ICIEV & icIVPR.</p>
  </li>

</ul>
