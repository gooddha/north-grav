---
twig_first: true
process:
    markdown: false
    twig: true
---

<div id="slider">  
    {% for image in page.media.images %}      
    {{ image }}
    {% endfor %}  
</div>
