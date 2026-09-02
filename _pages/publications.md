---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% capture preprints_html %}{% bibliography --query @misc --group_by none %}{% endcapture %}
{% if preprints_html contains '<li' %}
<h2 class="bibliography">Preprints</h2>
{{ preprints_html }}
{% endif %}

{% bibliography --query !@misc %}

</div>
