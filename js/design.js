
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
        imgSession[i] = img[i].getBoundingClientRect().top;
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
}

setTimeout(scrollAppear, 3200);
window.addEventListener("scroll", scrollAppear);