// Image paths and dynamic directions
const images = {
    maingate: { src: 'images/maingate.jpg', front: 'street1' },
    street1: { src: 'images/street1.jpg', front: 'street4', back: 'maingate', right: 'street2' },
    street2: { src: 'images/street2.jpg', front: 'street3', back: 'street1' },
    street3: { src: 'images/street3.jpg', front: 'street5', back: 'street2', left: 'medical' },
    street4: { src: 'images/street4.jpg', front: 'street12', back: 'street1' },
    street5: { src: 'images/street5.jpg', right: 'street7', left: 'street6', back: 'street3' },
    street6: { src: 'images/street6.jpg', left: 'games', back: 'street5' },
    street7: { src: 'images/street7.jpg', front: 'street8', back: 'street5' },
    street8: { src: 'images/street8.jpg', back: 'street7', left: 'sot', front: 'street9' },
    street9: { src: 'images/street9.jpg', left: 'street10', back: 'street8' },
    street10: { src: 'images/street10.jpg', front: 'street11', back: 'street9' },
    street11: { src: 'images/street11.jpg', front: 'boyshostel1', back: 'street10' },
    boyshostel1: { src: 'images/boyshostel1.jpg', back: 'street11' },

    street12: { src: 'images/street12.jpg', front: 'street14', back: 'street4', left: 'street13' },
    street13: { src: 'images/street13.jpg', front: 'boyshostel2', back: 'street12' },
    street14: { src: 'images/street14.jpg', front: 'street13'}
    boyshostel2: { src: 'images/boyshostel2.jpg', front: 'girlshostel', back: 'street13' },
    girlshostel: { src: 'images/girlshostel.jpg', back: 'boyshostel2' },

    medical: { src: 'images/medical.jpg', back: 'street3' },
    games: { src: 'images/games.jpg', back: 'street6' }
};

// Track the current image state
let currentImage = 'maingate';

// Function to change the image based on the clicked arrow
function changeImage(direction) {
    const imageElement = document.getElementById('mainImage');
    const locationName = document.getElementById('locationName');

    currentImage = images[currentImage][direction]; 
    imageElement.src = images[currentImage].src;

    // Show "Main-Gate" text only on the maingate image
    if (currentImage === 'maingate') {
        locationName.style.display = 'block';
    } else {
        locationName.style.display = 'none';
    }

    // Manage arrow visibility based on available directions
    document.getElementById('frontArrow').style.display = images[currentImage].front ? 'block' : 'none';
    document.getElementById('backArrow').style.display = images[currentImage].back ? 'block' : 'none';
    document.getElementById('leftArrow').style.display = images[currentImage].left ? 'block' : 'none';
    document.getElementById('rightArrow').style.display = images[currentImage].right ? 'block' : 'none';
}
