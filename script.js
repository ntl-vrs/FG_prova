let currentSlide = 0; // Keeps track of the current slide

// Initializing the carousel
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const bullets = document.querySelectorAll('.bullet');

    if (index < 0) {
        currentSlide = slides.length - 1; // Go to last slide if on first
    } else if (index >= slides.length) {
        currentSlide = 0; // Go to first slide if on last
    } else {
        currentSlide = index; // Set the current slide to the selected index
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    // Show the current slide
    slides[currentSlide].style.display = 'block';

    // Update bullets
    bullets.forEach((bullet, i) => {
        if (i === currentSlide) {
            bullet.src = 'bullet-full.png'; // Full bullet for the current slide
        } else {
            bullet.src = 'bullet-hollow.png'; // Hollow bullets for other slides
        }
    });
}

// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Go to a specific slide by clicking the bullets
function goToSlide(index) {
    showSlide(index);
}

// Initialize the first slide
showSlide(currentSlide);
