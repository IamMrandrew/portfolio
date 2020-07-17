
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

designTab.addEventListener('click', function() {
  smoothScroll("#design", 800);
});

function scrollAppear() {
  let designItem1 = document.querySelector(".item1");
  let designItem2 = document.querySelector(".item2");
  let designItem3 = document.querySelector(".item3");
  let designSession = designItem1.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (designSession < screenPosition) {
      designItem1.classList.add("itemAppear")
    }
  
    if (designSession < screenPosition-450) {
      designItem2.classList.add("itemAppear")
    }
  
    if (designSession < screenPosition-100) {
      designItem3.classList.add("itemAppear")
    }
  } else {
    if (designSession < screenPosition) {
      designItem1.classList.add("itemAppear")
    }
  
    if (designSession < screenPosition-450) {
      designItem2.classList.add("itemAppear")
    }

    if (designSession < screenPosition-800) {
      designItem3.classList.add("itemAppear")
    }
  }

}

window.addEventListener("scroll", scrollAppear);