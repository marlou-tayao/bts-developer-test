let mobile = window.matchMedia('(min-width: 768px)');


$(window).resize(function() {
  console.log('resize');
  //resize just happened, pixels changed
  if(mobile.matches) {
    swiper.destroy();
    init = false;
  } else {
    var swiper = new Swiper(".grid-swiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});