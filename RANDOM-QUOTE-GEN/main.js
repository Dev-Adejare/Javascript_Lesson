const quoteCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('new-quote');

//https://type.fit/api/quotes
let apiQuote = [];
function newQuote() {

    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    console.log(quote);

    authorName.textContent = quote.author
    quoteText.textContent = quote.text

}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json()
        console.log(apiQuote)

        newQuote()
    }catch(error) {
        console.log(error)

    }
}

getQuotes()

