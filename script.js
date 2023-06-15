// Image Slider
const sliders = document.querySelectorAll('.slider');
let currentSlide = 0;

function showSlide(n) {
  sliders[currentSlide].style.display = 'none';
  currentSlide = (n + sliders.length) % sliders.length;
  sliders[currentSlide].style.display = 'block';
}

setInterval(() => showSlide(currentSlide + 1), 3000);
