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

// let sliders = document.querySelectorAll('.glide');

//     const config = {
//         type: "slider",
//         perView: 1.1,
//         gap: 20,
//         keyboard: true,
//         rewind: false,
//         bound: true,
//         animationDuration: 950,
//         breakpoints: {
//             1140: {
//                 perView: 1.3
//             },
//             768: {
//                 perView: 1
//             }
//         }
//     }

//     new Glide(".glide1", config).mount();
//     new Glide(".glide2", {
//         type: "slider",
//         perView: 2.7,
//         gap: 5,
//         keyboard: true,
//         rewind: false,
//         bound: true,
//         animationDuration: 950,
//         breakpoints: {
//             1140: {
//                 perView: 2.9
//             },
//             768: {
//                 perView: 2.2
//             },
//             425: {
//                 perView: 1.3
//             }
//         }
//     }).mount();

// let glides = document.querySelectorAll(".glide");
// let arrows = document.querySelectorAll(".glide__arrow");

//     for(let i = 0; i < glides.length; i++){
//         glides[i].addEventListener('mouseover', function(){
//             let secondArrow = i*2+1;
//             arrows[i*2].classList.add("arrowsAppear");
//             arrows[secondArrow].classList.add("arrowsAppear");
//             setTimeout(function() {
//                 arrows[i*2].classList.remove("arrowsAppear");
//                 arrows[secondArrow].classList.remove("arrowsAppear");
//             }, 4000);
//         })
//     }

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
                slidesToShow: 2.3,
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
                slidesToShow: 1.8,
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
        }
    ]
});