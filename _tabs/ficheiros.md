---
title: Ficheiros
icon: fas fa-folder-open
order: 2
---

{% assign all_files = site.static_files | where_exp: "f", "f.path contains '/assets/files/'" | sort: "name" %}
{% assign img_ext = ".jpg .jpeg .png .gif .webp" %}
{% assign docs = "" | split: "" %}
{% assign imgs = "" | split: "" %}
{% for f in all_files %}
  {% assign ext = f.extname | downcase %}
  {% if img_ext contains ext %}
    {% assign imgs = imgs | push: f %}
  {% else %}
    {% assign docs = docs | push: f %}
  {% endif %}
{% endfor %}

<div class="files-page">
<h2 class="files-heading">Documentos</h2>
{% if docs.size > 0 %}
<ul class="file-list">
  {% for f in docs %}
    {% assign ext = f.extname | downcase %}
    {% case ext %}
      {% when '.pdf' %}{% assign ico = 'fa-file-pdf' %}
      {% when '.zip', '.rar', '.7z' %}{% assign ico = 'fa-file-zipper' %}
      {% when '.doc', '.docx' %}{% assign ico = 'fa-file-word' %}
      {% when '.xls', '.xlsx', '.csv' %}{% assign ico = 'fa-file-excel' %}
      {% when '.ppt', '.pptx' %}{% assign ico = 'fa-file-powerpoint' %}
      {% when '.py', '.m', '.c', '.cpp', '.ino', '.json', '.yml' %}{% assign ico = 'fa-file-code' %}
      {% else %}{% assign ico = 'fa-file' %}
    {% endcase %}
    <li>
      <a class="file-item" href="{{ f.path | relative_url }}" download>
        <i class="fas {{ ico }}"></i>
        <span class="file-name">{{ f.basename }}</span>
        <span class="file-ext">{{ ext | remove: '.' | upcase }}</span>
        <i class="fas fa-download file-dl"></i>
      </a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="text-muted">Ainda não há documentos.</p>
{% endif %}

<h2 class="files-heading">Fotografias</h2>
{% if imgs.size > 0 %}
<div class="photo-grid">
  {% for f in imgs %}
    <a href="{{ f.path | relative_url }}" target="_blank" rel="noopener"><img src="{{ f.path | relative_url }}" alt="{{ f.basename }}" loading="lazy"></a>
  {% endfor %}
</div>
{% else %}
<p class="text-muted">Ainda não há fotografias.</p>
{% endif %}
</div>
