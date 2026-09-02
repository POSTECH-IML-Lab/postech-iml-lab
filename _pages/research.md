---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 3
---

<style>
  .iml-research-topic {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(127, 127, 127, 0.2);
  }
  .iml-research-topic:first-of-type {
    padding-top: 0;
  }
  .iml-research-topic:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  .iml-research-icon {
    flex: 0 0 auto;
    width: 88px;
    height: 88px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(127, 127, 127, 0.1);
    border: 1px solid rgba(127, 127, 127, 0.2);
    font-size: 2rem;
  }
  .iml-research-body {
    flex: 1;
    min-width: 0;
  }
  .iml-research-body h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .iml-research-subtopics {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
  }
  .iml-research-subtopics li {
    position: relative;
    padding-left: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .iml-research-subtopics li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.5;
  }
  .iml-venue {
    opacity: 0.6;
    font-size: 0.88em;
    white-space: nowrap;
  }
  @media (max-width: 600px) {
    .iml-research-topic,
    .iml-research-topic:nth-of-type(even) {
      flex-direction: column;
    }
  }
</style>


<div class="iml-research-topic">
<div class="iml-research-icon"><i class="fa-solid fa-comments"></i></div>
<div class="iml-research-body">
  <h2>Interactive ML for large language models</h2>
  <p>
    Our recent research focus is to study IML problems that arise from large language models, including alignment, post-training, reasoning, and test-time scaling — viewing a model's generated outputs as <em>actions</em> and bringing IML tools to bear on them. 
    We are currently developing efficient algorithms inspired by learning theory and evaluating them on real-world tasks.
    Some of these efforts are in collaboration with <a href="https://www.krafton.ai/en/">Krafton AI</a>.
    <ul class="iml-research-subtopics">
      <li>A unified theoretical framework for LLM Alignment <span class="iml-venue">(arXiv'25)</span></li>
      <li>Theoretical guarantees of the popular heuristic called 'online DPO' and its generalization <span class="iml-venue">(ICML'26)</span></li>
    </ul>
  </p>
</div>
</div>

<!--
We study bandit algorithms and other online decision-making problems, where an agent's decisions are
actions that shape which data or feedback it receives next — balancing exploration of uncertain options
against exploiting what already works well.
-->

<div class="iml-research-topic">
<div class="iml-research-icon"><i class="fa-solid fa-shuffle"></i></div>
<div class="iml-research-body">
<h2>Reinforcement learning and bandits</h2>
<p>
  We develop efficient algorithms for reinforcement learning and bandit problems, with an emphasis on rigorous theoretical guarantees.
  The multi-armed/contextual bandit problem can be viewed as a special case of reinforcement learning with no states.
  No, this does not mean existing RL algorithms are efficient in the bandit setting -- algorithms designed for bandits typically work much better.
  Bandit algorithms have been deployed in real-world systems, including online news recommendation at Microsoft (<a href="https://arxiv.org/abs/1606.03966">paper link</a>) and large-scale experimentation and A/B testing at Meta Platforms.
  Our research on bandits is funded in part by Meta Platforms, with whom we maintain an ongoing research collaboration.
</p>
<ul class="iml-research-subtopics">
  <li>Minimum empirical divergence-style algorithms 
    <span class="iml-venue">(AISTATS'22, NeurIPS'23, AISTATS'25, TMLR'26)</span>
  </li>
  <li>Accelerated rates when there are many good arms
    <span class="iml-venue">(ICML'23, AISTATS'25)</span>
  </li>
  <li>Towards parameter-free algorithms, i.e., perform as well as knowing the unknown such as noise level, norm of the parameter to be learned, etc.
    <span class="iml-venue">(NeurIPS'22, ICML'23, ICML'24, AISTATS'25)</span>
  </li>
  <li>Fixed budget algorithms and their guarantees (as opposed to fixed confidence guarantees)
    <span class="iml-venue">(ICLR'26, ICML'26)</span>
  </li>
  <li>Logistic/generalized linear/sparse/low-rank models with sample/computational efficiency
    <span class="iml-venue">(NeurIPS'17, NeurIPS'20, ICML'21a, ICML'21b, AAAI'22, AISTATS'22, NeurIPS'22, AISTATS'24, ICML'24, NeurIPS'24, AISTATS'26)</span>
  </li>
</ul>
</div>
</div>

<div class="iml-research-topic">
  <div class="iml-research-icon"><i class="fa-solid fa-shield-halved"></i></div>
  <div class="iml-research-body">

<h2>Learning theory</h2>
<p>
  We develop learning-theoretic tools for designing statistically efficient machine learning algorithms. 
  Our work spans both general learning theory, including methods that adapt to favorable properties of the data such as low noise, and practical confidence bounds for quantifying statistical uncertainty. 
  These ideas often serve as key building blocks for efficient algorithms in bandits, reinforcement learning, and other interactive learning problems.
  Some examples:
</p>
<ul class="iml-research-subtopics">
  <li>Variance-adaptive regression algorithms with guarantees that improve in low feature-conditional noise regime <span class="iml-venue">(COLT'26)</span></li>
  <li>Improved PAC-Bayes bounds with a sharper divergence <span class="iml-venue">(COLT'25)</span> and variance-adaptive guarantees <span class="iml-venue">(COLT'24)</span></li>
  <li>Confidence Sequences via Online Learning&rdquo; &mdash; invited talk at UW&ndash;Madison SILO <span class="iml-venue">(Fall '24)</span> <a href="https://silo.wisc.edu/talk/10232024/">[video]</a></li>
  <li>Variance-adaptive confidence sets for linear bandits, enabling practical adaptation to unknown noise levels <span class="iml-venue">(ICML '24)</span></li>
  <li>Improved unified confidence bounds for generalized linear models <span class="iml-venue">(NeurIPS '24)</span></li>
</ul>



  </div>
</div>
<!--
    <h2>Learning theory</h2>
    <p>
      A recurring theme in our work is developing novel, practical confidence bounds — tools for quantifying
      uncertainty that often become key building blocks for constructing efficient interactive-ML algorithms. (TODO: confidence bounds, generic learning theory)
    </p>
    <ul class="iml-research-subtopics">
      <li>"Confidence Sequences via Online Learning" — invited talk at UW&ndash;Madison SILO <span class="iml-venue">(Nov '24)</span> (TODO: add link)</li>
      <li>Unified confidence sets for generalized linear models, finally removing the norm dependence in logistic bandit regret bounds <span class="iml-venue">(NeurIPS '24)</span></li>
      <li>Improved PAC-Bayes bounds with a better divergence<span class="iml-venue">(COLT '25)</span> and with a variance adaptivity<span class="iml-venue">(COLT '25)</span></li>
    </ul>
-->




<!--

— an umbrella term for problems where the learner's decisions are actions that shape which data or feedback it receives next, rather than passive predictions.

This includes the standard reinforcement learning, bandit algorithms, Bayesian optimization, and active learning.
An offline version of IML is a setting where the data is collected by a fixed policy, which causes a distribution mismatch between the train and the test data.
Offline reinforcement learning falls into this category, and so do modern problems like LLM post-training, alignment, and test-time scaling.
I often leverage theoretical tools to solve these problems with guarantees, analyze performance guarantees for popular algorithms, 


Beyond offline reinforcement learning, modern 


(e.g., online reinforcement learning). 

There are offline settings 
Its offline versions 
This includes reinforcement learning, bandit algorithms, Bayesian optimization, active learning, and LLM post-training, alignment, and test-time scaling.


A recurring theme in our work is developing uncertainty quantification methods proved to be correct and efficient

novel, practical confidence bounds that serve as key building blocks for efficient IML algorithms.

-->
