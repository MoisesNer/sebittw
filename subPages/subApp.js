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