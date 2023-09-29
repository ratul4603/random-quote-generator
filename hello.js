
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteUrl = 'https://api.quotable.io/random';


btn.addEventListener("click", ()=>{
    fetch(quoteUrl)
    .then((response)=>response.json())
    .then((data)=>{
        quote.innerHTML = `${data.content}`;
        author.innerHTML = `-${data.author}`;
    });
});