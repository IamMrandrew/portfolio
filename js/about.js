
function scrollAppear() {
    let contact = document.querySelector(".form-wrapper");
    let skill = document.querySelector(".skill-wrapper");

    let skill1 = document.querySelector(".skillContainer-mobile-1");
    let skill2 = document.querySelector(".skillContainer-mobile-2");
    let skill3 = document.querySelector(".skillContainer-mobile-3");

    let contactSession = contact.getBoundingClientRect().top;
    let skillSession = skill.getBoundingClientRect().top;
    let skill1Session = skill1.getBoundingClientRect().top;
    let skill2Session = skill2.getBoundingClientRect().top;
    let skill3Session = skill3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    if (screenPosition > contactSession) {
        contact.classList.add("itemAppear");
    }
    if (screenPosition > skillSession) {
        skill.classList.add("itemAppear");
    }
    if (screenPosition > skill1Session) {
        skill1.classList.add("itemAppear");
    }
    if (screenPosition > skill2Session) {
        skill2.classList.add("itemAppear");
    }
    if (screenPosition > skill3Session) {
        skill3.classList.add("itemAppear");
    }
}

setTimeout(scrollAppear, 2500);
window.addEventListener("scroll", scrollAppear);