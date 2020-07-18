
const burgerToggle = document.querySelector('.burgerToggle');
const navlist = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-list a');

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', function() {
        navlist.classList.remove('nav-active');
        burgerToggle.classList.remove('burger-active')
    });
}


burgerToggle.addEventListener('click', function() {
    navlist.classList.toggle('nav-active');
    burgerToggle.classList.toggle('burger-active')
});