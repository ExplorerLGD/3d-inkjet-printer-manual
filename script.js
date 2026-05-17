const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const tocLinks = Array.from(document.querySelectorAll(".toc a"));
const sections = Array.from(document.querySelectorAll(".manual-section"));
const searchInput = document.querySelector("#manual-search");

menuToggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

tocLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    tocLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0.1, 0.25, 0.5],
  },
);

sections.forEach((section) => observer.observe(section));

searchInput?.addEventListener("input", (event) => {
  const keyword = event.target.value.trim().toLowerCase();

  sections.forEach((section) => {
    const text = section.textContent.toLowerCase();
    const matched = !keyword || text.includes(keyword);
    section.classList.toggle("is-hidden", !matched);
  });

  tocLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    link.classList.toggle("is-hidden", target?.classList.contains("is-hidden"));
  });
});
