const SHOWING_CLASS = "showing";
const SLIDER_CONTENT = "slider__content";
const BTN_HOVER = "btnHover";
const sliders = document.querySelectorAll(".slider__content");
const firstSlide = sliders[0];
const lastSlide = sliders[sliders.length - 1];
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

function init() {
  const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlider) {
    currentSlider.classList.remove(SHOWING_CLASS);
    firstSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function slide(e) {
  const target = e.currentTarget;
  const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlider.classList.remove(SHOWING_CLASS);
  if (target === leftBtn) {
    if (currentSlider.previousElementSibling) {
      currentSlider.previousElementSibling.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    if (currentSlider.nextElementSibling.className === SLIDER_CONTENT) {
      currentSlider.nextElementSibling.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }
}

function btnHover(e) {
  const btn = e.target;
  btn.classList.toggle("btnHover");
}

// Event
leftBtn.addEventListener("click", slide);
leftBtn.addEventListener("mouseenter", btnHover);
leftBtn.addEventListener("mouseleave", btnHover);
rightBtn.addEventListener("click", slide);
rightBtn.addEventListener("mouseenter", btnHover);
rightBtn.addEventListener("mouseleave", btnHover);

// Execute()
init();
