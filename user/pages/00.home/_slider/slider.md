---
twig_first: true
process:
    twig: true
---

<div id="slider" markdown="1">
  <p>
    {% for image in page.media.images %}      
    {{ image }}
    {% endfor %}
  </p>
</div>
