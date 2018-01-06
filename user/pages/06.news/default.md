---
title: Новости
twig_first: true
process:
    twig: true
---

# Новости
<ul class="rooms-cats">
    {% for post in page.children %}
        <li class="children">
            <strong><a href="{{ post.url }}">{{ post.title }}</a></strong>
        </li>
    {% endfor %}
</ul>
