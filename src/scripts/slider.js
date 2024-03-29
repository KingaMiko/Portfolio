document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".testimonial__slide-item");
  let currentSlide = 0;
  const showSlide = (index) => {
    slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${index * -100}%)`;
    });
    currentSlide = index;
  };
  const leftArrow = document.querySelector(".testimonial__left-arrow");
  const rightArrow = document.querySelector(".testimonial__right-arrow");
  leftArrow === null || leftArrow === void 0
    ? void 0
    : leftArrow.addEventListener("click", () => {
        currentSlide =
          currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
      });
  rightArrow === null || rightArrow === void 0
    ? void 0
    : rightArrow.addEventListener("click", () => {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showSlide(currentSlide);
      });
  showSlide(0);
});
export {};
