let mobile = window.matchMedia('(min-width: 768px)');
var swiper = new Swiper(".grid-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  initialized: "false",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function sizeChanged(){
    // Get width
    console.log('resized');
    var w = document.documentElement.clientWidth;
    
    // Display swiper or remove
    if(mobile.matches) {
      swiper.destroy(deleteInstance, cleanStyles)
      init = false;
    } else {
      swiper.init();
    }
}

window.addEventListener("resize", sizeChanged);
sizeChanged();