document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("hamburger-toggle");
  const nav = document.getElementById("navLinks");

  if (window.innerWidth < 768) {
    nav.classList.add("hidden-nav");
  }

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open-nav");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.checked = false;
      nav.classList.remove("open-nav");
    });
  });
});
