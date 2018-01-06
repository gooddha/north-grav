---
title: Детям
icon: 'child.png'
twig_first: true
process:
    twig: true
markdown:
  auto_line_breaks: true
---

# Детям

Отдых в Евпатории с детьми – это исключительный шанс побывать в одном из самых чистых экологических мест черноморского побережья, посвятив себя семье. На территории санатория позаботились о том, чтобы пребывание здесь стало для ваших детей незабываемым, полезным и интересным событием в жизни.

<div data-featherlight-gallery data-featherlight-filter="a">
  {% for image in page.media.images %}
    {% if image.url matches '/room/' %}
      <a href="{{ image.url }}">  {{ image.cropZoom(200, 150) }} </a>   
    {% endif %}    
  {% endfor %}
</div>

Для родителей достаточно важным является фактор обеспечения безопасного досуга юных туристов. Поэтому дети могут спокойно играть на благоустроенной детской площадке, которая находится в тенистой части здравницы. В тени буйной южной растительности расположены различные развлекательные комплексы, включающие в себя красочные горки, яркие лазалки, турники. Для родителей установлены удобные скамейки, поэтому присматривать за детьми весьма комфортно. Пол площадки засыпан морским песком.

<div data-featherlight-gallery data-featherlight-filter="a">
  {% for image in page.media.images %}
    {% if image.url matches '/playground/' %}
      <a href="{{ image.url }}">  {{ image.cropZoom(200, 150) }} </a>   
    {% endif %}    
  {% endfor %}
</div>

Дети любого возраста могут плавать в крытом бассейне, для чего обустроено специальное отделение для самых маленьких постояльцев. Безопасность детей – приоритетная задача, поэтому возле бассейна имеется специальное покрытие и удобные спуски. Дети могут играть надувными игрушками, мячами, пользоваться кругами для плавания.

<div data-featherlight-gallery data-featherlight-filter="a">
  {% for image in page.media.images %}
    {% if image.url matches '/pool/' %}
      <a href="{{ image.url }}">  {{ image.cropZoom(200, 150) }} </a>   
    {% endif %}    
  {% endfor %}
</div>

В здравнице проводятся увлекательные экскурсии, развлекательные турниры, вместе с взрослыми дети могут посещать пляж.
<div data-featherlight-gallery data-featherlight-filter="a">
  {% for image in page.media.images %}
    {% if image.url matches '/show/' %}
      <a href="{{ image.url }}">  {{ image.cropZoom(200, 150) }} </a>   
    {% endif %}    
  {% endfor %}
</div>
