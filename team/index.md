---
title: 团队成员
nav:
  order: 3
  tooltip: 实验室成员
  en: Team
---

# {% include icon.html icon="fa-solid fa-users" %}<span class="zh">团队成员</span> <span class="en">Team</span>

<span class="zh">实验室拥有一支由教授、副研究员、工程师及硕博研究生组成的多学科交叉研究团队，成员信息详见个人主页。</span>

<span class="en">Our team is a multidisciplinary group of professors, associate researchers, engineers, and graduate students. Please visit individual pages for more information.</span>

{% include section.html %}

## <span class="zh">教职人员</span> <span class="en">Faculty</span>

{% include list.html data="members" component="portrait" filter="role == 'professor'" %}
{% include list.html data="members" component="portrait" filter="role == 'associate-researcher'" %}
{% include list.html data="members" component="portrait" filter="role == 'engineer'" %}

{% assign phds = site.members | where_exp: "member", "member.role == 'phd'" %}

{% include section.html %}

{% if phds.size > 0 %}

## <span class="zh">博士研究生</span> <span class="en">PhD Students</span>

{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

{% include section.html %}

{% endif %}

## <span class="zh">硕士研究生</span> <span class="en">Master's Students</span>

{% include list.html data="members" component="portrait" filter="role == 'master'" %}
