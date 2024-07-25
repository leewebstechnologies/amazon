const images = document.querySelectorAll(".header-slider ul img");
const previous_btn = document.querySelector(".control_previous");
const next_btn = document.querySelector(".control_next");

let n = 0;

changeSlide = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[n].style.display = "block";
};

changeSlide();

previous_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = images.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < images.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

// const scrollContainer = document.querySelectorAll(".products");
// for (const item of scrollContainer) {
//   item.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     item.scrollLeft += event.deltaY;
//   });
// }
