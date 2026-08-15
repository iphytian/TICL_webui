---
---

# 望远镜智能控制实验室

望远镜智能控制实验室由王怀清教授领导，致力于将现代控制理论、人工智能与精密机电技术相结合，研究大口径光学望远镜的智能控制与自动化观测关键技术，服务于深空探测、天文观测与光电跟踪等国家重大需求。其核心研究方向包括高精度伺服控制、智能控制算法、自动导星与观测自动化。

{% include section.html %}

## 高亮

{% capture text %}

实验室围绕"看得准、跟得稳、看得清"三大核心目标，在高精度伺服控制、智能控制算法、天文图像与自动导星、观测自动化与调度、系统建模与仿真、空间目标光电跟踪等方面形成了系统的研究体系。

{%
  include button.html
  link="research"
  text="了解研究方向"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/slider/slide1.svg"
  link="research"
  title="研究方向"
  text=text
%}

{% capture text %}

实验室拥有一支由教授、副研究员、工程师及硕博研究生组成的多学科交叉研究团队，与国内外多家天文台站、科研院所建立了长期稳定的合作关系。

{%
  include button.html
  link="team"
  text="认识团队成员"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/slider/slide2.svg"
  link="team"
  title="团队成员"
  flip=true
  text=text
%}

{% capture text %}

实验室常年招收博士、硕士研究生与博士后，欢迎对天文、控制与智能技术感兴趣的同学加入我们，共同探索望远镜智能控制的星辰大海。

{%
  include button.html
  link="contact"
  text="联系我们"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/slider/slide3.svg"
  link="contact"
  title="招生与合作"
  text=text
%}

{% include section.html %}

## 新闻动态

{% include list.html data="posts" component="post-excerpt" %}

{% include section.html %}

## 依托与合作单位

{% capture content %}

{%
  include figure.html
  image="images/logos/ucas.png"
  link="https://www.ucas.ac.cn/"
  caption="中国科学院大学"
%}

{%
  include figure.html
  image="images/logos/niaot.png"
  link="https://niaot.cas.cn/"
  caption="南京天文光学技术研究所"
%}

{% endcapture %}

{% include grid.html style="square" content=content %}
