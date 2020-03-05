const body = document.querySelector("body");

const IMG_NUMBER = 14;
const IMG_NUMBER_RESIZE = 5;

function resizeBrowser(imgNumber) {
  const image = new Image();
  image.src = `img/650/${imgNumber + 1}.jpg`;
  image.classList.add("bgimage");
  body.prepend(image);
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/basic/${imgNumber + 1}.jpg`;
  image.classList.add("bgimage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function getRandom_resize() {
  const number = Math.floor(Math.random() * IMG_NUMBER_RESIZE);
  return number;
}

function refresh(){
    window.onresize = function(){
        document.location.reload()
    }
}

function resize() {
  let windowWidth = window.innerWidth;
  const randomNumber = getRandom();
  const randomNumber_resize = getRandom_resize();
  if (windowWidth < 651) {
    resizeBrowser(randomNumber_resize);
    refresh()
  } else {
    paintImage(randomNumber);
    refresh()
  }
}

function init() {
  resize();
}
init();
