function toggleNavList(){
    const burgerToggle = document.querySelector('.burgerToggle');
    const navlist = document.querySelector('.nav-list');

    burgerToggle.addEventListener('click', function() {
        navlist.classList.toggle('nav-active');
        burgerToggle.classList.toggle('burger-active')
    });
}
toggleNavList();

function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
  document.getElementById("designTab").addEventListener('click', () => {
    scrollTo(document.getElementById("design"));
  });


