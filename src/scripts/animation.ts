export {};
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero__text", {
    duration: 1.1,
    x: -300,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero__text",
      start: "top 75%",
    },
  });
  gsap.from(".hero__image .hero-main-image", {
    duration: 1.1,
    x: 200,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero__image .hero-main-image",
      start: "top 75%",
    },
  });

  ["hero-left-gradient", "hero-right-gradient"].forEach((className) => {
    gsap.from(`.${className}`, {
      duration: 1,
      scale: 0.5,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: `.${className}`,
        start: "top 75%",
      },
    });
    gsap.fromTo(
      ".about__experience__year",
      { y: -150, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__experience__year",
          start: "top 75%%",

          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".about__experience__content",
      { y: -150, opacity: 0 }, // Początkowe wartości
      {
        duration: 1,
        y: 0,
        opacity: 1, // Końcowe wartości
        delay: 0.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__experience__content",
          start: "top 75%",

          toggleActions: "play none none reset",
        },
      }
    );

    // Dla obrazów i innych elementów
    gsap.fromTo(
      ".about__coding",
      { y: -150, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 0.4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__coding",
          start: "top 75%",

          toggleActions: "play none none reset",
        },
      }
    );
    gsap.fromTo(
      ".about__testing",
      { y: -150, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__testing",
          start: "top 75%",

          toggleActions: "play none none reset",
        },
      }
    );
  });
});
