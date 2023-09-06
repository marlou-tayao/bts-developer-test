let w = document.documentElement.clientWidth;
console.log(w);
if(w <= 767) {
  let swiper = new Swiper(".grid-swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    init: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}