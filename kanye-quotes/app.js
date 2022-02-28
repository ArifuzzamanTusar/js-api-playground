const loadApidata = () =>{
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data => showQuote(data));
}

const showQuote = quote =>{
    document.getElementById('quotes').innerText= quote.quote;
}
