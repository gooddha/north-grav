---
title: Сервис
twig_first: true
process:
    twig: true
---

# Сервис

На территории ОЛЦ-пансионат «Северный» оборудованы крытые бассейны с минеральной водой (взрослый и детский), теннисный корт, благоустроено большое футбольное поле, детские и спортивные площадки. Работает медицинский центр, который специализируется на оздоровлении и лечении: кардиологических проблем, заболеваний центральной и периферийной нервной системы, органов дыхания и лор-заболевания, опорно-двигательного аппарата. На досуге можно посетить киноконцертный зал или воспользоваться услугами экскурсионного бюро. Для гостей, прибывших на личном автотранспорте, предусмотрена парковка. «Северный» рекомендуется для полноценного отдыха и оздоровления взрослых и детей.

<ul class="rooms-cats">
    {% for post in page.children %}
        <li class="children">
          <a href="{{ post.url }}">
            {# <img src="{{ post.url }}/{{ post.header.icon }}"> #}
            <strong>{{ post.title }}</strong>
          </a>
        </li>
    {% endfor %}
</ul>
