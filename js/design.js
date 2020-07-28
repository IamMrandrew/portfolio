// const glider = require("./glider");

function scrollAppear() {
    let headerWrapper = document.querySelector(".header-wrapper");
    let headerWrapperSession = headerWrapper.getBoundingClientRect().top;
    let para = document.querySelectorAll(".content p");
    let paraSession = [];
    for (let i = 0; i < para.length; i++){
        paraSession[i] = para[i].getBoundingClientRect().top;
    }
    let h2 = document.querySelectorAll(".content h2");
    let h2Session = [];
    for (let i = 0; i < h2.length; i++){
        h2Session[i] = h2[i].getBoundingClientRect().top;
    }
    let img = document.querySelectorAll(".content img");
    let imgSession = [];
    for (let i = 0; i < img.length; i++){
        imgSession[i] = img[i].getBoundingClientRect().top*1.3;
    }
    let imagesWrapper = document.querySelectorAll(".images-wrapper");
    let imagesWrapperSession = [];
    for (let i = 0; i < imagesWrapper.length; i++){
        imagesWrapperSession[i] = imagesWrapper[i].getBoundingClientRect().top*1.3;
    }

    let screenPosition = window.innerHeight / 1;

    if (screenPosition > headerWrapperSession) {
        headerWrapper.classList.add("itemAppear");
    }

    for(let i = 0; i < paraSession.length; i++){
        if (screenPosition > paraSession[i]) {
            para[i].classList.add("itemAppear");
        }
    }

    for(let i = 0; i < h2Session.length; i++){
        if (screenPosition > h2Session[i]) {
            h2[i].classList.add("itemAppear");
        }
    }
    
    for(let i = 0; i < imgSession.length; i++){
        if (screenPosition > imgSession[i]) {
            img[i].classList.add("itemAppear");
        }
    }

    for(let i = 0; i < imagesWrapperSession.length; i++){
        if (screenPosition > imagesWrapperSession[i]) {
            imagesWrapper[i].classList.add("itemAppear");
        }
    }
}

setTimeout(scrollAppear, 2000);
window.addEventListener("scroll", scrollAppear);

// hau-tak-church

new Glider(document.querySelector('.glider'), {
    // slidesToShow: 'auto',
    // itemWidth: 320,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    dragVelocity: 1,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
            }
        }, {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1.4,
            }
        }, {
            breakpoint: 1700,
            settings: {
                slidesToShow: 2.1,
            }
        }
    ]
});

new Glider(document.querySelector('.glider2'), {
    // slidesToShow: 'auto',
    // itemWidth: 320,
    slidesToShow: 1.4,
    draggable: true,
    dots: '.dots-2',
    dragVelocity: 1,
    arrows: {
        prev: '.glider-prev-2',
        next: '.glider-next-2'
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.9,
            }
        }, {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2.6,
            }
        }, {
            breakpoint: 1700,
            settings: {
                slidesToShow: 3.4,
            }
        }, {
            breakpoint: 2100,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
});