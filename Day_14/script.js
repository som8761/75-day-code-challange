const quotesArray = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
];

const quote_btn = document.getElementById('quote_btn');
const inner_quote_container = document.querySelector('.inner_quote_container');

// add eventlistener in quote button
quote_btn.addEventListener('click',()=>{
    displayRandomQuote(quotesArray)
    counterDisplay()
})

const generateRandomQuoteIndex  = (quotes)=>{
    return Math.floor(Math.random() * quotes.length); // generate Random Quotes
}

// Display the quotesIndex 
function displayRandomQuote(quotes){
    const randomQuotes = generateRandomQuoteIndex (quotes);
    const RandomQuoteIndex = quotes[randomQuotes];
    appendQuoteToContainer(RandomQuoteIndex)
}

// appending quotes to container:
function appendQuoteToContainer(random){
    const createElm = document.createElement('p');
    createElm.textContent = random;
    inner_quote_container.innerHTML = '';
    inner_quote_container.appendChild(createElm)
}

let count = 0; // count var initialized..
function counterDisplay(){
    const counter = document.querySelector('.counter');
    counter.innerHTML = `The button is clicked : ${count += 1} times` // adding 1 each click 
}


