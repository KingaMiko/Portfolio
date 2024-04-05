(() => {
  "use strict";
  var n = {
      189: (n, t, e) => {
        e.d(t, { A: () => l });
        var i = e(601),
          o = e.n(i),
          a = e(314),
          r = e.n(a)()(o());
        r.push([
          n.id,
          '@charset "UTF-8";\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  font-family: sans-serif;\n}\n\nbody {\n  min-height: 100%;\n  color: #333;\n  background-color: #fff;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nul {\n  list-style: none;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-family: "Open Sans", sans-serif;\n  color: #263238;\n}\n\nh1 {\n  font-size: 40px;\n  line-height: 1.3;\n}\n\nh2 {\n  font-size: 35px;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 30px;\n  line-height: 1.4;\n  font-weight: 800;\n}\n\np {\n  margin-bottom: 12px;\n  font-family: "Inter", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #4e4e4e;\n}\n\nimg {\n  max-width: 100%;\n  width: auto;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.button {\n  background-color: #f2f2f2;\n  color: #263238;\n  text-align: center;\n  border-radius: 72px;\n  margin: 10px 10px 10px 0;\n  padding: 28px 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  transition: background-color 0.2s, color 0.2s;\n}\n.button:hover {\n  background-color: #263238;\n  color: #fff;\n}\n\n.w-button {\n  background-color: #3898ec;\n  color: #fff;\n  line-height: inherit;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0;\n  padding: 9px 15px;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.white-button {\n  background-color: white;\n  color: #263238;\n  border: 2px solid #f2f2f2;\n  border-radius: 72px;\n  padding: 18px 18px;\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.5;\n  border: none;\n  transition: border-color 0.2s, background-color 0.2s, color 0.2s;\n}\n.white-button:hover {\n  border-color: #ff8c92;\n  background-color: #ff8c92;\n  color: #fff;\n}\n\n.primary-button {\n  border: 2px solid #263238;\n  background-color: #263238;\n  color: #fff;\n  text-align: center;\n  text-transform: capitalize;\n  border-radius: 72px;\n  margin: 10px 10px 10px 0;\n  padding: 28px 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  transition: background-color 0.2s, color 0.2s;\n}\n.primary-button:hover {\n  color: #263238;\n  background-color: #f2f2f2;\n}\n.primary-button.primary-large-button {\n  padding: 20px 60px;\n}\n\n.header__hero {\n  background-color: #f6f6f6;\n}\n.header.header .nav__button--active {\n  background-color: #ff8c92;\n}\n.header.header .nav__button--active::before {\n  color: white;\n}\n.header__container,\n.header .container {\n  max-width: 96%;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.header__menu-wrap {\n  padding-top: 5px;\n}\n.header .nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header .nav__logo-bar {\n  z-index: 1;\n}\n.header .nav__logo-img {\n  height: 50px;\n  max-width: none;\n}\n.header .nav__menu-bar {\n  display: flex;\n  align-items: center;\n  z-index: 1;\n  visibility: hidden;\n}\n@media (min-width: 768px) {\n  .header .nav__menu-bar {\n    visibility: visible;\n    margin-top: 10px;\n  }\n}\n.header .nav__menu {\n  display: flex;\n  visibility: hidden;\n}\n@media (min-width: 998px) {\n  .header .nav__menu {\n    visibility: visible;\n  }\n}\n.header .nav__link {\n  color: #263238;\n  padding: 20px 15px;\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  transition: color 0.2s;\n  text-decoration: none;\n}\n.header .nav__link:hover {\n  color: #ff8c92;\n}\n.header .nav__button {\n  display: block;\n  visibility: visible;\n  background-color: #fff;\n  border-radius: 10px;\n  margin-right: 20px;\n  margin-bottom: 0px;\n  padding: 25px;\n  position: absolute;\n  top: 18px;\n  right: 0;\n  border: none;\n  cursor: pointer;\n}\n@media (min-width: 998px) {\n  .header .nav__button {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .header .nav__button {\n    right: 180px;\n  }\n}\n.header .nav__button::before {\n  content: "─\\a─\\a─";\n  white-space: pre;\n  color: #ff8c92;\n  font-size: 20px;\n  line-height: 0.2;\n  display: block;\n  margin: 0;\n}\n.header .nav__chat-button {\n  grid-column-gap: 10px;\n  background-color: #fff;\n  border-radius: 72px;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background-color 0.2s, color 0.2s;\n  display: flex;\n}\n.header .nav__chat-button:hover {\n  background-color: rgba(255, 140, 146, 0.21);\n}\n.header .nav__chat-button__text {\n  color: #263238;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.hero__content {\n  margin-top: 10px;\n  flex-direction: column;\n  gap: 30px;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n}\n@media (min-width: 999px) {\n  .hero__content {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.hero__text, .hero__image {\n  z-index: 1;\n  margin: 0 auto;\n  display: inline-block;\n}\n@media (min-width: 999px) {\n  .hero__text, .hero__image {\n    max-width: 90%;\n  }\n}\n.hero__subtitle, .hero__title {\n  font-family: "Open Sans", sans-serif;\n  font-weight: 800;\n}\n.hero__subtitle {\n  font-size: 28px;\n  font-weight: 400;\n}\n.hero__title {\n  margin-bottom: 15px;\n  font-size: 49px;\n  font-weight: 800;\n  line-height: 129.7%;\n}\n.hero__highlight {\n  color: #ff8c92;\n  font-size: 44px;\n  font-weight: 400;\n}\n.hero__icon {\n  font-weight: 400;\n}\n.hero__actions {\n  gap: 3px;\n  flex-direction: column;\n  align-items: flex-start;\n  display: flex;\n}\n@media (min-width: 768px) and (max-width: 999px) {\n  .hero__actions {\n    display: block;\n  }\n}\n.hero__pink-gradient, .hero__green-gradient {\n  position: absolute;\n  border-radius: 100%;\n  filter: blur(180px);\n  bottom: auto;\n  right: auto;\n}\n\n.gradient-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.hero__pink-gradient,\n.hero__green-gradient {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  filter: blur(180px);\n  border-radius: 100%;\n}\n\n.hero__pink-gradient {\n  background-color: rgba(255, 207, 253, 0.5);\n  top: -7%;\n  left: -17%;\n}\n\n.hero__green-gradient {\n  width: 700px;\n  height: 700px;\n  filter: blur(100px);\n  background-image: linear-gradient(1820deg, #dbf8ff 3%, rgba(240, 236, 206, 0));\n  top: 0%;\n  right: 13%;\n}\n\n.hero-left-gradient {\n  position: absolute;\n  top: auto;\n  bottom: 30%;\n  left: 3%;\n  right: auto;\n}\n\n.hero-right-gradient {\n  position: absolute;\n  top: auto;\n  bottom: 5%;\n  left: auto;\n  right: 2%;\n}\n\n.hero-image-right-roll {\n  visibility: hidden;\n}\n@media (min-width: 768px) and (max-width: 998px) {\n  .hero-image-right-roll {\n    visibility: visible;\n    position: absolute;\n    top: 37%;\n    right: 15%;\n  }\n}\n\n.hero-image-left-roll {\n  z-index: 999;\n  position: absolute;\n  top: 45%;\n  bottom: auto;\n  right: 10%;\n}\n@media (min-width: 768px) {\n  .hero-image-left-roll {\n    position: absolute;\n    top: 90%;\n    left: 10%;\n  }\n}\n@media (min-width: 998px) {\n  .hero-image-left-roll {\n    position: absolute;\n    top: 18%;\n    left: 50%;\n  }\n}\n\n.mobile-nav {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  top: 90px;\n  left: 20px;\n  right: 20px;\n  width: 90%;\n  height: auto;\n  background-color: #f3eaeb;\n  z-index: 100;\n  padding: 20px;\n  transform: translateX(-100%);\n  transition: transform 0.4s ease-in;\n}\n.mobile-nav.active {\n  display: block;\n  transform: translateX(0);\n  visibility: visible;\n  opacity: 1;\n}\n@media (min-width: 998px) {\n  .mobile-nav.active {\n    display: none;\n  }\n}\n.mobile-nav__link {\n  color: #263238;\n  padding: 15px 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  transition: color 0.2s;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n}\n.mobile-nav__link:hover {\n  color: #ff8c92;\n}\n\n.about {\n  position: relative;\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n.about__container,\n.about .container {\n  max-width: 96%;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.about__content {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  align-items: center;\n  grid-row-gap: 16px;\n}\n@media (min-width: 768px) {\n  .about__content {\n    grid-column-gap: 16px;\n    grid-template-rows: auto auto;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-columns: 1fr;\n    display: grid;\n  }\n}\n@media (min-width: 998px) {\n  .about__content {\n    grid-template-columns: 1.4fr 1fr 1fr;\n  }\n}\n@media (min-width: 998px) {\n  .about__experience {\n    align-items: flex-start;\n    display: flex;\n    grid-row-gap: 30px;\n    grid-column-gap: 18px;\n  }\n}\n.about__experience__year {\n  color: #ff8c92;\n  font-size: 101px;\n  font-weight: bolder;\n  line-height: 0.9;\n}\n.about__experience__content {\n  -webkit-animation: none;\n          animation: none;\n}\n.about__experience__title {\n  margin-bottom: 15px;\n  font-family: Open Sans, sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n.about__coding {\n  background-color: #f2f6f7;\n  border-radius: 30px;\n  padding: 40px 30px;\n}\n.about__coding__image {\n  width: 100%;\n}\n.about__coding__text {\n  color: #687982;\n  margin-top: 25px;\n  margin-bottom: 0;\n  font-size: 22px;\n  font-weight: 600;\n}\n.about__testing {\n  background-color: #f3eaeb;\n  border-radius: 30px;\n  padding: 40px 30px;\n}\n.about__testing__image {\n  width: 100%;\n}\n.about__testing__text {\n  color: #687982;\n  margin-top: 25px;\n  margin-bottom: 0;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.intro-left-roll {\n  visibility: hidden;\n  position: absolute;\n  top: auto;\n  bottom: 13%;\n  right: auto;\n}\n@media (min-width: 768px) {\n  .intro-left-roll {\n    visibility: visible;\n    right: 10%;\n    bottom: 25%;\n  }\n}\n@media (min-width: 998px) {\n  .intro-left-roll {\n    top: 10%;\n    left: 17%;\n    z-index: -1;\n  }\n}\n\n.work__container,\n.work .container {\n  max-width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.work__more {\n  text-align: center;\n}\n.work__items {\n  padding: 0;\n}\n.work__buttons {\n  display: flex;\n  flex-direction: column;\n  max-width: 70%;\n}\n@media (min-width: 768px) {\n  .work__buttons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 998px) {\n  .work__buttons {\n    grid-template-columns: 1fr 1fr;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n}\n.work__content {\n  background-color: #f5f4f5;\n  border-radius: 30px;\n  padding: 80px 40px 50px;\n}\n.work__content__main {\n  z-index: 2;\n  max-width: 600px;\n  text-align: center;\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n.work__content__image {\n  border-radius: 20px;\n}\n.work__content__title {\n  font-family: Open Sans, sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n}\n.work__content__text {\n  color: #4e4e4e;\n  margin-bottom: 12px;\n  font-family: Inter, sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.work__list {\n  text-align: left;\n  margin-top: 50px;\n}\n.work__item {\n  min-height: auto;\n  background-color: #ece6e7;\n  border-radius: 30px;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 40px;\n  padding: 40px;\n  display: flex;\n  position: relative;\n}\n.work__item-two {\n  background-color: #e0e8ea;\n}\n.work__item-three {\n  background-color: #eee6e1;\n}\n.work__item-four {\n  background-color: #f3eaeb;\n}\n@media (min-width: 998px) {\n  .work__item {\n    padding: 40px;\n    margin-bottom: 60px;\n  }\n}\n.work__item__image {\n  display: none;\n}\n@media (min-width: 998px) {\n  .work__item__image {\n    display: block;\n  }\n}\n.work__item__content-container {\n  z-index: 1;\n}\n@media (min-width: 998px) {\n  .work__item__content-container {\n    display: grid;\n    grid-column-gap: 10px;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n  }\n}\n.work__item__content {\n  width: 100%;\n}\n.work__item__title {\n  font-family: Open Sans, sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n}\n.work__item__about {\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n.work__item__about-technology {\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #687982;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.work-left-gradient {\n  display: none;\n}\n\n.work-right-gradient {\n  display: none;\n}\n\n@media (min-width: 998px) {\n  .work-left-gradient {\n    display: block;\n    position: absolute;\n    top: 8%;\n    left: 40%;\n    right: auto;\n  }\n  .work-right-gradient {\n    display: block;\n    position: absolute;\n    top: auto;\n    bottom: 5%;\n    left: auto;\n    right: 0%;\n  }\n}\n.reference {\n  padding-top: 80px;\n  padding-bottom: 100px;\n  position: relative;\n}\n.reference__container,\n.reference .container {\n  max-width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 991px) {\n  .reference__container,\n.reference .container {\n    max-width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.reference__head {\n  width: 580px;\n  align-items: center;\n  margin-bottom: 50px;\n  display: flex;\n}\n@media (max-width: 991px) {\n  .reference__head {\n    width: 100%;\n  }\n}\n@media (max-width: 479px) {\n  .reference__head {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: 20px;\n  }\n}\n.reference__head__quote {\n  width: 153px;\n  height: 153px;\n  min-height: 153px;\n  min-width: 153px;\n  background-color: #ff8c92;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.reference__head__title {\n  margin-left: 40px;\n  font-size: 32px;\n  font-weight: 700;\n}\n@media (max-width: 479px) {\n  .reference__head__title {\n    margin-left: 0px;\n  }\n}\n\n.w-layout-grid {\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.w-slider-aria-label {\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  margin: -1px;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.w-slider-nav {\n  z-index: 2;\n  height: 40px;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  margin: auto;\n  padding-top: 10px;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.w-slider-arrow-left,\n.w-slider-arrow-right {\n  cursor: pointer;\n  color: #fff;\n  margin: auto;\n  font-size: 40px;\n  position: absolute;\n}\n\n.testimonial__grid {\n  grid-column-gap: 30px;\n  grid-template-rows: auto;\n  grid-template-columns: 0.8fr 1fr;\n  align-items: center;\n}\n@media (max-width: 991px) {\n  .testimonial__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonial__slider-wrap {\n  grid-area: span 1/span 1/span 1/span 1;\n}\n.testimonial__slider {\n  height: auto;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n  clear: both;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative;\n}\n.testimonial__mask {\n  height: auto;\n  z-index: 1;\n  white-space: nowrap;\n  display: block;\n  position: relative;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n.testimonial__slide-item {\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  white-space: normal;\n  text-align: left;\n  display: inline-block;\n  position: relative;\n}\n.testimonial__content {\n  margin-top: 0px;\n  font-family: Inter, sans-serif;\n  font-size: 20px;\n  font-style: italic;\n  font-weight: 400;\n}\n.testimonial__highlight {\n  color: #ff8c92;\n  font-weight: 700;\n}\n.testimonial__client-wrap {\n  padding-top: 10px;\n}\n.testimonial__client-name {\n  margin-bottom: 5px;\n  font-size: 25px;\n  font-weight: 700;\n}\n.testimonial__client-designation {\n  margin-top: 5px;\n  margin-bottom: 30px;\n}\n.testimonial__left-arrow {\n  width: 86px;\n  height: 86px;\n  background-color: #263238;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.2s;\n  display: flex;\n  position: absolute;\n  top: -35%;\n  bottom: auto;\n  left: auto;\n  right: -83%;\n  z-index: 3;\n}\n@media (min-width: 1350px) {\n  .testimonial__left-arrow {\n    top: -60%;\n  }\n}\n@media (max-width: 991px) {\n  .testimonial__left-arrow {\n    top: 60%;\n    bottom: 0%;\n    left: auto;\n    right: 17%;\n  }\n}\n@media (max-width: 768px) {\n  .testimonial__left-arrow {\n    top: 50%;\n    width: 70px;\n    height: 70px;\n    bottom: -23%;\n    right: 25%;\n  }\n}\n@media (max-width: 479px) {\n  .testimonial__left-arrow {\n    top: 50%;\n    bottom: -26%;\n  }\n}\n@media (hover: hover) and (pointer: fine) {\n  .testimonial__left-arrow:hover {\n    background-color: #ff8c92;\n  }\n}\n.testimonial__right-arrow {\n  width: 86px;\n  height: 86px;\n  background-color: #263238;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.2s;\n  display: flex;\n  position: absolute;\n  top: -35%;\n  bottom: auto;\n  left: auto;\n  right: -109%;\n  z-index: 3;\n}\n@media (min-width: 1350px) {\n  .testimonial__right-arrow {\n    top: -60%;\n  }\n}\n@media (max-width: 991px) {\n  .testimonial__right-arrow {\n    top: 60%;\n    bottom: 0%;\n    left: auto;\n    right: 0%;\n  }\n}\n@media (max-width: 768px) {\n  .testimonial__right-arrow {\n    top: 50%;\n    width: 70px;\n    height: 70px;\n    bottom: -23%;\n  }\n}\n@media (max-width: 479px) {\n  .testimonial__right-arrow {\n    top: 50%;\n    bottom: -26%;\n  }\n}\n@media (hover: hover) and (pointer: fine) {\n  .testimonial__right-arrow:hover {\n    background-color: #ff8c92;\n  }\n}\n.testimonial__image-wrap {\n  margin-top: 20px;\n  justify-self: center;\n  position: relative;\n  display: grid;\n  grid-area: span 1/span 1/span 1/span 1;\n  justify-self: center;\n  display: none;\n}\n@media (min-width: 480px) {\n  .testimonial__image-wrap {\n    display: block;\n  }\n}\n\n.client__image-one {\n  position: absolute;\n  top: auto;\n  bottom: 10%;\n  left: 3%;\n  right: auto;\n  width: 120px;\n}\n@media (min-width: 580px) {\n  .client__image-one {\n    width: 143px;\n  }\n}\n@media (min-width: 670px) and (max-width: 991px) {\n  .client__image-one {\n    width: 160px;\n  }\n}\n@media (min-width: 1150px) {\n  .client__image-one {\n    width: 167px;\n  }\n}\n\n.client__image-two {\n  position: absolute;\n  top: -8%;\n  bottom: auto;\n  left: 12%;\n  right: auto;\n  width: 93px;\n}\n@media (min-width: 580px) {\n  .client__image-two {\n    width: 109px;\n  }\n}\n@media (min-width: 670px) and (max-width: 991px) {\n  .client__image-two {\n    width: 120px;\n  }\n}\n@media (min-width: 1150px) {\n  .client__image-two {\n    width: 123px;\n  }\n}\n\n.client__image-three {\n  position: absolute;\n  top: 34%;\n  bottom: 0%;\n  left: 51%;\n  right: auto;\n  width: 89px;\n}\n@media (min-width: 580px) {\n  .client__image-three {\n    width: 105px;\n  }\n}\n@media (min-width: 670px) and (max-width: 991px) {\n  .client__image-three {\n    width: 112px;\n  }\n}\n@media (min-width: 1150px) {\n  .client__image-three {\n    width: 115px;\n  }\n}\n\n.client__image-four {\n  position: absolute;\n  top: 5%;\n  bottom: auto;\n  left: auto;\n  right: 5%;\n  width: 63px;\n}\n@media (min-width: 580px) {\n  .client__image-four {\n    width: 75px;\n  }\n}\n@media (min-width: 670px) and (max-width: 991px) {\n  .client__image-four {\n    width: 83px;\n  }\n}\n@media (min-width: 1150px) {\n  .client__image-four {\n    width: 87px;\n  }\n}\n\n.client__image-five {\n  position: absolute;\n  top: auto;\n  bottom: -10%;\n  left: auto;\n  right: 10%;\n  width: 90px;\n}\n@media (min-width: 580px) {\n  .client__image-five {\n    width: 110px;\n  }\n}\n@media (min-width: 670px) and (max-width: 991px) {\n  .client__image-five {\n    width: 122px;\n  }\n}\n@media (min-width: 1150px) {\n  .client__image-five {\n    width: 123px;\n  }\n}\n\n.client__circle-one {\n  width: 32px;\n  height: 32px;\n  background-color: #fff;\n  border-radius: 100px;\n  position: absolute;\n  top: 33%;\n  bottom: auto;\n  left: 7%;\n  right: auto;\n}\n\n.client__circle-two {\n  width: 32px;\n  height: 32px;\n  background-color: #ff8c92;\n  border-radius: 100%;\n  position: absolute;\n  top: 14%;\n  bottom: auto;\n  left: auto;\n  right: 44%;\n}\n\n.client__circle-three {\n  width: 22px;\n  height: 22px;\n  background-color: #263238;\n  border-radius: 100%;\n  position: absolute;\n  top: 38%;\n  bottom: auto;\n  left: auto;\n  right: 8%;\n}\n\n.client__circle-four {\n  width: 16px;\n  height: 16px;\n  background-color: #263238;\n  border-radius: 100%;\n  position: absolute;\n  top: auto;\n  bottom: 15%;\n  left: 42%;\n  right: auto;\n}\n\n.chat {\n  padding-bottom: 40px;\n}\n@media (min-width: 998px) {\n  .chat {\n    padding-bottom: 80px;\n  }\n}\n.chat__container,\n.chat .container {\n  max-width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.chat__wrap {\n  background-color: #263238;\n  text-align: center;\n  border-radius: 30px;\n  padding: 60px 20px;\n}\n@media (min-width: 998px) {\n  .chat__wrap {\n    padding: 80px 40px;\n  }\n}\n.chat__content {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.chat__title {\n  color: #545d61;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 17px;\n  line-height: 1.4;\n}\n@media (min-width: 479px) {\n  .chat__title {\n    font-size: 22px;\n  }\n}\n@media (min-width: 768px) {\n  .chat__title {\n    font-size: 25px;\n  }\n}\n@media (min-width: 991px) {\n  .chat__title {\n    font-size: 30px;\n  }\n}\n.chat__title__wrap {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 479px) {\n  .chat__title__wrap {\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n  }\n}\n.chat__title--white-text {\n  color: white;\n}\n.chat__title__image {\n  display: none;\n}\n@media (min-width: 768px) {\n  .chat__title__image {\n    display: block;\n  }\n}\n.chat__title.chat__title--highlight {\n  color: #fff;\n  font-size: 17px;\n}\n@media (min-width: 479px) {\n  .chat__title.chat__title--highlight {\n    font-size: 22px;\n  }\n}\n@media (min-width: 768px) {\n  .chat__title.chat__title--highlight {\n    font-size: 25px;\n  }\n}\n@media (min-width: 991px) {\n  .chat__title.chat__title--highlight {\n    font-size: 30px;\n  }\n}\n\n.lets__chat {\n  text-align: center;\n}\n.lets__chat__title-wrap {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.lets__chat__border-wrap {\n  width: auto;\n  height: 1px;\n  background-color: #38474f;\n  flex: 1;\n}\n.lets__chat__content-wrap {\n  flex: 0 auto;\n  margin-left: 20px;\n  margin-right: 20px;\n  display: flex;\n}\n.lets__chat__icon-chat {\n  position: relative;\n  right: 0;\n  top: 20px;\n}\n.lets__chat__title {\n  color: #fff;\n  padding-right: 15px;\n  font-size: 18px;\n}\n.lets__chat__social-wrap {\n  justify-content: center;\n  align-items: baseline;\n  display: flex;\n  padding-bottom: 5px;\n  flex-direction: column;\n}\n@media (min-width: 479px) {\n  .lets__chat__social-wrap {\n    flex-direction: row;\n  }\n}\n.lets__chat__email,\n.lets__chat .lets__chat__tel {\n  color: #fff;\n  margin-bottom: 0;\n  margin-top: 0;\n  margin-right: 10px;\n}\n.lets__chat__link {\n  color: #fff;\n  font-weight: 400;\n  text-decoration: none;\n  cursor: pointer;\n  letter-spacing: 0.01em;\n  font-family: Inter, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n@media (min-width: 479px) {\n  .lets__chat__link {\n    font-size: 18px;\n  }\n}\n.lets__chat__link:hover {\n  color: #ff8c92;\n}\n\n.contact {\n  padding-bottom: 40px;\n  position: relative;\n}\n@media (min-width: 991px) {\n  .contact {\n    padding-bottom: 80px;\n  }\n}\n.contact__container,\n.contact .container {\n  max-width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 991px) {\n  .contact__container,\n.contact .container {\n    max-width: 100%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.contact__wrap {\n  z-index: 3;\n  background-color: #f2f6f7;\n  text-align: center;\n  border-radius: 30px;\n  padding: 90px 20px 110px;\n  position: relative;\n  overflow: hidden;\n}\n.contact__title {\n  z-index: 2;\n  max-width: 600px;\n  text-align: center;\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n.contact__title__text {\n  font-family: Open Sans, sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n}\n@media (min-width: 479px) {\n  .contact__title__text {\n    font-size: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .contact__title__text {\n    font-size: 34px;\n  }\n}\n@media (min-width: 998px) {\n  .contact__title__text {\n    font-size: 40px;\n  }\n}\n.contact__top-right-shape {\n  display: none;\n  z-index: 1;\n  width: 500px;\n  height: 500px;\n  background-image: linear-gradient(78.3deg, #e7eff2 8%, #f2f6f7);\n  border-radius: 100%;\n  position: absolute;\n  top: -41%;\n  bottom: auto;\n  left: auto;\n  right: -11%;\n}\n.contact__bottom-left-shape {\n  display: none;\n  width: 500px;\n  height: 500px;\n  background-image: linear-gradient(72.3deg, #f2f6f7 11%, #e7eff2);\n  border-radius: 100%;\n  position: absolute;\n  top: auto;\n  bottom: -52%;\n  left: -14%;\n  right: auto;\n  z-index: -1;\n}\n.contact__icon {\n  display: none;\n}\n@media (min-width: 479px) {\n  .contact__icon {\n    display: block;\n    z-index: 2;\n    position: absolute;\n    bottom: auto;\n    right: auto;\n    top: 52%;\n    left: 2%;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon {\n    top: 49%;\n    left: 2%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon {\n    top: 35%;\n    left: 5%;\n  }\n}\n@media (min-width: 479px) {\n  .contact__icon.icon-two {\n    top: 1%;\n    left: 4%;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon.icon-two {\n    top: 4%;\n    left: 4%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon.icon-two {\n    top: 6%;\n    left: 10%;\n  }\n}\n@media (min-width: 479px) {\n  .contact__icon.icon-three {\n    top: auto;\n    bottom: 1%;\n    left: 11%;\n    right: auto;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon.icon-three {\n    bottom: 4%;\n    left: 20%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon.icon-three {\n    bottom: 9%;\n    left: 16%;\n  }\n}\n@media (min-width: 479px) {\n  .contact__icon.icon-four {\n    top: auto;\n    left: auto;\n    bottom: 30%;\n    right: 1%;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon.icon-four {\n    bottom: 32%;\n    right: 6%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon.icon-four {\n    bottom: 23%;\n    right: 24%;\n  }\n}\n@media (min-width: 479px) {\n  .contact__icon.icon-five {\n    top: 4%;\n    bottom: auto;\n    left: auto;\n    right: 10%;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon.icon-five {\n    top: 5%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon.icon-five {\n    top: 15%;\n  }\n}\n@media (min-width: 479px) {\n  .contact__icon.icon-six {\n    left: auto;\n    top: auto;\n    bottom: 2%;\n    right: 7%;\n  }\n}\n@media (min-width: 768px) {\n  .contact__icon.icon-six {\n    bottom: 5%;\n    right: 14%;\n  }\n}\n@media (min-width: 998px) {\n  .contact__icon.icon-six {\n    bottom: 10%;\n    right: 6%;\n  }\n}\n\n.contact-form {\n  padding-bottom: 60px;\n  position: relative;\n}\n.contact-form__container,\n.contact-form .container {\n  max-width: 100%;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.contact-form__pattern {\n  display: none;\n}\n@media (min-width: 991px) {\n  .contact-form__pattern {\n    display: block;\n    position: absolute;\n    top: auto;\n    bottom: 15%;\n    left: 8%;\n    right: auto;\n  }\n}\n.contact-form__wrap {\n  background-color: #f3eaeb;\n  border-radius: 30px;\n  padding: 20px 20px 20px;\n  position: relative;\n}\n@media (min-width: 991px) {\n  .contact-form__wrap {\n    padding: 50px 40px 40px;\n  }\n}\n.contact-form__grid {\n  grid-template-columns: 1fr;\n}\n@media (min-width: 991px) {\n  .contact-form__grid {\n    grid-column-gap: 20px;\n    grid-template-rows: auto;\n    grid-template-columns: 0.5fr 1fr;\n    align-items: start;\n  }\n}\n.contact-form__title-wrap {\n  margin-top: 20px;\n  display: grid;\n  grid-area: span 1/span 1/span 1/span 1;\n  text-align: left;\n  margin-left: 0;\n  max-width: 500px;\n}\n.contact-form__right-wrap {\n  background-color: #f3eaeb;\n  border-radius: 30px;\n}\n\n.section-title-text {\n  font-family: Open Sans, sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.w-input,\n.w-select {\n  width: 100%;\n  height: 38px;\n  color: #333;\n  vertical-align: middle;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  padding: 8px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n.form {\n  margin: 0 0 15px;\n}\n.form__input-wrap {\n  display: flex;\n  flex-direction: column;\n  grid-column-gap: 30px;\n  display: flex;\n}\n@media (min-width: 768px) {\n  .form__input-wrap {\n    flex-direction: row;\n    grid-column-gap: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .form__input-area.half-width {\n    width: 48%;\n  }\n}\n.form__input-type {\n  height: 60px;\n  color: #4e4e4e;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px #000;\n  border-bottom: 1px solid #bb9297;\n  margin-bottom: 50px;\n  padding: 12px 12px 18px 0;\n  font-family: Inter, sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  outline: none;\n}\n@media (min-width: 768px) {\n  .form__input-type {\n    font-size: 18;\n  }\n}\n\n.message {\n  font-size: 18px;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  text-align: center;\n  background-color: #ff8c92;\n  color: white;\n}',
          "",
        ]);
        const l = r;
      },
      314: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  i = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  i &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (e += n(t)),
                  i && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, i, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var r = {};
              if (i)
                for (var l = 0; l < this.length; l++) {
                  var d = this[l][0];
                  null != d && (r[d] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var p = [].concat(n[c]);
                (i && r[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  e &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  t.push(p));
              }
            }),
            t
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, i = 0; i < t.length; i++)
            if (t[i].identifier === n) {
              e = i;
              break;
            }
          return e;
        }
        function i(n, i) {
          for (var a = {}, r = [], l = 0; l < n.length; l++) {
            var d = n[l],
              c = i.base ? d[0] + i.base : d[0],
              p = a[c] || 0,
              s = "".concat(c, " ").concat(p);
            a[c] = p + 1;
            var m = e(s),
              h = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== m) t[m].references++, t[m].updater(h);
            else {
              var g = o(h, i);
              (i.byIndex = l),
                t.splice(l, 0, { identifier: s, updater: g, references: 1 });
            }
            r.push(s);
          }
          return r;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = i((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var r = 0; r < a.length; r++) {
              var l = e(a[r]);
              t[l].references--;
            }
            for (var d = i(n, o), c = 0; c < a.length; c++) {
              var p = e(a[c]);
              0 === t[p].references && (t[p].updater(), t.splice(p, 1));
            }
            a = d;
          };
        };
      },
      659: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var i = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(e);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      56: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var i = "";
                e.supports && (i += "@supports (".concat(e.supports, ") {")),
                  e.media && (i += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (i += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (i += e.css),
                  o && (i += "}"),
                  e.media && (i += "}"),
                  e.supports && (i += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(i, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var a = (t[i] = { id: i, exports: {} });
    return n[i](a, a.exports, e), a.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var i in t)
        e.o(t, i) &&
          !e.o(n, i) &&
          Object.defineProperty(n, i, { enumerable: !0, get: t[i] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      var n = e(72),
        t = e.n(n),
        i = e(825),
        o = e.n(i),
        a = e(659),
        r = e.n(a),
        l = e(56),
        d = e.n(l),
        c = e(540),
        p = e.n(c),
        s = e(113),
        m = e.n(s),
        h = e(189),
        g = {};
      (g.styleTagTransform = m()),
        (g.setAttributes = d()),
        (g.insert = r().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = p()),
        t()(h.A, g),
        h.A && h.A.locals && h.A.locals;
      class f {
        constructor(n = 0, t = "Network Error") {
          (this.status = n), (this.text = t);
        }
      }
      const _ = {
          origin: "https://api.emailjs.com",
          blockHeadless: !1,
          storageProvider: (() => {
            if ("undefined" != typeof localStorage)
              return {
                get: (n) => Promise.resolve(localStorage.getItem(n)),
                set: (n, t) => Promise.resolve(localStorage.setItem(n, t)),
                remove: (n) => Promise.resolve(localStorage.removeItem(n)),
              };
          })(),
        },
        x = (n) =>
          n
            ? "string" == typeof n
              ? { publicKey: n }
              : "[object Object]" === n.toString()
                ? n
                : {}
            : {},
        u = async (n, t, e, i) => {
          const o = x(i),
            a = o.publicKey || _.publicKey,
            r = o.blockHeadless || _.blockHeadless,
            l = _.storageProvider || o.storageProvider,
            d = { ..._.blockList, ...o.blockList },
            c = { ..._.limitRate, ...o.limitRate };
          if (
            r &&
            ((n) => n.webdriver || !n.languages || 0 === n.languages.length)(
              navigator
            )
          )
            return Promise.reject(
              new f(451, "Unavailable For Headless Browser")
            );
          const p = ((n) =>
            "string" == typeof n ? document.querySelector(n) : n)(e);
          ((n, t, e) => {
            if (!n || "string" != typeof n)
              throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
            if (!t || "string" != typeof t)
              throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
            if (!e || "string" != typeof e)
              throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          })(a, n, t),
            ((n) => {
              if (!n || "FORM" !== n.nodeName)
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
            })(p);
          const s = new FormData(p);
          return ((n, t) => {
            if (((n) => !n.list?.length || !n.watchVariable)(n)) return !1;
            ((n, t) => {
              if (!Array.isArray(n))
                throw "The BlockList list has to be an array";
              if ("string" != typeof t)
                throw "The BlockList watchVariable has to be a string";
            })(n.list, n.watchVariable);
            const e =
              ((i = t),
              (o = n.watchVariable),
              i instanceof FormData ? i.get(o) : i[o]);
            var i, o;
            return "string" == typeof e && n.list.includes(e);
          })(d, s)
            ? Promise.reject(new f(403, "Forbidden"))
            : (await (async (n, t, e) => {
                  if (!t.throttle || !e) return !1;
                  ((n, t) => {
                    if ("number" != typeof n || n < 0)
                      throw "The LimitRate throttle has to be a positive number";
                    if (t && "string" != typeof t)
                      throw "The LimitRate ID has to be a string";
                  })(t.throttle, t.id);
                  const i = t.id || n,
                    o = await (async (n, t, e) => {
                      const i = Number((await e.get(n)) || 0);
                      return t - Date.now() + i;
                    })(i, t.throttle, e);
                  return o > 0 || (await e.set(i, Date.now().toString()), !1);
                })(location.pathname, c, l))
              ? Promise.reject(new f(429, "Too Many Requests"))
              : (s.append("lib_version", "4.3.3"),
                s.append("service_id", n),
                s.append("template_id", t),
                s.append("user_id", a),
                (async (n, t, e = {}) => {
                  const i = await fetch(_.origin + n, {
                      method: "POST",
                      headers: e,
                      body: t,
                    }),
                    o = await i.text(),
                    a = new f(i.status, o);
                  if (i.ok) return a;
                  throw a;
                })("/api/v1.0/email/send-form", s));
        };
      window.onload = () => {
        ((n, t = "https://api.emailjs.com") => {
          if (!n) return;
          const e = x(n);
          (_.publicKey = e.publicKey),
            (_.blockHeadless = e.blockHeadless),
            (_.storageProvider = e.storageProvider),
            (_.blockList = e.blockList),
            (_.limitRate = e.limitRate),
            (_.origin = e.origin || t);
        })("7MzvNmdzIcgWarKne");
        const n = document.querySelector('input[type="button"]');
        null == n || n.addEventListener("click", b);
      };
      const b = () => {
        const n = document.getElementById("email-form"),
          t = document.querySelector('input[type="button"]'),
          e = document.querySelector(".contact-form__right-wrap");
        if (t && n && e) {
          const i = t.value;
          (t.value = t.getAttribute("data-wait") || "Please wait..."),
            u("service_5wd6svt", "template_fa309b7", n).then(
              () => {
                console.log("SUCCESS!"),
                  (n.style.display = "none"),
                  (t.value = i),
                  e.querySelectorAll(".message").forEach((n) => n.remove());
                const o = document.createElement("div");
                (o.className = "message"),
                  (o.textContent =
                    "Thank you! Your submission has been received!"),
                  e.appendChild(o);
              },
              (n) => {
                console.log("FAILED...", n),
                  (t.value = i),
                  e.querySelectorAll(".message").forEach((n) => n.remove());
                const o = document.createElement("div");
                (o.className = "message"),
                  (o.textContent =
                    "Oops! Something went wrong while submitting the form."),
                  e.appendChild(o);
              }
            );
        }
      };
      document.addEventListener("DOMContentLoaded", () => {
        const n = document.querySelectorAll(
          ".client__image-one, .client__image-two, .client__image-three, .client__image-four, .client__image-five"
        );
        let t = 0;
        const e = n.length;
        let i = 1,
          o = 1;
        setInterval(() => {
          i >= 1.1 ? (o = -1) : i <= 1 && ((o = 1), (t = (t + 1) % e)),
            (i += 0.005 * o),
            n.forEach((n) => {
              n.style.transform =
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
            }),
            n[t] &&
              (n[t].style.transform =
                `translate3d(0px, 0px, 0px) scale3d(${i}, ${i}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`);
        }, 40);
      }),
        document.addEventListener("DOMContentLoaded", () => {
          const n = document.querySelector(".nav__button"),
            t = document.querySelector(".mobile-nav");
          null == n ||
            n.addEventListener("click", () => {
              null == t || t.classList.toggle("active"),
                null == n || n.classList.toggle("nav__button--active");
            }),
            null == t ||
              t.addEventListener("click", (e) => {
                e.target.classList.contains("mobile-nav__link") &&
                  (t.classList.remove("active"),
                  null == n || n.classList.remove("nav__button--active"));
              }),
            document.addEventListener("click", (e) => {
              !t ||
                t.contains(e.target) ||
                (null == n ? void 0 : n.contains(e.target)) ||
                (t.classList.remove("active"),
                null == n || n.classList.remove("nav__button--active"));
            });
        }),
        document.addEventListener("DOMContentLoaded", () => {
          document.querySelectorAll('a[href^="#"]').forEach((n) => {
            n.addEventListener("click", (n) => {
              n.preventDefault();
              const t = n.currentTarget.getAttribute("href");
              t &&
                (function (n, t) {
                  const e = document.querySelector(n);
                  if (!e) return void console.warn(`Element ${n} not found.`);
                  const i = e.getBoundingClientRect().top,
                    o = window.pageYOffset,
                    a = i;
                  let r = null;
                  requestAnimationFrame(function n(t) {
                    null === r && (r = t);
                    const e = t - r,
                      i =
                        ((l = e),
                        (d = o),
                        (c = a),
                        (l /= 500) < 1
                          ? (c / 2) * l * l + d
                          : (-c / 2) * (--l * (l - 2) - 1) + d);
                    var l, d, c;
                    window.scrollTo(0, i), e < 1e3 && requestAnimationFrame(n);
                  });
                })(t);
            });
          });
        }),
        document.addEventListener("DOMContentLoaded", () => {
          const n = document.querySelectorAll(".testimonial__slide-item");
          let t = 0;
          const e = (e) => {
              n.forEach((n, t) => {
                n.style.transform = `translateX(${-100 * e}%)`;
              }),
                (t = e);
            },
            i = document.querySelector(".testimonial__left-arrow"),
            o = document.querySelector(".testimonial__right-arrow");
          null == i ||
            i.addEventListener("click", () => {
              (t = t - 1 < 0 ? n.length - 1 : t - 1), e(t);
            }),
            null == o ||
              o.addEventListener("click", () => {
                (t = t + 1 >= n.length ? 0 : t + 1), e(t);
              }),
            e(0);
        });
    })();
})();
