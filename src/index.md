---
layout: base.njk
eleventyImport:
  collections: ["page"]
---

## Bienvenue sur le meilleur site de veille technologique !

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at consequat felis. Nunc vitae enim massa. Maecenas efficitur nisl sit amet elit laoreet tincidunt. 

## Voir les derniers articles

{% for page in collections.page %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

## En savoir plus ? 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at consequat felis. Nunc vitae enim massa. Maecenas efficitur nisl sit amet elit laoreet tincidunt. 

Maecenas non ligula vel ex eleifend porttitor a eget diam. Nunc tempus varius felis vitae sagittis. Maecenas laoreet ex sit amet mi condimentum congue. Vestibulum id aliquet est. 
