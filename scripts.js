const images = [
    "potoebi/bichebi.jpg",
    "potoebi/image2.jpg",
    "potoebi/image3.jpg"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function changeImage() {
    index = (index + 1) % images.length;
    slideshow.src = images[index];
}

setInterval(changeImage, 4000); // changes every 4 seconds
