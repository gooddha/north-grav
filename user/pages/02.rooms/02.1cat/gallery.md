---
title: Номера 1 категории
menu: 1 категория
twig_first: true
process:
    twig: true
---

# Номер первой категории
<!-- <div data-featherlight-gallery data-featherlight-filter="a">
    <a href="1cat/1-1.jpg"> <img width=150 height=150 src="1cat/thumbs/1-1.jpg" /></a>
</div> -->
<div data-featherlight-gallery data-featherlight-filter="a">  
  {% for image in page.media.images %}
      {% if image.url matches '/1-/' %}
        <a href="{{ image.url }}"> {{ image.cropZoom(200, 150) }} </a>       
      {% endif %}
  {% endfor %}
</div>
В этой категории представлены двухместные однокомнатные номера с более высоким уровнем комфорта. 18 кв. м вмещает гардероб, две односпальные кровати, софу, что может стать дополнительным спальным местом, прикроватные тумбочки, столик, стулья. Из оборудования есть телевизор, электрический чайник, утюг. Прохлада жарким летним днем обеспечивается с помощью кондиционера. В номере есть современный санузел с душем. Также имеется выход на балкон с прекрасным пейзажем.
