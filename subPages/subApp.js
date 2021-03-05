// PAGE TITLE SCROLL
// $(document).on('scroll', function(){
//     $('.subTitle').css("left", Math.max(3 * window.scrollY) + "px");
// })

$(window).scroll(function(){
    $(".subTitle").css("opacity", 1 - $(window).scrollTop() / 200);
  });
// BUTTON SCROLL

const btnScrollTop = document.querySelector('.btnScrollTop');
btnScrollTop.addEventListener('click', function(){
    window.scrollTo(0,0)
})

// SWIPER

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  }
});