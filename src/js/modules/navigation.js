export function initNavigation() {
    function initHeroSect() {
        const homeSection = document.getElementById("home");
        const heroBg = document.querySelector(".hero-bg");
        const heroContent = document.querySelector(".hero-content");
        if (!homeSection || !heroBg || !heroContent) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        heroBg.style.animation = "none";
                        void heroBg.offsetWidth;
                        heroBg.style.animation = "initBG-hero 1s forwards";

                        heroContent.style.animation = "none";
                        void heroContent.offsetWidth;
                        heroContent.style.animation = "fadeInUp 2s forwards";
                    } else {
                        heroBg.style.animation = "none";
                        heroContent.style.animation = "none";
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(homeSection);
    }

    function initWatcherSect() {
        const wactherSection = document.getElementById("watcher");
        const wactherContainer = document.querySelector(".watcher-container");
        if (!wactherSection || !wactherContainer) return;

        wactherSection.classList.remove("watcher-initAnim");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        wactherSection.classList.add("watcher-initAnim");
                        wactherContainer.style.animation = "none";
                        void wactherContainer.offsetWidth;
                        wactherContainer.style.animation =
                            "fadeIn 1.5s ease-in forwards ";
                    } else {
                        wactherSection.classList.remove("watcher-initAnim");
                        wactherContainer.style.animation = "none";
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(wactherSection);
    }

    function initDestSect() {
        const destSection = document.getElementById("destinations");
        const destsCards1_4 = document.querySelectorAll(
            ".dest-card-1, .dest-card-4"
        );
        const destsCards2_5 = document.querySelectorAll(
            ".dest-card-2, .dest-card-5"
        );
        const destsCards3_6 = document.querySelectorAll(
            ".dest-card-3, .dest-card-6"
        );
        if (!destSection || !destsCards1_4 || !destsCards2_5 || !destsCards3_6)
            return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    destSection.style.animation = "fadeIn 1s ease-in forwards";
                    if (entry.isIntersecting) {
                        destsCards1_4.forEach((card) => {
                            card.style.animation = "none";
                            void card.offsetWidth;
                            card.style.animation =
                                "fadeInLeft 1s ease-in forwards";
                        });
                        destsCards2_5.forEach((card) => {
                            card.style.animation = "none";
                            void card.offsetWidth;
                            card.style.animation =
                                "fadeInUp 1s ease-in forwards";
                        });
                        destsCards3_6.forEach((card) => {
                            card.style.animation = "none";
                            void card.offsetWidth;
                            card.style.animation =
                                "fadeInRight 1s ease-in forwards";
                        });
                    } else {
                        destSection.style.animation =
                            "fadeOut 0.5s ease-in forwards";

                        destsCards1_4.forEach((card) => {
                            card.style.animation = "none";
                        });
                        destsCards2_5.forEach((card) => {
                            card.style.animation = "none";
                        });
                        destsCards3_6.forEach((card) => {
                            card.style.animation = "none";
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(destSection);
    }

    function initExpSect() {
        const expSection = document.getElementById("experiences");
        const expTab = document.querySelector(".exp-tabs");
        const expContent = document.querySelector(".exp-contents");
        if (!expSection || !expTab || !expContent) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        expTab.classList.add("exp-initAnim");
                        expContent.style.animation = "none";
                        void expContent.offsetWidth;
                        expContent.style.animation =
                            "fadeIn 1s ease-in forwards";
                    } else {
                        expTab.classList.remove("exp-initAnim");
                        expContent.style.animation =
                            "fadeOut 0.3s ease-in forwards";
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(expSection);
    }

    function initTestSect() {
        const testSection = document.getElementById("testimonials");
        const testCarousel = document.querySelector(".test-carousel");
        const testTexts = document.querySelectorAll(".test-texts");
        if (!testSection || !testCarousel || !testTexts) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        testCarousel.style.animation = "none";
                        void testCarousel.offsetWidth;
                        testCarousel.style.animation =
                            "fadeInRight 0.7s ease-in-out forwards";
                        testTexts.forEach((text) => {
                            text.style.animation = "none";
                            void text.offsetWidth;
                            text.style.animation =
                                "fadeInLeft 1.5s ease-in-out forwards";
                        });
                    } else {
                        testCarousel.style.animation = "none";
                        void testCarousel.offsetWidth;
                        testCarousel.style.animation =
                            "fadeInRight 0.5s ease-in-out forwards";
                            testCarousel.style.animationDirection = "reverse";
                        testTexts.forEach((text) => {
                            text.style.animation = "none";
                            void text.offsetWidth;
                            text.style.animation =
                                "fadeInLeft 1s ease-in-out forwards";
                            text.style.animationDirection = "reverse";
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(testSection);
    }

    function initContactSect() {
        const contactSec = document.getElementById("contact");
        const contactBg = document.querySelector(".contact-bg");
        const contactForm = document.querySelector(".contact-form");
        const contactInfo = document.querySelector(".contact-info");
        if (!contactSec || !contactBg || !contactForm || !contactInfo) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        contactBg.style.animation = "none";
                        void contactBg.offsetWidth;
                        contactBg.style.animation =
                            "initBG-contact 2.5s forwards";

                        contactForm.style.animation = "none";
                        void contactForm.offsetWidth;
                        contactForm.style.animation =
                            "fadeInLeft 1s ease-in forwards";

                        contactInfo.style.animation = "none";
                        void contactInfo.offsetWidth;
                        contactInfo.style.animation =
                            "fadeInRight 1s ease-in forwards";
                    } else {
                        contactBg.style.animation = "none";
                        void contactBg.offsetWidth;
                        contactBg.style.animation = "initBG-contact 2.5s forwards";
                        contactBg.style.animationDirection = "reverse";

                        contactForm.style.animation = "none";
                        void contactForm.offsetWidth;
                        contactForm.style.animation = "fadeInLeft 1s ease-in forwards";
                        contactForm.style.animationDirection = "reverse";

                        contactInfo.style.animation = "none";
                        void contactInfo.offsetWidth;
                        contactInfo.style.animation = "fadeInRight 1s ease-in forwards";
                        contactInfo.style.animationDirection = "reverse";
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(contactSec);
    }

    function initFooterSect() {
        const footer = document.querySelector("footer");
        const footerCont = document.querySelector(".footer-container");
        if (!footer || !footerCont) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        footerCont.style.animation = "fadeIn 1s ease-in forwards";
                    } else {
                        footerCont.style.animation = "none";
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(footer);
    }

    initHeroSect();
    initWatcherSect();
    initDestSect();
    initExpSect();
    initTestSect();
    initContactSect();
    initFooterSect();
}
