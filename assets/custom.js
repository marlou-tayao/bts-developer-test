var swiper = new Swiper(".grid-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let mobile = window.matchMedia('(min-width: 768px)');

if(mobile.matches) {
  swiper.destroy();
  init = false;
}