---
twig_first: true
process:
    twig: true
    markdown: false
---

<div id="slider" markdown="1">  
  {% for image in page.media.images %}      
  {{ image }}
  {% endfor %}
</div>
