---
title: 团队成员
nav:
  order: 3
  tooltip: 实验室成员
  en: Team
---

{% assign faculty = site.members | where_exp: "m", "m.role == 'professor' or m.role == 'associate-researcher' or m.role == 'engineer'" | sort: "order" %}
{% assign phds = site.members | where_exp: "m", "m.role == 'phd'" | sort: "order" %}
{% assign masters = site.members | where_exp: "m", "m.role == 'master'" | sort: "order" %}

# {% include icon.html icon="fa-solid fa-users" %}<span class="zh">团队成员</span> <span class="en">Team</span>

<span class="zh">实验室拥有一支由教授、副研究员、工程师及硕博研究生组成的多学科交叉研究团队，成员信息详见个人主页。</span>

<span class="en">Our team is a multidisciplinary group of professors, associate researchers, engineers, and graduate students. Please visit individual pages for more information.</span>

{% include section.html %}

## <span class="zh">教职人员</span> <span class="en">Faculty</span>

{% for m in faculty %}
  {% include portrait.html lookup=m.slug %}
{% endfor %}

{% include section.html %}

{% if phds.size > 0 %}

## <span class="zh">博士研究生</span> <span class="en">PhD Students</span>

{% for m in phds %}
  {% include portrait.html lookup=m.slug %}
{% endfor %}

{% include section.html %}

{% endif %}

## <span class="zh">硕士研究生</span> <span class="en">Master's Students</span>

{% for m in masters %}
  {% include portrait.html lookup=m.slug %}
{% endfor %}
