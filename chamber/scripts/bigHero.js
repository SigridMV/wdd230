let currentImageIndex = 0;
const images = document.querySelectorAll('.slide-image');
const nextButton = document.getElementById('nextSlide');
const prevButton = document.getElementById('prevSlide');

nextButton.addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

prevButton.addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
});


images[0].style.display = 'block';