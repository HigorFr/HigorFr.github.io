const track = document.querySelector(".track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const totalSlides = document.querySelectorAll(".track article").length/3;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  if (index < totalSlides - 1) {
    index++;
    updateCarousel();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});