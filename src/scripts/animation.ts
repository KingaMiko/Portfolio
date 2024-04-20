export {};
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;

  gsap.from(".hero__text", {
    duration: 1.1,
    x: -200,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero__text",
      start: "top 100%",
      end: "top top",
      toggleActions: "play none none none",
    },
  });
  gsap.from(".hero__image .hero-main-image", {
    duration: 1.1,
    x: 200,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero__image .hero-main-image",
      start: "top 100%",
      end: "top top",
      toggleActions: "play none none none",
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
        start: "top 100%",
        end: "top top",
        toggleActions: "play none none none",
      },
    });
  });
  if (!isMobile) {
    document.querySelectorAll(".work__item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(".reference__head", {
      duration: 1.1,
      x: -100,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".reference__head",
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".testimonial__grid", {
      duration: 1.1,
      y: 150,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".testimonial__grid",
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none none",
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
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none none",
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
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none none",
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
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none none",
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
          start: "top 85%",

          toggleActions: "play pause none none",
        },
      });
    });

    gsap.utils.toArray(".footer__grid > div").forEach((div, index) => {
      const delay = index * 0.2;
      const element = div as Element;

      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }
});
