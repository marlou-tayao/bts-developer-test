let mobile = window.matchMedia('(min-width: 768px)');
let swiper = new Swiper(".grid-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
swiper.destroy();
function sizeChanged(){
    // Get width
    let w = document.documentElement.clientWidth;
    
    // Display swiper or remove
    if(mobile.matches) {
      swiper.destroy();
    } else {
      swiper.init();
      swiper.destroy();
      let swiper = new Swiper(".grid-swiper", {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
}

window.addEventListener("resize", sizeChanged);
sizeChanged();