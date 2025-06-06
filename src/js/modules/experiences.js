export function initExperiences() {
    const tabs = document.querySelectorAll('.exp-tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selected = tab.getAttribute('data-tab');

            tabs.forEach((btn) => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            contents.forEach((content) => {
                if (content.getAttribute('data-content') === selected) {
                    content.classList.add('active');
                }
                else {
                    content.classList.remove('active');
                }
            });
        });
    });
}