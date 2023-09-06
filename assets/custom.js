var swiper = new Swiper(".mySwiper", {
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
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});