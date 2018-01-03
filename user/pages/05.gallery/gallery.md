---
title: Фотогалерея
twig_first: true
process:
    twig: true
---

# Фотогалерея
<div data-featherlight-gallery data-featherlight-filter="a">
  {% for image in page.media.images %}
      <a href="{{ image.url }}"> {{ image.cropZoom(200, 150) }} </a>       
  {% endfor %}
</div>
<!-- <div data-featherlight-gallery data-featherlight-filter="a">
    <a href="gallery/1.jpg"> <img width=150 height=150 src="gallery/thumbs/1.jpg" /></a>
    <a href="gallery/2.jpg"> <img width=150 height=150 src="gallery/thumbs/2.jpg" /></a>
    <a href="gallery/3.jpg"> <img width=150 height=150 src="gallery/thumbs/3.jpg" /></a>
    <a href="gallery/4.jpg"> <img width=150 height=150 src="gallery/thumbs/4.jpg" /></a>
    <a href="gallery/5.jpg"> <img width=150 height=150 src="gallery/thumbs/5.jpg" /></a>
    <a href="gallery/6.jpg"> <img width=150 height=150 src="gallery/thumbs/6.jpg" /></a>
    <a href="gallery/7.jpg"> <img width=150 height=150 src="gallery/thumbs/7.jpg" /></a>
    <a href="gallery/8.jpg"> <img width=150 height=150 src="gallery/thumbs/8.jpg" /></a>
    <a href="gallery/9.jpg"> <img width=150 height=150 src="gallery/thumbs/9.jpg" /></a>
    <a href="gallery/10.jpg"><img width=150 height=150 src="gallery/thumbs/10.jpg" /></a>
    <a href="gallery/11.jpg"><img width=150 height=150 src="gallery/thumbs/11.jpg" /></a>
</div> -->
