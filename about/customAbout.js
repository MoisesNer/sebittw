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

  // DARK MODE
$('#darkMode').on('click', function(){
  $('#navbar').removeClass('bg-light');
  $('#navbar').addClass('bg-dark');
  
  $('#navbar').removeClass('navbar-light');
  $('#navbar').addClass('navbar-dark');
  
  $('#sec4').addClass('darkMode');

  $('#footer').removeClass('bg-secondary');
  $('#footer').addClass('bg-dark');

  $('#lightMode').css('display', 'block');
  $(this).css('display', 'none');

});

//LIGHT MODE
$('#lightMode').on('click', function(){
  $('#navbar').removeClass('bg-dark');
  $('#navbar').addClass('bg-light')

  $('#navbar').removeClass('navbar-dark');
  $('#navbar').addClass('navbar-light')
  
  $('#sec4').removeClass('darkMode');

  $('#footer').removeClass('bg-dark');
  $('#footer').addClass('bg-secondary');

  $('#darkMode').css('display', 'block')
  $(this).css('display', 'none')

});
