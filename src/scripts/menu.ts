export {};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton: HTMLElement | null =
    document.querySelector(".nav__button");
  const mobileNav: HTMLElement | null = document.querySelector(".mobile-nav");

  const toggleMobileMenu = (): void => {
    mobileNav?.classList.toggle("active");
    mobileMenuButton?.classList.toggle("nav__button--active");
    if (mobileNav?.classList.contains("active")) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      !mobileNav?.contains(event.target as Node) &&
      !mobileMenuButton?.contains(event.target as Node)
    ) {
      mobileNav?.classList.remove("active");
      mobileMenuButton?.classList.remove("nav__button--active");

      document.removeEventListener("click", handleClickOutside);
    }
  };

  mobileMenuButton?.addEventListener("click", toggleMobileMenu);

  mobileNav?.addEventListener("click", (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("mobile-nav__link")) {
      mobileNav.classList.remove("active");
      mobileMenuButton?.classList.remove("nav__button--active");

      document.removeEventListener("click", handleClickOutside);
    }
  });
});

function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

function smoothScroll(target: string, duration: number): void {
  const targetElement = document.querySelector(target) as HTMLElement;
  if (!targetElement) {
    console.warn(`Element ${target} not found.`);
    return;
  }
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
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
    link.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const href = target.getAttribute("href");
      if (href) smoothScroll(href, 100);
    });
  });
});

const mybutton = document.querySelector(".back-to-top") as HTMLElement | null;
if (mybutton) {
  mybutton.addEventListener("click", topFunction);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction(): void {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (mybutton) {
    mybutton.style.display = scrollTop > 20 ? "block" : "none";
  }
}

function topFunction(): void {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollFunction);
