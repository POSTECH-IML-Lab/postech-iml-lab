---
layout: page
permalink: /people/
title: people
description: members of the Interactive Machine Learning Lab
nav: true
nav_order: 7
---

<style>
  .iml-people section {
    margin-top: 2.5rem;
  }
  .iml-people section:first-child {
    margin-top: 0;
  }
  .iml-pi {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .iml-pi img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .iml-pi .iml-bio {
    flex: 1;
    min-width: 260px;
  }
  .iml-eyebrow {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    opacity: 0.6;
    margin: 0 0 0.4rem;
  }
  .iml-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.75rem 1.25rem;
  }
  .iml-card {
    text-align: center;
  }
  .iml-card img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 0.6rem;
    display: block;
    border: 1px solid rgba(127, 127, 127, 0.25);
  }
  .iml-card .iml-name {
    font-weight: 600;
    margin: 0;
  }
  .iml-card .iml-role {
    display: block;
    margin: 0.15rem 0 0;
    font-size: 0.85rem;
    opacity: 0.65;
  }
  .iml-alumni {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid rgba(127, 127, 127, 0.25);
  }
  .iml-alumni li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(127, 127, 127, 0.25);
  }
  .iml-alumni .iml-alum-name {
    font-weight: 600;
  }
  .iml-alumni .iml-alum-detail {
    opacity: 0.7;
    font-size: 0.9rem;
  }
  .iml-note {
    opacity: 0.6;
    font-size: 0.85rem;
    margin-top: 2.5rem;
  }
</style>

<div class="iml-people">

<section class="iml-pi">
  <img src="{{ 'assets/img/prof_pic.jpg' | relative_url }}" alt="Principal investigator photo">
  <div class="iml-bio">
    <span class="iml-eyebrow">Principal Investigator</span>
    <p><strong>[Your Name]</strong> — [Title, e.g. Assistant Professor], [Your Department], POSTECH</p>
    <p>
      Write your personal introduction here — your research interests, background, and what
      you look for in prospective students. This paragraph is a placeholder; edit
      <code>_pages/profiles.md</code> to replace it with your real bio and photo.
    </p>
    <p>
      <a href="mailto:you@example.com">you@example.com</a> ·
      <a href="https://scholar.google.com">Google Scholar</a> ·
      <a href="{{ '/cv/' | relative_url }}">CV</a>
    </p>
  </div>
</section>

<section>
  <h2>Members</h2>

  <div class="iml-grid">
    <div class="iml-card">
      <img src="{{ 'assets/img/1.jpg' | relative_url }}" alt="">
      <p class="iml-name">Minji Lee</p>
      <span class="iml-role">Ph.D. Student</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/2.jpg' | relative_url }}" alt="">
      <p class="iml-name">Daniel Park</p>
      <span class="iml-role">Ph.D. Student</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/3.jpg' | relative_url }}" alt="">
      <p class="iml-name">Sara Kim</p>
      <span class="iml-role">M.S. Student</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/4.jpg' | relative_url }}" alt="">
      <p class="iml-name">Wei Chen</p>
      <span class="iml-role">M.S. Student</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/5.jpg' | relative_url }}" alt="">
      <p class="iml-name">Arjun Patel</p>
      <span class="iml-role">Postdoctoral Researcher</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/6.jpg' | relative_url }}" alt="">
      <p class="iml-name">Emily Chen</p>
      <span class="iml-role">Undergraduate Researcher</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/7.jpg' | relative_url }}" alt="">
      <p class="iml-name">Yuki Tanaka</p>
      <span class="iml-role">Ph.D. Student</span>
    </div>
    <div class="iml-card">
      <img src="{{ 'assets/img/8.jpg' | relative_url }}" alt="">
      <p class="iml-name">Noah Garcia</p>
      <span class="iml-role">Research Intern</span>
    </div>
  </div>
</section>

<section>
  <h2>Alumni</h2>

  <ul class="iml-alumni">
    <li>
      <span class="iml-alum-name">Alex Kim</span>
      <span class="iml-alum-detail">Ph.D. 2024 → Assistant Professor, Example University</span>
    </li>
    <li>
      <span class="iml-alum-name">Grace Han</span>
      <span class="iml-alum-detail">M.S. 2023 → Research Engineer, Example Company</span>
    </li>
    <li>
      <span class="iml-alum-name">Tom Becker</span>
      <span class="iml-alum-detail">Ph.D. 2022 → Postdoc, Example Institute</span>
    </li>
  </ul>
</section>

</div>

<p class="iml-note">Everything above is placeholder content (names, photos, and roles) — replace it with your real lab roster in <code>_pages/profiles.md</code>.</p>
