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
      toggleActions: "play none none reset",
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
      toggleActions: "play none none reset",
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
        toggleActions: "play none none reset",
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
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".about__experience__content",
      { y: -150, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 0.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__experience__content",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

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
          start: "top 65%",
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
          start: "top 65%",
          toggleActions: "play none none reset",
        },
      }
    );
  });
  document.querySelectorAll(".work__item").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: index % 2 === 0 ? -300 : 300,
      duration: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play none none reset",
      },
    });
  });

  gsap.from(".reference__head", {
    duration: 1.1,
    x: -200,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".reference__head",
      start: "top 75%",
      toggleActions: "play none none reset",
    },
  });
  gsap.from(".testimonial__grid", {
    duration: 1.1,
    y: 200,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".reference__head",
      start: "top 75%",
      toggleActions: "play none none reset",
    },
  });
  gsap.fromTo(
    ".chat__wrap",
    { y: 150, opacity: 0 },
    {
      duration: 1.1,
      y: 0,
      opacity: 1,

      ease: "power1.out",
      scrollTrigger: {
        trigger: ".chat__wrap",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    }
  );

  gsap.fromTo(
    ".contact__wrap",
    { y: 150, opacity: 0 },
    {
      duration: 1.1,
      y: 0,
      opacity: 1,

      ease: "power1.out",
      scrollTrigger: {
        trigger: ".contact__wrap",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    }
  );

  gsap.fromTo(
    ".contact-form__wrap",
    { y: 150, opacity: 0 },
    {
      duration: 1.1,
      y: 0,
      opacity: 1,

      ease: "power1.out",
      scrollTrigger: {
        trigger: ".contact-form__wrap",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    }
  );

  gsap.utils.toArray(".lets__chat__social-wrap").forEach((wrap, index) => {
    const delay = index * 0.1;

    gsap.from(wrap as Element, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power1.out",
      delay: delay,
      scrollTrigger: {
        trigger: wrap as Element,
        start: "top 100%",
        end: "none",
        toggleActions: "play pause none reset",
      },
    });
  });

  gsap.utils.toArray(".footer__grid > div").forEach((div, index) => {
    const delay = index * 0.2;
    const element = div as Element;

    gsap.fromTo(
      element,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      }
    );
  });
});