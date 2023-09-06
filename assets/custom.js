document.addEventListener('DOMContentLoaded', function() {
   
let w = document.documentElement.clientWidth;
let swiper;


function loadSwiper(){
    if(w <= 767) {
      console.log(w + "wdith mobile");
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
}

loadSwiper();

});