
const burgerToggle = document.querySelector('.burgerToggle');
const navlist = document.querySelector('.nav-list');

burgerToggle.addEventListener('click', function() {
    navlist.classList.toggle('nav-active');
    burgerToggle.classList.toggle('burger-active')
});