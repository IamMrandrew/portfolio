
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    console.log(currentTime);
    if (startTime == null)
      startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration)
      requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1)
      return c/2 * t * t+b;
    t--;
    return -c /2 * (t * (t-2) -1) +b;
  }

  requestAnimationFrame(animation);
}

let designTab = document.querySelector("#designTab");
let homeTab = document.querySelector("#homeTab");

designTab.addEventListener('click', function() {
  smoothScroll(".designTitle", 800);
});

homeTab.addEventListener('click', function(){
  smoothScroll(".jumbotron1", 800);
});

function scrollAppear() {
  let designTitle = document.querySelector(".designTitle");
  let designItem1 = document.querySelector(".item1");
  let designItem2 = document.querySelector(".item2");
  let designItem3 = document.querySelector(".item3");
  
  let designTitleSession = designTitle.getBoundingClientRect().top;
  let designItem1Session = designItem1.getBoundingClientRect().top;
  let designItem2Session = designItem2.getBoundingClientRect().top;
  let designItem3Session = designItem3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.1;

  if (screenPosition > designTitleSession) {
    designTitle.classList.add("itemAppear")
  }
  if (designItem1Session < screenPosition) {
    designItem1.classList.add("itemAppear")
  }

  if (designItem2Session < screenPosition) {
    designItem2.classList.add("itemAppear")
  }

  if (designItem3Session < screenPosition) {
    designItem3.classList.add("itemAppear")
  }

}

  setTimeout(scrollAppear, 2500);

  window.addEventListener("scroll", scrollAppear);

  function typingEffect() {
    const texts = ['coding', 'designing', 'singing', 'sleeping'];
    let index = 0;
    let letterIndex = 0;
    let currentText = "";
    let letter = "";

    function typing() {
      if (index === texts.length) {
        index = 0;
      }

      currentText = texts[index];
      letter = currentText.slice(0, ++letterIndex);

      document.querySelector('.typing').textContent = letter;
      if (letter.length === currentText.length) {
        index++;
        letterIndex = 0;
      }
      
    }
    setInterval(typing, 400);
  }

  setTimeout(typingEffect, 3000);

  function clickItemImg() {
    let item1 = document.querySelector(".item1 .img-wrapper");
    console.log(item1);
    item1.addEventListener('click', function(){
      window.location="design/hautakchurch-webdevelopment.html"
    });
  }

  clickItemImg();
