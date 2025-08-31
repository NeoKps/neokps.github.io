// Typing effect
var typed = new Typed("#typing", {
  strings: ["QA Automation Engineer", "Senior Test Engineer", "Healthcare EDI Specialist", "Aspiring Business Analyst"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// AOS Animation
AOS.init({
  duration: 1000,
  once: true
});


// Section Active Highlight for Scroll Dots
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".scroll-dots .dot");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200; // adjust offset
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  dots.forEach(dot => {
    dot.classList.remove("active");
    if (dot.dataset.section === current) {
      dot.classList.add("active");
    }
  });
});

// Smooth scroll on dot click
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const target = document.getElementById(dot.dataset.section);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
