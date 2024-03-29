export {};
document.addEventListener("DOMContentLoaded", (): void => {
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".testimonial__slide-item"
  );
  let currentSlide: number = 0;

  const showSlide = (index: number): void => {
    slides.forEach((slide: HTMLElement, idx: number): void => {
      slide.style.transform = `translateX(${index * -100}%)`;
    });
    currentSlide = index;
  };

  const leftArrow: HTMLElement | null = document.querySelector(
    ".testimonial__left-arrow"
  );
  const rightArrow: HTMLElement | null = document.querySelector(
    ".testimonial__right-arrow"
  );

  leftArrow?.addEventListener("click", (): void => {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });

  rightArrow?.addEventListener("click", (): void => {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });

  showSlide(0);
});
