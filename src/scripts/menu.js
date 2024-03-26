document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelector(".nav__button");
    const mobileNav = document.querySelector(".mobile-nav");
    mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.addEventListener("click", () => {
        mobileNav === null || mobileNav === void 0 ? void 0 : mobileNav.classList.toggle("active");
        mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.classList.toggle("nav__button--active");
    });
    const handleClickOutside = (event) => {
        if (mobileNav &&
            !mobileNav.contains(event.target) &&
            !(mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.contains(event.target))) {
            mobileNav.classList.remove("active");
            mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.classList.remove("nav__button--active");
        }
    };
    mobileNav === null || mobileNav === void 0 ? void 0 : mobileNav.addEventListener("click", (event) => {
        if (event.target.classList.contains("mobile-nav__link")) {
            mobileNav.classList.remove("active");
            mobileMenuButton === null || mobileMenuButton === void 0 ? void 0 : mobileMenuButton.classList.remove("nav__button--active");
        }
    });
    document.addEventListener("click", handleClickOutside);
});
export {};
