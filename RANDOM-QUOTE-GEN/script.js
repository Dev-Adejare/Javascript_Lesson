const quoteCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');

//Get Quote API


//https://api.quotable.io/random

const getQuote = async() => {
    const apiUrl = 'https://api.quotable.io/random';

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)

        authorName.innerText =  data.author;
        quoteText.innerText = data.content;
    }catch(error) {
        console.log('Error fetching quote', error)
    }
    
}
getQuote()