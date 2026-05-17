const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".doc-sidebar");
const languageButtons = Array.from(document.querySelectorAll(".language-button"));
const navLinks = Array.from(document.querySelectorAll(".doc-nav a, .page-toc a"));
const sections = Array.from(document.querySelectorAll(".doc-article h1[id], .doc-article h2[id]"));

function applyLanguage(lang) {
  const suffix = lang === "en" ? "en" : "zh";
  const fallback = suffix === "en" ? "zh" : "en";

  document.documentElement.lang = suffix === "zh" ? "zh-CN" : "en";
  document.title = document.body.dataset[`title${suffix[0].toUpperCase()}${suffix.slice(1)}`] || document.title;

  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    const text = element.dataset[suffix] || element.dataset[fallback];
    if (!text) {
      return;
    }

    if (element.hasAttribute("aria-label")) {
      element.setAttribute("aria-label", text);
    }

    if (element.dataset.lang === undefined && element.dataset.ariaOnly === undefined) {
      element.textContent = text;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === suffix);
  });

  localStorage.setItem("manualLanguage", suffix);
}

function closeSidebar() {
  sidebar?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -70% 0px",
    threshold: [0.1, 0.25, 0.5],
  },
);

sections.forEach((section) => sectionObserver.observe(section));

applyLanguage(localStorage.getItem("manualLanguage") || "zh");
