---
title: Пляж
icon: 'beach.jpg'
metadata:
  description: 'ОЛЦ-пансионат Северный располагает собственным песчаный пляж с навесами, душевыми и туалетами. Расстояние 400 м от корпусов, 10 минут ходьбы. Рядом есть кафе, киоски. Прокат пляжного инвентаря (зонты,пляжное покрывало, детские песочные наборы, круги и пр.) предварительно оформляется в пансионате. Бесплатно предоставляются деревянные шезлонги под навесами, они зафиксированы. На пляже есть волейбольная площадка, отдельные места для курения, раздевалки. Работают матросы-спасатели, дежурная медсестра. Пляж предназначен только для наших отдыхающих.'
twig_first: true
process:
    twig: true
---

#Пляж

ОЛЦ-пансионат "Северный" располагает собственным песчаным пляжем площадью 0,8 Га с навесами, душевыми, туалетами, питьевыми фонтанчиками.

<div data-featherlight-gallery data-featherlight-filter="a">

    {% for image in page.media.images %}
        <a href="{{ image.url }}"> {{ image.cropZoom(200, 150) }} </a>       
    {% endfor %}

    <!-- <a href="beach/beach1.jpg"> <img width=150 height=150 src="beach/thumbs/beach1.jpg" /></a>
    <a href="beach/beach2.jpg"> <img width=150 height=150 src="beach/thumbs/beach2.jpg" /></a>
    <a href="beach/beach3.jpg"> <img width=150 height=150 src="beach/thumbs/beach3.jpg" /></a>
    <a href="beach/beach4.jpg"> <img width=150 height=150 src="beach/thumbs/beach4.jpg" /></a>
    <a href="beach/beach5.jpg"> <img width=150 height=150 src="beach/thumbs/beach5.jpg" /></a>
    <a href="beach/beach6.jpg"> <img width=150 height=150 src="beach/thumbs/beach6.jpg" /></a>
    <a href="beach/beach7.jpg"> <img width=150 height=150 src="beach/thumbs/beach7.jpg" /></a>    
    <a href="beach/beach8.jpg"> <img width=150 height=150 src="beach/thumbs/beach8.jpg" /></a>     -->
</div>

Расстояние 400 м от корпусов, 10 минут ходьбы. Рядом есть кафе, киоски. Прокат пляжного инвентаря (зонты,пляжное покрывало, детские песочные наборы, круги и пр.) предварительно оформляется в пансионате. Бесплатно предоставляются деревянные шезлонги под навесами, они зафиксированы.
На пляже есть волейбольная площадка, отдельные места для курения, раздевалки. Работают матросы-спасатели, дежурная медсестра.
Пляж предназначен только для наших отдыхающих.

<div class="yandex-map"    style="width: 800px; height: 620px; background-image: url(contacts/map-background.jpg);    ">
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6a4ff62084847247ddd47b41b5a4d0b557a6bea94b10c3a843d699b43182592a&amp;width=800&amp;height=620&amp;lang=ru_RU&amp;scroll=true"></script>
</div>
