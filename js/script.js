const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');
let imageIndex = 0;

// next btn
nextBtn.addEventListener('click',
    function () {
        if (imageIndex == (images.lenght - 1)) {
            imageIndex = 0;
        } else {
            imageIndex++;
        }
        const pic = document.getElementById('pic');
        pic.setAttribute('src', `img/img/${images[imageIndex]}`);
    }
);

//previous btn
previousBtn.addEventListener('click',
    function () {
        if (imageIndex == (images.lenght - 1)) {
            imageIndex = 4
        } else {
            imageIndex--;
        }
        const pic = document.getElementById('pic');
        pic.setAttribute('src', `img/img/${images[imageIndex]}`);
    }
);






