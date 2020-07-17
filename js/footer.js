
function scrollAppear() {
    let footer = document.querySelector("footer");
    let footerSession = footer.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (screenPosition > footerSession) {
        footer.classList.add("itemAppear");
        console.log("yo");
    }
}

window.addEventListener("scroll", scrollAppear);