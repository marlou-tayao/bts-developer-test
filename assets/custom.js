let mobile = window.matchMedia('(min-width: 768px)');
let swiper;

function sizeChanged(){
    // Get width
    console.log('resized');
    let w = document.documentElement.clientWidth;
    
    // Display swiper or remove
    if(mobile.matches) {
      swiper.destroy();
    } else {
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