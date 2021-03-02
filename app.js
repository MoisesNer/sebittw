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