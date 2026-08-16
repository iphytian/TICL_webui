/*
  语言切换（中文 ⇄ English）：
  - 默认中文；.en 内容隐藏，html[lang="en"] 时显示英文、隐藏中文
  - 点击 [data-i18n-toggle] 按钮切换，选择保存在 localStorage
*/

{
  const KEY = "site-lang";
  const ZH_TITLE = "望远镜智能控制实验室";
  const EN_TITLE = "Telescope Intelligent Control Laboratory";

  // 页面渲染前立即应用已保存的语言，避免闪烁
  const saved = (() => {
    try {
      return window.localStorage.getItem(KEY) || "zh";
    } catch (e) {
      return "zh";
    }
  })();

  document.documentElement.lang = saved;

  const apply = (lang) => {
    document.documentElement.lang = lang;

    for (const button of document.querySelectorAll("[data-i18n-toggle]")) {
      button.textContent = lang === "zh" ? "EN" : "中";
      button.setAttribute(
        "aria-label",
        lang === "zh" ? "Switch to English" : "切换到中文"
      );
    }

    // 切换浏览器标签页标题中的站名
    if (lang === "en" && document.title.includes(ZH_TITLE)) {
      document.title = document.title.split(ZH_TITLE).join(EN_TITLE);
    } else if (lang === "zh" && document.title.includes(EN_TITLE)) {
      document.title = document.title.split(EN_TITLE).join(ZH_TITLE);
    }
  };

  // 尽早应用（head 阶段，按钮尚未渲染，只处理标题）
  apply(saved);

  const onLoad = () => {
    apply(saved);

    for (const button of document.querySelectorAll("[data-i18n-toggle]")) {
      button.addEventListener("click", () => {
        const next = document.documentElement.lang === "zh" ? "en" : "zh";
        try {
          window.localStorage.setItem(KEY, next);
        } catch (e) {}
        apply(next);
      });
    }
  };

  window.addEventListener("load", onLoad);
}
