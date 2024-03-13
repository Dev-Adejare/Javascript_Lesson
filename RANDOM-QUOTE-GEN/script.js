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
        

        if(data.author === '') {
            authorName.innerText = 'unknown';
        }else { authorName.innerText = data.author;
        }

         //Check quote length to determine the styling

         if(data.content.length > 50) {
            quoteText.classList.add('long-quote')
        }else {
            quoteText.classList.remove('long-quote')  
        } 

            

        authorName.innerText = data.author;
        quoteText.innerText = data.content;
    }catch(error) {
        console.log('Error fetching quote', error)
    }
}

//Tweet
const tweetQuote = ()=> {
    const quote = quoteText.innerText;
    const author = authorName.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`
    window.open(twitterUrl, "_blank")
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)
    
getQuote()