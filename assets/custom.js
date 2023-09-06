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

function sizeChanged(){
    // Get width
    let w = document.documentElement.clientWidth;
    
    // Display swiper or remove
    if(mobile.matches) {
      swiper.destroy();
    } else {
      swiper.init();
    }
}

window.addEventListener("resize", sizeChanged);
sizeChanged();