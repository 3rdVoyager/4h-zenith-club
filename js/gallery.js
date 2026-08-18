const DEFAULT_AUTOPLAY_MS = 5000;

function initGallery(gallery, galleryIndex) {
  const track = gallery.querySelector(".gallery__track");
  const slides = [...gallery.querySelectorAll(".gallery__slide")];
  if (!track || slides.length === 0) return;

  const nav = gallery.querySelector(".gallery-thumbnails, .gallery-dots");
  const isThumbnails = nav?.classList.contains("gallery-thumbnails");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const autoplayMs = Number.parseInt(gallery.dataset.autoplay, 10);
  const shouldAutoplay =
    !prefersReducedMotion &&
    !Number.isNaN(autoplayMs) &&
    autoplayMs > 0 &&
    slides.length > 1;

  let current = slides.findIndex((slide) =>
    slide.classList.contains("is-active"),
  );
  if (current < 0) current = 0;

  slides.forEach((slide, index) => {
    slide.id =
      slide.id || `gallery-${galleryIndex}-slide-${index}`;
    slide.classList.toggle("is-active", index === current);
  });

  const tabs = [];

  if (nav) {
    if (nav.children.length === 0) {
      slides.forEach((slide, index) => {
        const item = document.createElement("li");
        item.setAttribute("role", "presentation");

        const tab = document.createElement("button");
        tab.type = "button";
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", slide.id);

        if (isThumbnails) {
          const slideImage = slide.querySelector("img");
          if (slideImage) {
            const thumb = document.createElement("img");
            thumb.src = slideImage.currentSrc || slideImage.src;
            thumb.alt = "";
            tab.appendChild(thumb);
          }
        } else {
          tab.setAttribute(
            "aria-label",
            `Slide ${index + 1} of ${slides.length}`,
          );
        }

        item.appendChild(tab);
        nav.appendChild(item);
      });
    }

    nav.setAttribute("role", "tablist");
    if (!nav.getAttribute("aria-label")) {
      nav.setAttribute("aria-label", "Gallery navigation");
    }

    tabs.push(...nav.querySelectorAll('[role="tab"]'));
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => goTo(index));
    });
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      if ("inert" in slide) {
        slide.inert = !active;
      }
    });

    tabs.forEach((tab, tabIndex) => {
      tab.setAttribute("aria-selected", String(tabIndex === current));
    });
  }

  function next() {
    goTo(current + 1);
  }

  let autoplayTimer;

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = undefined;
    }
  }

  function startAutoplay() {
    if (!shouldAutoplay) return;
    stopAutoplay();
    autoplayTimer = window.setInterval(next, autoplayMs);
  }

  goTo(current);
  startAutoplay();

  gallery.addEventListener("mouseenter", stopAutoplay);
  gallery.addEventListener("mouseleave", startAutoplay);
  gallery.addEventListener("focusin", stopAutoplay);
  gallery.addEventListener("focusout", (event) => {
    if (!gallery.contains(event.relatedTarget)) {
      startAutoplay();
    }
  });
}

document.querySelectorAll(".gallery").forEach((gallery, index) => {
  initGallery(gallery, index);
});
