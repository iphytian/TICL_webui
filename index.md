---
---

<div class="home-row">
  <div class="home-main">

    <h1>望远镜智能控制实验室</h1>

    <p class="home-lead">
      望远镜智能控制实验室（Telescope Intelligent Control Laboratory）由王怀清教授领导，致力于将现代控制理论、人工智能与精密机电技术相结合，研究大口径光学望远镜的智能化运维与自主观测关键技术，服务于深空探测、天文观测与光电跟踪等国家重大需求。
    </p>

    <div class="carousel" data-carousel>
      <div class="carousel-track">
        <div class="carousel-slide"><img src="{{ 'images/slider/slide1.svg' | relative_url }}" alt="研究方向"></div>
        <div class="carousel-slide"><img src="{{ 'images/slider/slide2.svg' | relative_url }}" alt="团队成员"></div>
        <div class="carousel-slide"><img src="{{ 'images/slider/slide3.svg' | relative_url }}" alt="招生与合作"></div>
      </div>
      <button class="carousel-btn carousel-prev" type="button" aria-label="上一张">&#10094;</button>
      <button class="carousel-btn carousel-next" type="button" aria-label="下一张">&#10095;</button>
    </div>

    <p>
      实验室围绕 <strong>望远镜健康管理</strong>、<strong>望远镜自主运行</strong> 与 <strong>AI+天文光学</strong> 三大方向开展研究，推动望远镜从"人工值守"迈向"智能自主"。
    </p>

    <div class="home-directions">
      <a class="direction-card" href="{{ 'research' | relative_url }}">
        <strong>🔭 望远镜健康管理</strong>
        <span>状态监测、故障诊断与预测、剩余寿命评估与维护决策，保障大型设备安全可靠运行。</span>
      </a>
      <a class="direction-card" href="{{ 'research' | relative_url }}">
        <strong>🤖 望远镜自主运行</strong>
        <span>自主导星跟踪、智能观测调度、任务自动规划与故障自愈，实现无人值守运行。</span>
      </a>
      <a class="direction-card" href="{{ 'research' | relative_url }}">
        <strong>✨ AI+天文光学</strong>
        <span>智能图像处理、目标检测与识别、像质智能优化与智能光学系统设计。</span>
      </a>
    </div>

    <p class="home-recruit">
      实验室常年招收博士、硕士研究生与博士后，欢迎对天文、控制与智能技术感兴趣的同学
      <a href="{{ 'contact' | relative_url }}">加入我们</a>。
    </p>

    <h2>依托与合作单位</h2>

    <div class="home-logos">
      <figure class="logo-item">
        <a href="https://www.ucas.ac.cn/" target="_blank" rel="noopener" class="logo-round">
          <img src="{{ 'images/logos/ucas.png' | relative_url }}" alt="中国科学院大学">
        </a>
        <figcaption>中国科学院大学</figcaption>
      </figure>
      <figure class="logo-item">
        <a href="https://niaot.cas.cn/" target="_blank" rel="noopener" class="logo-wide">
          <img src="{{ 'images/logos/niaot.png' | relative_url }}" alt="中国科学院南京天文光学技术研究所望远镜新技术研究室">
        </a>
        <figcaption>中国科学院南京天文光学技术研究所望远镜新技术研究室</figcaption>
      </figure>
    </div>

  </div>

  <aside class="home-news">
    <h2>新闻动态</h2>
    <ul class="news-list">
      {% for post in site.posts limit:5 %}
        <li>
          <span class="news-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <a class="news-more" href="{{ 'blog' | relative_url }}">查看全部新闻 →</a>
  </aside>
</div>
