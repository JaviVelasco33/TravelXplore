export function initTestimonials() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const reviews = document.querySelectorAll('.test-review');
    let current = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
        reviews.forEach((review, i) => {
            review.style.display = (i === index) ? 'flex' : 'none';
        });
        current = index;
    }

    prevBtn.addEventListener('click', () => {
        let newIndex = (current - 1 + items.length) % items.length;
        showItem(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        let newIndex = (current + 1) % items.length;
        showItem(newIndex);
    });

    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => showItem(i));
    });

    // Inicializa el carrusel mostrando el primer elemento
    showItem(0);
}