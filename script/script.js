document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showItem(index) {
        if (index < 0) {
            currentIndex = items.length - 1;
        } else if (index >= items.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => showItem(currentIndex - 1));
    nextButton.addEventListener('click', () => showItem(currentIndex + 1));

    // Auto-advance carousel every 5 seconds
    setInterval(() => showItem(currentIndex + 1), 5000);

    // Buy button functionality
    const buyButton = document.getElementById('buyButton');
    const quantityInput = document.getElementById('quantity');

    buyButton.addEventListener('click', function(e) {
        e.preventDefault();
        const quantity = parseInt(quantityInput.value);
        if (quantity > 2) {
            alert('Lo sentimos, el máximo permitido es de 2 botellas por cliente.');
            return;
        }
        alert(`Felicidades. Su reserva de ${quantity} botella(s) de la Reserva Especial 2023 ha sido confirmada. Nuestro sommelier se pondrá en contacto para coordinar la entrega personalizada y ofrecerle una degustación privada.`);
    });
});