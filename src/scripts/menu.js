document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".nav__button");
  const mobileNav = document.querySelector(".mobile-nav");
  mobileMenuButton === null || mobileMenuButton === void 0
    ? void 0
    : mobileMenuButton.addEventListener("click", () => {
        mobileNav === null || mobileNav === void 0
          ? void 0
          : mobileNav.classList.toggle("active");
        mobileMenuButton === null || mobileMenuButton === void 0
          ? void 0
          : mobileMenuButton.classList.toggle("nav__button--active");
      });
  const handleClickOutside = (event) => {
    if (
      mobileNav &&
      !mobileNav.contains(event.target) &&
      !(mobileMenuButton === null || mobileMenuButton === void 0
        ? void 0
        : mobileMenuButton.contains(event.target))
    ) {
      mobileNav.classList.remove("active");
      mobileMenuButton === null || mobileMenuButton === void 0
        ? void 0
        : mobileMenuButton.classList.remove("nav__button--active");
    }
  };
  mobileNav === null || mobileNav === void 0
    ? void 0
    : mobileNav.addEventListener("click", (event) => {
        if (event.target.classList.contains("mobile-nav__link")) {
          mobileNav.classList.remove("active");
          mobileMenuButton === null || mobileMenuButton === void 0
            ? void 0
            : mobileMenuButton.classList.remove("nav__button--active");
        }
      });
  document.addEventListener("click", handleClickOutside);
});

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      smoothScroll(href, 1000);
    });
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href");
//       const targetElement = document.querySelector(targetId);

//       targetElement.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   });
// });
export {};
