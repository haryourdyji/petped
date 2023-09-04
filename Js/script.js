const NavbtnEl = document.querySelector(".btn-mobile-nav");
const headinEl = document.querySelector(".heading");
const MainnavEl = document.querySelector(".main-nav-link");

NavbtnEl.addEventListener("click", function () {
  headinEl.classList.toggle("nav-open");
});

const headingEl = document.querySelector(".heading");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    // if (ent.isIntersecting === false) {
    //   document.body.classList.add("sticky");
    // }

    if (ent.isIntersecting === true) {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headingEl);

// Smooth animation scroll behaviour

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scrolling back to the top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other link
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
