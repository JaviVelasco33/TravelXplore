export function initNavigation() {
    function initHeroSect() {
        const homeSection = document.getElementById("home");
        const heroBg = document.querySelector(".hero-bg");
        if (!homeSection || !heroBg) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Restart anim
                        heroBg.style.animation = "none";
                        // Reflow to restart anim
                        void heroBg.offsetWidth;
                        heroBg.style.animation = "initBG 1s forwards";
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
                            "fadeOut 0.3s ease-in forwards";

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

    initHeroSect();
    initWatcherSect();
    initDestSect();
}
