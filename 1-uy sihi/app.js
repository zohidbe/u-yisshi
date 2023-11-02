

const changeImageButton = document.getElementById('changeImage');
const image = document.getElementById('image');

const images = ['image1.jpg', 'image2.jpg',];
let currentImageIndex = 0;

changeImageButton.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageSrc = images[currentImageIndex];
    image.src = newImageSrc;
});
