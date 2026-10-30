---
layout: page
permalink: /publications/
title: publications
description: Selected papers from Connor Fitzpatrick and collaborators
nav: true
nav_order: 3
---

Our publications span plant physiology, microbiome assembly, and interactions between plants and their environments. The selection below includes work completed at the University of Calgary and in earlier collaborations.

<div class="lab-actions">
  <a class="lab-button" href="https://scholar.google.com/citations?user=PcNuhBEAAAAJ">Browse Google Scholar</a>
  <a href="https://orcid.org/0000-0002-7100-9542">ORCID record →</a>
</div>

## Selected publications

{% for paper in site.data.lab_publications %}
<article class="lab-paper">
  <p class="lab-eyebrow">{{ paper.year }} · {{ paper.journal | escape }}</p>
  <h3><a href="https://doi.org/{{ paper.doi }}">{{ paper.title | escape }}</a></h3>
  <p>{{ paper.authors | escape }}</p>
  <p class="lab-paper-links"><a href="https://doi.org/{{ paper.doi }}">Read paper</a> · <a href="{{ paper.source }}">Publication record</a></p>
</article>
{% endfor %}
