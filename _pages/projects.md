---
layout: page
title: projects
permalink: /projects/
description: Research themes in the Interactive Machine Learning Lab.
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
  <div class="iml-research-icon"><i class="fa-solid fa-shuffle"></i></div>
  <div class="iml-research-body">
    <h2>Bandits &amp; online decision-making</h2>
    <p>
      We study bandit algorithms and other online decision-making problems, where an agent's decisions are
      actions that shape which data or feedback it receives next — balancing exploration of uncertain options
      against exploiting what already works well.
    </p>
    <ul class="iml-research-subtopics">
      <li>A linear extension of the MED algorithm (Maillard sampling) that is randomized, off-policy-friendly, and nearly optimal <span class="iml-venue">(AISTATS '25)</span></li>
      <li>Estimating the value of the maximum mean among K arms, surpassing the performance of an oracle that already knows the best arm <span class="iml-venue">(AISTATS '25)</span></li>
      <li>Adapting to the unknown noise level in linear bandits <span class="iml-venue">(ICML '24)</span></li>
      <li>Bandit experiments with instrumental variables, enabling experimentation even where direct experimentation isn't possible <span class="iml-venue">(NeurIPS '24)</span></li>
    </ul>
  </div>
</div>

<div class="iml-research-topic">
  <div class="iml-research-icon"><i class="fa-solid fa-shield-halved"></i></div>
  <div class="iml-research-body">
    <h2>Confidence bounds &amp; statistical guarantees</h2>
    <p>
      A recurring theme in our work is developing novel, practical confidence bounds — tools for quantifying
      uncertainty that often become key building blocks for constructing efficient interactive-ML algorithms.
    </p>
    <ul class="iml-research-subtopics">
      <li>Unified confidence sets for generalized linear models, finally removing the norm dependence in logistic bandit regret bounds <span class="iml-venue">(NeurIPS '24)</span></li>
      <li>"Confidence Sequences via Online Learning" — invited talk at UW&ndash;Madison SILO <span class="iml-venue">(Nov '24)</span></li>
    </ul>
  </div>
</div>

<div class="iml-research-topic">
  <div class="iml-research-icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
  <div class="iml-research-body">
    <h2>Bayesian optimization, active learning &amp; low-rank methods</h2>
    <p>
      We work on Bayesian optimization and active learning — deciding what to query or evaluate next — along
      with related structured-estimation problems such as low-rank matrix recovery.
    </p>
    <ul class="iml-research-subtopics">
      <li>Low-rank matrix recovery with guarantees that surpass nuclear-norm regularization, including design-of-experiments strategies for subspace recovery and low-rank bandits <span class="iml-venue">(ICML '24)</span></li>
      <li>PAC-Bayes bounds using a divergence that improves on the standard KL divergence <span class="iml-venue">(COLT '24)</span></li>
    </ul>
  </div>
</div>

<div class="iml-research-topic">
  <div class="iml-research-icon"><i class="fa-solid fa-comments"></i></div>
  <div class="iml-research-body">
    <h2>Interactive ML for large language models</h2>
    <p>
      Recently, we have been looking into IML problems that arise from large language models, including
      alignment, post-training, reasoning, and test-time scaling — viewing a model's generated outputs as
      <em>actions</em> and bringing IML tools to bear on them. We collaborate closely with Krafton AI on
      post-training of LLMs and with Meta Platforms on efficient A/B testing systems.
    </p>
  </div>
</div>

<p class="iml-note" style="opacity:.6; font-size:.85rem; margin-top:2rem;">
  These research themes and the highlighted results are drawn from
  <a href="https://kwangsungjun.github.io/">kwangsungjun.github.io</a> as of 2026-09-01 — please double-check
  venues/dates and add paper links before publishing.
</p>
