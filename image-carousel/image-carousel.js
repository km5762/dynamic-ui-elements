const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let focus = 0;

forward.addEventListener("click", shiftForward);

backward.addEventListener("click", shiftBackward);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    shiftForward();
  } else if (e.code === "ArrowLeft") {
    shiftBackward();
  }
});

function shiftForward() {
  if (focus < images.length - 1) {
    focus++;
    slides.style.transform = `translateX(-${focus * 500}px)`;
  }
}

function shiftBackward() {
  if (focus > 0) {
    focus--;
    slides.style.transform = `translateX(${-((focus + 1) * 500) + 500}px)`;
  }
}
