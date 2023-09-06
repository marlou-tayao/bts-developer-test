var swiper = new Swiper(".grid-swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});