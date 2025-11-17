// Mobile navigation toggle
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
    navToggle.classList.toggle("nav__toggle--open");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav__links--open");
      navToggle.classList.remove("nav__toggle--open");
    });
  });
}

// Scroll reveal for .reveal sections
const revealSections = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealSections.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealSections.forEach((section) => observer.observe(section));
} else {
  // Fallback for older browsers
  revealSections.forEach((section) => section.classList.add("show"));
}
