---
title: 团队成员
nav:
  order: 3
  tooltip: 实验室成员
---

# {% include icon.html icon="fa-solid fa-users" %}团队成员

实验室拥有一支由教授、副研究员、工程师及硕博研究生组成的多学科交叉研究团队，成员信息详见个人主页。

{% include section.html %}

## 教师团队

{% include list.html data="members" component="portrait" filter="role == 'professor' or role == 'associate-researcher' or role == 'engineer'" %}

{% include section.html %}

## 硕士研究生

{% include list.html data="members" component="portrait" filter="role == 'master'" %}
