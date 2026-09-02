---
layout: page
permalink: /members/
title: members
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
  .iml-people h2 {
    margin-bottom: 0.25rem;
  }
  .iml-people .iml-section-note {
    opacity: 0.65;
    font-size: 0.85rem;
    margin: 0 0 1rem;
  }
  .iml-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.75rem 1.25rem;
  }
  .iml-card {
    text-align: center;
  }
  .iml-avatar {
    width: 96px;
    height: 96px;
    border-radius: 16px;
    margin: 0 auto 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: 600;
    background: rgba(127, 127, 127, 0.12);
    border: 1px solid rgba(127, 127, 127, 0.25);
    overflow: hidden;
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
  .iml-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid rgba(127, 127, 127, 0.25);
  }
  .iml-list li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(127, 127, 127, 0.25);
  }
  .iml-list .iml-alum-name {
    font-weight: 600;
  }
  .iml-list .iml-alum-detail {
    opacity: 0.7;
    font-size: 0.9rem;
    text-align: right;
  }
  .iml-note {
    opacity: 0.6;
    font-size: 0.85rem;
    margin-top: 2.5rem;
  }
  .iml-name a,
  .iml-alum-name a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dashed rgba(127, 127, 127, 0.5);
  }
  .iml-name a:hover,
  .iml-alum-name a:hover {
    color: var(--global-theme-color);
    border-bottom-color: var(--global-theme-color);
  }
  .iml-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    /* The source photo is a chest-up shot, not a tight headshot, so the
       face reads small at avatar size. Scaling up and shifting the zoom
       origin toward the face (roughly 31% down from the top of the
       photo, where the eyes/nose sit) crops in tighter on the face
       instead of showing mostly shoulders/torso. */
    transform: scale(1.5);
    transform-origin: 50% 31%;
  }
</style>

<div class="iml-people">

<section>
  <h2>Members</h2>

  <div class="iml-grid">
    <div class="iml-card">
      <div class="iml-avatar"><img src="{{ '/assets/img/members/kwang-sung-jun.jpg' | relative_url }}" alt="Kwang-Sung Jun" loading="lazy"></div>
      <p class="iml-name"><a href="https://kwangsungjun.github.io/">Kwang-Sung Jun</a></p>
      <span class="iml-role">Principal Investigator</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">SS</div>
      <p class="iml-name"><a href="https://seiyun-shin.github.io/">Seiyun Shin</a></p>
      <span class="iml-role">Postdoc (Summer'26–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">MH</div>
      <p class="iml-name"><a href="https://minsoo0926.github.io/">Minsoo Ha</a></p>
      <span class="iml-role">M.S. Student (Fall'26–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">SY</div>
      <p class="iml-name">Sunghoon Yoon</p>
      <span class="iml-role">Intern (Spring'26–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">JP</div>
      <p class="iml-name">Juhyeong Pang</p>
      <span class="iml-role">Intern, UW–Madison (Summer'26–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">TH</div>
      <p class="iml-name"><a href="https://www.linkedin.com/in/hataehyeok/">Taehyeok Ha</a></p>
      <span class="iml-role">Intern (Summer'26–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">YL</div>
      <p class="iml-name"><a href="https://www.cs.arizona.edu/person/yinan-li">Yinan Li</a></p>
      <span class="iml-role">PhD Student, U. Arizona (2024–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">TN</div>
      <p class="iml-name"><a href="https://tnguyen9210.github.io/">Tuan Nguyen</a></p>
      <span class="iml-role">PhD Student, U. Arizona (2023–)</span>
    </div>
    <div class="iml-card">
      <div class="iml-avatar">KB</div>
      <p class="iml-name"><a href="https://kapilan-balagopalan.github.io/">Kapilan Balagopalan</a></p>
      <span class="iml-role">PhD Student, U. Arizona (2023–)</span>
    </div>
  </div>
</section>

<section>
  <h2>Alumni</h2>

  <ul class="iml-list">
    <li>
      <span class="iml-alum-name">Changmin Jeon</span>
      <span class="iml-alum-detail">Intern, Seokyoung U., Summer'26</span>
    </li>
    <li>
      <span class="iml-alum-name"><a href="https://cilabs.kaist.ac.kr/members/ms/sungjoon-yoon">Sungjoon Yoon</a></span>
      <span class="iml-alum-detail">UA PhD program, 2025–2026 → BU PhD Program</span>
    </li>
    <li>
      <span class="iml-alum-name"><a href="https://meyaozhao.github.io/">Yao Zhao</a></span>
      <span class="iml-alum-detail">UA PhD, 2020–2025 → Microsoft AI</span>
    </li>
    <li>
      <span class="iml-alum-name">Ethan Huang</span>
      <span class="iml-alum-detail">UA BS, 2025 → NYU Master's Program</span>
    </li>
    <li>
      <span class="iml-alum-name">Benjamin Koppe</span>
      <span class="iml-alum-detail">UA BS, 2024–2025</span>
    </li>
    <li>
      <span class="iml-alum-name">Spencer Brady Gales</span>
      <span class="iml-alum-detail">UA Applied Math PhD, 2020–2021 → switched advisor</span>
    </li>
    <li>
      <span class="iml-alum-name">Jie Bian</span>
      <span class="iml-alum-detail">UA CS PhD Student, 2020–2022 → NUS PhD Program</span>
    </li>
    <li>
      <span class="iml-alum-name"><a href="https://jajajang.github.io/">Kyoungseok Jang</a></span>
      <span class="iml-alum-detail">UA Postdoc, 2022–2023 → postdoc at NYU, then Università degli Studi di Milano → Assistant Professor, Chung-Ang University (2025–)</span>
    </li>
    <li>
      <span class="iml-alum-name">Hari Krishnan</span>
      <span class="iml-alum-detail">UA CS BS, 2020–2022</span>
    </li>
  </ul>
</section>

</div>

<p class="iml-note">
  Photos are placeholders (initials) for everyone, including the PI — swap them for real photos in
  <code>_pages/profiles.md</code> whenever you have them. Roster pulled from
  <a href="https://kwangsungjun.github.io/research-group.html">kwangsungjun.github.io</a> on 2026-09-01 — please
  double-check names, roles, and dates before publishing.
</p>
