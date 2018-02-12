---
title: Главная
visible: true
twig_first: true
process:
    twig: true
content:
    items: '@self.modular'
    order:
        by: default
        dir: asc
        custom:
            - _header
            - _slider
            - _order
            - _advantages
            - _about
body_classes: home-page
---
