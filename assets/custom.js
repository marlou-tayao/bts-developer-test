let w = document.documentElement.clientWidth;

function loadSwiper(){
    if(w <= 767) {
      let swiper = new Swiper(".grid-swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
}

loadSwiper();