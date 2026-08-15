---
title: 联系我们
nav:
  order: 5
  tooltip: 邮箱、地址与招生
---

# {% include icon.html icon="fa-regular fa-envelope" %}联系我们

欢迎通过以下方式联系我们。也欢迎对天文、控制与智能技术感兴趣的同学咨询招生事宜。

{% include section.html %}

## 联系信息

{%
  include button.html
  type="email"
  text="ticlab@example.edu.cn"
  link="ticlab@example.edu.cn"
%}
{%
  include button.html
  type="phone"
  text="+86-XXX-XXXXXXXX"
  link="+86-XXX-XXXXXXXX"
%}
{%
  include button.html
  type="address"
  tooltip="实验室地址"
  link="https://maps.google.com"
%}

{% include section.html %}

## 招生信息

实验室常年招收博士、硕士研究生与博士后：

{% capture content %}

**博士研究生**  
每年招收 1–2 名，要求控制理论与控制工程、自动化、机械电子、计算机等相关专业，具有扎实的数学与控制理论基础。

**硕士研究生**  
每年招收 3–4 名，要求自动化、电子信息、计算机、光电等相关专业，鼓励参与竞赛与科创项目，具有编程实践经验者优先。

**博士后**  
常年招聘，待遇从优，研究方向与实验室重点方向契合，提供充足的科研经费与实验平台支持。

{% endcapture %}

{% include grid.html style="square" content=content %}

{% include section.html %}

## 实验室位置

地图占位区域，可嵌入高德 / 百度 / Google 地图：

<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=118.75%2C31.98%2C118.85%2C32.06&layer=mapnik&marker=32.02%2C118.80"
  style="border: 1px solid #e7e7e7; border-radius: 10px; width: 100%; height: 360px;"
  loading="lazy"
></iframe>
