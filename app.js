// QUOTE GENERATOR FUNCTION
let quoteBtn = document.getElementById('quote-btn');
let author = document.getElementById('author');
let quote = document.getElementById('quote')

quoteBtn.addEventListener('click', function(){
    fetch('http://quotable.io/random')
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
});

// JUMBOTRON TITLE
$(window).scroll(function(){
    $(".jumbotronTitle").css("opacity", 1 - $(window).scrollTop() / 200);
  });

// DARK MODE
$('#darkMode').on('click', function(){
    $('#navbar').removeClass('bg-danger');
    $('#navbar').addClass('bg-dark')

    $('#quote-btn').removeClass('btn-danger');
    $('#quote-btn').addClass('btn-dark');

    $('#footer').removeClass('bg-danger');
    $('#footer').addClass('bg-dark');

    $('#lightMode').css('display', 'block')
    $(this).css('display', 'none')
});

//LIGHT MODE
$('#lightMode').on('click', function(){
    $('#navbar').removeClass('bg-dark');
    $('#navbar').addClass('bg-danger')

    $('#quote-btn').removeClass('btn-dark');
    $('#quote-btn').addClass('btn-danger');

    $('#footer').removeClass('bg-dark');
    $('#footer').addClass('bg-danger');

    $('#darkMode').css('display', 'block')
    $(this).css('display', 'none')
});