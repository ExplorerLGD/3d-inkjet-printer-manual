const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".doc-sidebar");
const navLinks = Array.from(document.querySelectorAll(".doc-nav a, .page-toc a"));
const headings = Array.from(document.querySelectorAll(".doc-article h1[id], .doc-article h2[id]"));

function closeSidebar() {
  sidebar?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

const observer = new IntersectionObserver(
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

headings.forEach((heading) => observer.observe(heading));
