// ===== Слайдер (хронология) =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('sliderDots');

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// ===== Фотоархив: суретті үлкейту (lightbox) =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item img, .interview-photos img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
}

lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) closeLightbox();
});
lightboxClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});
