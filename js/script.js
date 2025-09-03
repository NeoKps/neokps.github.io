document.addEventListener("DOMContentLoaded", () => {
  // --- Initialize Libraries ---
  if (typeof Typed !== "undefined") {
    new Typed("#typing", {
      strings: [
        "QA Automation Engineer",
        "Senior Test Engineer",
        "Healthcare EDI Specialist",
        "Aspiring Business Analyst",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }

  // --- Element Selections ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");
  const backToTopButton = document.getElementById("back-to-top");
  const navbar = document.getElementById("navbar");
  const navHeight = navbar.offsetHeight;

  // --- Active Link Highlighting on Scroll ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${sectionId}`
            );
          });
        }
      });
    },
    {
      rootMargin: `-${navHeight}px 0px 0px 0px`,
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // --- Smooth Scrolling with Navbar Offset ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (navMenu.classList.contains("show")) {
          navMenu.classList.remove("show");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // --- Mobile Menu Toggle ---
  menuToggle.addEventListener("click", () => {
    const isExpanded = navMenu.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isExpanded);
  });

  // --- Back to Top Button ---
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
});
