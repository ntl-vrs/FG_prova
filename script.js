let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const bullets = document.querySelectorAll('.bullet');

    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.style.display = 'none');

    slides[currentSlide].style.display = 'block';

    bullets.forEach((bullet, i) => {
        if (i === currentSlide) {
            bullet.src = 'bullet-full.png'; // Full bullet for the current slide
        } else {
            bullet.src = 'bullet-hollow.png'; // Hollow bullets for other slides
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

showSlide(currentSlide);
