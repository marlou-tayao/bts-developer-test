var swiper = new Swiper(".grid-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

if(mobile.matches) {
  swiper.destroy();
  init = false;
}