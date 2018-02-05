---
title: Новости
process:
    markdown: true
    twig: true
twig_first: true
routable: false
visible: false
---

# Новости
<ul class="rooms-cats">
    {% for post in page.children %}
        <li class="children">
            <strong><a href="{{ post.url }}">{{ post.title }}</a></strong>
        </li>
    {% endfor %}
</ul>
