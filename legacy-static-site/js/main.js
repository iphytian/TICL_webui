/* ============================================
   望远镜智能控制实验室 — 交互脚本
   功能：中英双语切换 / 导航栏滚动效果 / 移动端菜单
   ============================================ */

(function () {
  "use strict";

  /* ---------------- 多语言词典 ---------------- */
  const I18N = {
    zh: {
      "lang.toggle": "EN",
      "brand.zh": "望远镜智能控制实验室",
      "brand.en": "Telescope Intelligent Control Lab",
      "nav.home": "首页",
      "nav.research": "研究方向",
      "nav.publications": "科研成果",
      "nav.team": "团队成员",
      "nav.admission": "招生信息",
      "nav.contact": "联系我们",
      "home.intro": "望远镜智能控制实验室由王怀清教授领导，致力于将现代控制理论、人工智能与精密机电技术相结合，研究大口径光学望远镜的智能控制与自动化观测关键技术，服务于深空探测、天文观测与光电跟踪等国家重大需求。其核心研究方向包括高精度伺服控制、智能控制算法、自动导星与观测自动化。",
      "home.newsTitle": "新闻动态",
      "home.seeAll": "查看全部动态 →",
      "home.affiliations": "依托与合作单位",
      "about.f1k": "建室时间",
      "about.f1v": "2018 年",
      "about.f2k": "研究领域",
      "about.f2v": "智能控制 · 天文仪器",
      "about.f3k": "团队成员",
      "about.f3v": "20+ 人",
      "about.f4k": "合作单位",
      "about.f4v": "10+ 家天文台站与高校",
      "research.title": "研究方向",
      "research.subtitle": "Research Directions",
      "research.r1t": "高精度伺服控制",
      "research.r1d": "研究望远镜转台高精度伺服控制技术，包括电机驱动、速度环/位置环控制、前馈补偿与自抗扰控制，实现亚角秒级跟踪精度。",
      "research.r2t": "智能控制算法",
      "research.r2d": "将强化学习、模糊控制、神经网络等人工智能方法引入望远镜控制，实现系统参数自适应调节与未知扰动抑制。",
      "research.r3t": "天文图像与自动导星",
      "research.r3d": "研究星图识别、目标检测与跟踪、自动导星技术，提升望远镜成像质量与长时间曝光观测能力。",
      "research.r4t": "观测自动化与调度",
      "research.r4d": "面向多望远镜协同观测场景，研究任务自动规划、智能调度与故障自诊断技术，提高观测效率与可靠性。",
      "research.r5t": "系统建模与仿真",
      "research.r5d": "建立望远镜机电系统高保真模型，开展控制策略的离线仿真与半实物验证，缩短算法到工程落地的周期。",
      "research.r6t": "空间目标光电跟踪",
      "research.r6d": "面向空间目标监视与激光通信等应用，研究快速目标捕获、高动态跟踪与激光链路指向控制技术。",
      "team.title": "团队成员",
      "team.subtitle": "Our Team",
      "team.leaders": "教师团队",
      "team.students": "硕士研究生",
      "team.l1n": "王怀清 教授",
      "team.l1r": "教授 · 博士生导师",
      "team.l1d": "研究方向：望远镜高精度伺服控制与智能控制技术。",
      "team.l2n": "徐灵哲 副研究员",
      "team.l2r": "副研究员 · 硕士生导师",
      "team.l2d": "研究方向：智能控制算法与观测自动化技术。",
      "team.l3n": "胡天柱 副研究员",
      "team.l3r": "副研究员 · 硕士生导师",
      "team.l3d": "研究方向：天文图像处理与自动导星技术。",
      "team.l4n": "蔡静宜 工程师",
      "team.l4r": "工程师",
      "team.l4d": "负责实验室控制系统研发与工程技术支撑。",
      "team.s1n": "赵毅",
      "team.s2n": "魏栩楠",
      "team.s3n": "李佳佳",
      "team.s4n": "童嘶桥",
      "team.s5n": "童泽露",
      "team.studentRole": "硕士研究生",
      "team.note": "注：成员研究方向等详细信息请以实验室官方公告为准。",
      "publications.title": "科研成果",
      "publications.subtitle": "Publications & Achievements",
      "publications.stat1": "SCI 论文",
      "publications.stat2": "发明专利",
      "publications.stat3": "国家级项目",
      "publications.stat4": "省部级奖励",
      "publications.p1t": "基于自抗扰控制的望远镜高精度跟踪方法研究",
      "publications.p1a": "Zhang X., Li Y., et al. — Astronomical Journal（示例）",
      "publications.p2t": "深度强化学习在望远镜观测调度中的应用",
      "publications.p2a": "Li Y., Wang H., et al. — IEEE Transactions on ...（示例）",
      "publications.p3t": "基于深度学习的自动导星星点定位算法",
      "publications.p3a": "Wang H., et al. — Optics Express（示例）",
      "publications.p4t": "大口径望远镜伺服系统辨识与建模",
      "publications.p4a": "Zhang X., et al. — Research in Astronomy and Astrophysics（示例）",
      "publications.note": "注：以上论文信息为示例占位内容，正式上线前请替换为真实成果列表。",
      "news.n1t": "实验室顺利完成某型望远镜控制系统的现场联调测试",
      "news.n2t": "实验室获批国家重点研发计划项目课题",
      "news.n3t": "实验室师生参加国际天文仪器学术会议并作报告",
      "news.n4t": "实验室获国家自然科学基金面上项目资助",
      "admission.title": "招生信息",
      "admission.subtitle": "Admissions",
      "admission.phd": "博士研究生",
      "admission.phd1": "每年招收 1–2 名",
      "admission.phd2": "要求：控制理论与控制工程、自动化、机械电子、计算机等相关专业",
      "admission.phd3": "具有扎实的数学与控制理论基础，对天文仪器方向有浓厚兴趣",
      "admission.ms": "硕士研究生",
      "admission.ms1": "每年招收 3–4 名",
      "admission.ms2": "要求：自动化、电子信息、计算机、光电等相关专业",
      "admission.ms3": "鼓励参与竞赛、科创项目，具有编程实践经验者优先",
      "admission.postdoc": "博士后",
      "admission.pd1": "常年招聘，待遇从优",
      "admission.pd2": "研究方向与实验室重点方向契合",
      "admission.pd3": "提供充足的科研经费与实验平台支持",
      "admission.cta": "欢迎对天文、控制与智能技术感兴趣的同学加入我们！",
      "admission.apply": "发送申请邮件",
      "contact.title": "联系我们",
      "contact.subtitle": "Contact Us",
      "contact.addr": "地址",
      "contact.addrV": "XX省XX市XX区XX大学 天文与空间科学学院（示例地址）",
      "contact.email": "邮箱",
      "contact.tel": "电话",
      "contact.map": "地图占位区域\n（可嵌入高德 / 百度 / Google 地图）",
      "footer.brand": "望远镜智能控制实验室",
      "footer.copy": "© 2024 望远镜智能控制实验室 · 保留所有权利",
      "footer.note": "本网站为演示模板，内容请以实验室官方信息为准"
    },
    en: {
      "lang.toggle": "中文",
      "brand.zh": "Telescope Intelligent Control Lab",
      "brand.en": "望远镜智能控制实验室",
      "nav.home": "Home",
      "nav.research": "Research",
      "nav.publications": "Publications",
      "nav.team": "Team",
      "nav.admission": "Admissions",
      "nav.contact": "Contact",
      "home.intro": "The Telescope Intelligent Control Laboratory, led by Prof. Wang Huaiqing, is dedicated to advanced research in intelligent control and automated observation of large-aperture optical telescopes, combining modern control theory, artificial intelligence, and precision mechatronics, and serving national strategic needs in deep-space exploration, astronomical observation, and optoelectronic tracking. Its primary research interests include high-precision servo control, intelligent control algorithms, auto-guiding, and observation automation.",
      "home.newsTitle": "News",
      "home.seeAll": "See all news →",
      "home.affiliations": "Affiliations & Partners",
      "about.f1k": "Established",
      "about.f1v": "2018",
      "about.f2k": "Research Areas",
      "about.f2v": "Intelligent Control · Astronomical Instruments",
      "about.f3k": "Team Members",
      "about.f3v": "20+",
      "about.f4k": "Partners",
      "about.f4v": "10+ Observatories & Universities",
      "research.title": "Research Directions",
      "research.subtitle": "研究方向",
      "research.r1t": "High-Precision Servo Control",
      "research.r1d": "Research on high-precision servo control of telescope mounts, including motor drive, velocity/position loop control, feedforward compensation, and active disturbance rejection control, achieving sub-arcsecond tracking accuracy.",
      "research.r2t": "Intelligent Control Algorithms",
      "research.r2d": "Introducing AI methods such as reinforcement learning, fuzzy control, and neural networks into telescope control for adaptive parameter tuning and suppression of unknown disturbances.",
      "research.r3t": "Astronomical Imaging & Auto-Guiding",
      "research.r3d": "Research on star pattern recognition, target detection and tracking, and auto-guiding techniques to improve imaging quality and long-exposure observation capability.",
      "research.r4t": "Observation Automation & Scheduling",
      "research.r4d": "Developing automatic task planning, intelligent scheduling, and fault self-diagnosis for multi-telescope coordinated observation scenarios to improve efficiency and reliability.",
      "research.r5t": "System Modeling & Simulation",
      "research.r5d": "Building high-fidelity models of telescope electromechanical systems and conducting offline simulation and hardware-in-the-loop validation of control strategies.",
      "research.r6t": "Space Target Optoelectronic Tracking",
      "research.r6d": "For space situational awareness and laser communications, researching fast target acquisition, high-dynamic tracking, and laser link pointing control.",
      "team.title": "Our Team",
      "team.subtitle": "团队成员",
      "team.leaders": "Faculty",
      "team.students": "Master's Students",
      "team.l1n": "Prof. Wang Huaiqing",
      "team.l1r": "Professor · PhD Supervisor",
      "team.l1d": "Research: high-precision servo control and intelligent control for telescopes.",
      "team.l2n": "Assoc. Researcher Xu Lingzhe",
      "team.l2r": "Associate Researcher · Master Supervisor",
      "team.l2d": "Research: intelligent control algorithms and observation automation.",
      "team.l3n": "Assoc. Researcher Hu Tianzhu",
      "team.l3r": "Associate Researcher · Master Supervisor",
      "team.l3d": "Research: astronomical image processing and auto-guiding.",
      "team.l4n": "Engineer Cai Jingyi",
      "team.l4r": "Engineer",
      "team.l4d": "In charge of control system development and engineering support.",
      "team.s1n": "Zhao Yi",
      "team.s2n": "Wei Xunan",
      "team.s3n": "Li Jiajia",
      "team.s4n": "Tong Siqiao",
      "team.s5n": "Tong Zelu",
      "team.studentRole": "Master's Student",
      "team.note": "Note: Please refer to the official lab announcements for detailed member information.",
      "publications.title": "Publications & Achievements",
      "publications.subtitle": "科研成果",
      "publications.stat1": "SCI Papers",
      "publications.stat2": "Invention Patents",
      "publications.stat3": "National Projects",
      "publications.stat4": "Provincial Awards",
      "publications.p1t": "High-precision tracking of telescopes based on active disturbance rejection control",
      "publications.p1a": "Zhang X., Li Y., et al. — Astronomical Journal (sample)",
      "publications.p2t": "Deep reinforcement learning for telescope observation scheduling",
      "publications.p2a": "Li Y., Wang H., et al. — IEEE Transactions on ... (sample)",
      "publications.p3t": "Deep-learning-based star centroiding for auto-guiding",
      "publications.p3a": "Wang H., et al. — Optics Express (sample)",
      "publications.p4t": "Identification and modeling of large-aperture telescope servo systems",
      "publications.p4a": "Zhang X., et al. — Research in Astronomy and Astrophysics (sample)",
      "publications.note": "Note: Sample placeholder papers. Please replace with the real publication list before launch.",
      "news.n1t": "Lab completes on-site commissioning of a telescope control system",
      "news.n2t": "Lab awarded a national key R&D program project",
      "news.n3t": "Lab members present at an international astronomical instrumentation conference",
      "news.n4t": "Lab receives funding from the National Natural Science Foundation",
      "admission.title": "Admissions",
      "admission.subtitle": "招生信息",
      "admission.phd": "PhD Students",
      "admission.phd1": "1–2 positions per year",
      "admission.phd2": "Requirements: control theory and engineering, automation, mechatronics, computer science, or related fields",
      "admission.phd3": "Solid background in mathematics and control theory, with strong interest in astronomical instrumentation",
      "admission.ms": "Master's Students",
      "admission.ms1": "3–4 positions per year",
      "admission.ms2": "Requirements: automation, electronic information, computer science, optoelectronics, or related fields",
      "admission.ms3": "Experience in competitions, innovation projects, and programming preferred",
      "admission.postdoc": "Postdoctoral Researchers",
      "admission.pd1": "Open positions year-round with competitive packages",
      "admission.pd2": "Research aligned with the lab's core directions",
      "admission.pd3": "Full access to research funding and experimental platforms",
      "admission.cta": "We welcome students interested in astronomy, control, and intelligent technologies!",
      "admission.apply": "Send Application Email",
      "contact.title": "Contact Us",
      "contact.subtitle": "联系我们",
      "contact.addr": "Address",
      "contact.addrV": "School of Astronomy & Space Science, XX University, XX City, XX Province (sample)",
      "contact.email": "Email",
      "contact.tel": "Phone",
      "contact.map": "Map placeholder\n(embed Amap / Baidu / Google Maps here)",
      "footer.brand": "Telescope Intelligent Control Laboratory",
      "footer.copy": "© 2024 Telescope Intelligent Control Laboratory · All rights reserved",
      "footer.note": "This is a demo template; please refer to official lab sources for accurate information"
    }
  };

  /* ---------------- 状态 ---------------- */
  let currentLang = localStorage.getItem("ticlab-lang") || "zh";

  /* ---------------- 语言切换 ---------------- */
  function applyLang(lang) {
    const dict = I18N[lang] || I18N.zh;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("en-mode", lang === "en");
    document.body.classList.toggle("zh-mode", lang === "zh");
    document.title = lang === "zh"
      ? "望远镜智能控制实验室 | Telescope Intelligent Control Laboratory"
      : "Telescope Intelligent Control Laboratory | 望远镜智能控制实验室";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = dict["lang.toggle"];

    localStorage.setItem("ticlab-lang", lang);
    currentLang = lang;
  }

  function toggleLang() {
    applyLang(currentLang === "zh" ? "en" : "zh");
  }

  /* ---------------- 导航栏滚动阴影 ---------------- */
  const header = document.getElementById("siteHeader");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- 移动端菜单 ---------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // 点击链接后自动关闭菜单
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- 首页轮播图 ---------------- */
  const carousel = document.getElementById("homeCarousel");

  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    const dots = carousel.querySelectorAll(".carousel-dot");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const total = items.length;
    let current = 0;
    let timer = null;
    const INTERVAL = 4500;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, INTERVAL);
    }
    function stopAuto() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    if (nextBtn) nextBtn.addEventListener("click", function () { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startAuto(); });

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.getAttribute("data-slide"), 10));
        startAuto();
      });
    });

    // 悬停暂停，离开恢复
    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    // 触屏滑动支持
    let touchStartX = 0;
    carousel.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
      stopAuto();
    }, { passive: true });
    carousel.addEventListener("touchend", function (e) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) next(); else prev();
      }
      startAuto();
    }, { passive: true });

    startAuto();
  }

  /* ---------------- 初始化 ---------------- */
  const langToggleBtn = document.getElementById("langToggle");
  if (langToggleBtn) langToggleBtn.addEventListener("click", toggleLang);

  applyLang(currentLang);
})();
