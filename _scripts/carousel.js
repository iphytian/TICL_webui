/*
  simple auto-rotating carousel with prev/next controls
*/

{
  const onLoad = () => {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const slides = carousel.querySelectorAll(".carousel-slide");
      if (!track || slides.length === 0) return;

      let index = 0;
      const go = (i) => {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
      };

      carousel.querySelector(".carousel-prev")?.addEventListener("click", () => go(index - 1));
      carousel.querySelector(".carousel-next")?.addEventListener("click", () => go(index + 1));

      setInterval(() => go(index + 1), 4000);
    });
  };

  window.addEventListener("load", onLoad);
}
