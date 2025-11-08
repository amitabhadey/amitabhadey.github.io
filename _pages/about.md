---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I am a Senior Data Scientist at <a href="https://www.optum.com/en/">Optum</a> (part of <a href="https://www.unitedhealthgroup.com/">UnitedHealth Group</a>), specializing in Large Language Models (LLMs) and their applications in healthcare and enterprise AI. My background is in Natural Language Processing (NLP), where I have over ten years of experience working with text analysis, machine learning, and more recently, large-scale language model development.

Previously, I was a Lecturer in Computer Science at the <a href="https://compsci.uncg.edu/">University of North Carolina at Greensboro (UNCG)</a>, where I taught courses in systems programming, advanced data structures, and data science, and advised students on academic and research projects.

I completed my M.Sc. in Computer Science with a concentration in Big Data and Data Science at UNCG, working as a graduate research student in the IFFS-ML Lab under the supervision of <a href="https://sites.google.com/uncg.edu/shan-suthaharan/home">Dr. Shan Suthaharan</a>. My dissertation was titled <em>LDEB: Label Digitization with Emotion Binarization and Machine Learning for Emotion Recognition in Conversational Dialogues</em>.

I earned my B.Sc. in Computer Science from BRAC University, where I worked under the supervision of <a href="https://cse.sds.bracu.ac.bd/faculty_profile/69/dr_amitabha_chakrabarty">Dr. Amitabha Chakrabarty</a>. My undergraduate thesis was titled <em>Fake News Pattern Recognition using Linguistic Analysis</em>.

## My work and research

I specialize in large-scale language modeling for healthcare, with a focus on building, fine-tuning, and deploying domain-adapted Large Language Models (LLMs) under clinical, enterprise, and regulatory constraints.

I study approaches to advance healthcare-focused Large Language Models (LLMs), with particular emphasis on long-sequence processing and domain-specific adaptation for tasks such as medical coding and bridging communication between patients and healthcare providers. A core part of my work involves building domain adaptation pipelines that transform general-purpose LLMs into clinically specialized models.

In the past, my work focused on developing computational models that can understand and generate human language with high precision. My research also previously explored multimodal analysis, misinformation prevention, conversational AI, and cross-cultural linguistic adaptation.

---

## Publications

<style>
.pub-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
.pub-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem 1.25rem; background: #fff; }
.pub-title { font-weight: 600; font-size: 1.05rem; margin: 0 0 .25rem 0; color: #000 !important; }
.pub-meta { font-size: .9rem; color: #444 !important; margin: 0 0 .5rem 0; }
.pub-actions a { text-decoration: none; color: #000 !important; border-bottom: 1px dotted #aaa; }
.pub-actions a:hover { border-bottom: 1px solid #000; }
.pub-details summary { cursor: pointer; font-weight: 600; color: #000 !important; margin-top: .5rem; }
.pub-details div { margin-top: .4rem; color: #000 !important; }
.cite { font-size: .9rem; color: #333 !important; margin-top: .75rem; }
.badge { display: inline-block; border: 1px solid #d1d5db; border-radius: 999px; padding: 0.15rem .6rem; font-size: .75rem; color: #333 !important; background: #f9fafb; vertical-align: middle; }
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
        Emotion recognition in conversations (ERC) is vital to the advancements of conversational AI and its applications. Therefore, the development of an automated ERC model using the concepts of machine learning (ML) would be beneficial. However, the conversational dialogues present a unique problem where each dialogue depicts nested emotions that entangle the association between the emotional feature descriptors and emotion type (or label). This entanglement that can be multiplied with the presence of data paucity is an obstacle for a ML model. To overcome this problem, we proposed a novel approach called Label Digitization with Emotion Binarization (LDEB) that disentangles the twists by utilizing the text normalization and 7-bit digital encoding techniques and constructs a meaningful feature space for a ML model to be trained. We also utilized the publicly available dataset called the FETA-DailyDialog dataset for feature learning and developed a hierarchical ERC model using random forest (RF) and artificial neural network (ANN) classifiers. Simulations showed that the ANN-based ERC model was able to predict emotion with the best accuracy and precision scores of about 74% and 76%, respectively. Simulations also showed that the ANN-model could reach a training accuracy score of about 98% with 60 epochs. On the other hand, the RF-based ERC model was able to predict emotions with the best accuracy and precision scores of about 78% and 75%, respectively.
      </div>
    </details>
    <p class="cite"><strong>Citation:</strong>Dey, A., & Suthaharan, S. (2023). LDEB--Label Digitization with Emotion Binarization and Machine Learning for Emotion Recognition in Conversational Dialogues. arXiv preprint arXiv:2306.02193. https://arxiv.org/abs/2306.02193</p>
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
        In the wake of the 2016 US Presidential Election, the upsurge of fake news has been a subject of increased discussion and debate. In this paper, we propose a general framework that can been adopted in future elections worldwide to augment humans in making better decisions when it comes to recognizing news deception and identifying hidden bias of the author. For our study, we constructed a dataset comprising 200 tweets on “Hilary Clinton”, while performing veracity assessment. We initially perform “text normalization” on tweets, explore techniques for feature extraction to classify news into categories, perform a comprehensive linguistic analysis on tweets, extract bag-of-words to find noticeable pattern, and finally apply k-nearest neighbor algorithm for classifying polarized news from credible. We later turn to some popular evaluation metrics to quantify the success rate of our framework, discuss the results of implementing knn algorithm and discuss interconnected research domains and future research directions for constructing an ideal model for fake news detection system around social media.
      </div>
    </details>
    <p class="cite"><strong>Citation:</strong> A. Dey, R. Z. Rafi, S. Hasan Parash, S. K. Arko and A. Chakrabarty, "Fake News Pattern Recognition using Linguistic Analysis," 2018 Joint 7th International Conference on Informatics, Electronics & Vision (ICIEV) and 2018 2nd International Conference on Imaging, Vision & Pattern Recognition (icIVPR), Kitakyushu, Japan, 2018, pp. 305-309, https://ieeexplore.ieee.org/document/8641018</p>
  </li>

</ul>
