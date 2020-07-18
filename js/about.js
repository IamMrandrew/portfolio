
function scrollAppear() {
    let contact = document.querySelector(".form-wrapper");
    let skill = document.querySelector(".skill-wrapper");
    let contactSession = contact.getBoundingClientRect().top;
    let skillSession = skill.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    if (screenPosition > contactSession) {
        contact.classList.add("itemAppear");
    }
    if (screenPosition > skillSession) {
        skill.classList.add("itemAppear");
    }
}

setTimeout(scrollAppear, 2500);
window.addEventListener("scroll", scrollAppear);