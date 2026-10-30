---
layout: page
title: people
permalink: /people/
description: The people behind the science
nav: true
nav_order: 1
---

Our work brings together interests in plant physiology, microbiology, ecology, and disease. Meet the people in the Plants vs Microbes lab.

<figure class="lab-group-photo">
  <img src="{{ '/assets/img/lab_hike_lipsett.jpg' | relative_url }}" alt="Lab members on a mountain hike, with snowy peaks in the background." width="1200" height="900">
  <figcaption>Beyond the bench: a lab hike in the mountains.</figcaption>
</figure>

{% for group in site.data.people %}
<h2>{{ group.title | escape }}</h2>
<div class="member-grid">
  {% for member in group.members %}
  <div class="member-card">
    {% if member.image %}
    <img class="member-photo" src="{{ member.image | relative_url }}" alt="{{ member.name | escape }}" width="80" height="80" loading="lazy">
    {% else %}
    <span class="member-initials" aria-hidden="true">{{ member.initials }}</span>
    {% endif %}
    <div>
      <h3>{% if member.url %}<a href="{{ member.url | relative_url }}">{{ member.name | escape }}</a>{% else %}{{ member.name | escape }}{% endif %}</h3>
      <p>{{ member.role | escape }}</p>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}

<div class="lab-callout" markdown="1">
### Interested in joining us?

Explore our research and get in touch to discuss potential opportunities.

[Joining the lab]({{ '/join/' | relative_url }})
</div>
