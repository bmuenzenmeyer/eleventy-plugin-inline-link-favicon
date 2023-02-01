---
layout: base.njk
---

# Eleventy Plugin Inline Link Favicon

{%ai "https://github.com/bmuenzenmeyer/eleventy-plugin-inline-link-favicon"%}docs on github{% endai%}

Lorem ipsum dolor sit amet, consectetur adipiscing {% ai "https://brianmuenzenmeyer.com/book/" %}book{% endai %}. Pellentesque sit amet ultricies massa. Donec dolor nisi, mattis blandit justo vel, consectetur mollis nisl. Etiam aliquet tempus arcu, eu tincidunt diam egestas ut. Nulla facilisi. Nullam cursus est eu est consectetur pellentesque. Proin vitae risus luctus, iaculis lacus at, elementum {{ "https://www.washingtonpost.com/" | ai("Washington Post") | safe }}. In hac habitasse platea dictumst. Phasellus non convallis est. Mauris quis diam vestibulum, elementum risus non, hendrerit massa. Integer suscipit nisi id egestas faucibus. Cras maximus erat at augue dictum sodales. Sed pretium sem ac dui ullamcorper, ac venenatis felis varius.

- Paired Shortcode: {% ai "https://www.11ty.dev/docs/shortcodes/#paired-shortcodes" %}paired shortcode docs{% endai %}
- Filter: {{ "https://www.11ty.dev/docs/filters/" | ai("filter docs") | safe }}

## All Syntaxes

- [.njk](/tests/nunjucks/)
- [.liquid](/tests/liquid/)
- [.11ty.js](/tests/javascript/)
- [.md](/tests/markdown)
- [.hbs](/tests/handlebars)

## Default Icon

{% ai "http://example.com" %}example.com{% endai %} - no favicon found

## {{ "https://www.11ty.dev/plugins/" | ai("11ty Plugins") | safe }}

This plugin is one of many cool plugins you should check out!
How does the image scale in a heading?

---

Look, a mock footer usecase!

{% ai "https://front-end.social/@brian" %}@brian{% endai %} | {% ai "https://github.com/bmuenzenmeyer" %}@bmuenzenmeyer{% endai %} | {% ai "https://www.linkedin.com/in/brian-muenzenmeyer-91a77554/" %}Brian Muenzenmeyer{% endai %}
