/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Constants with urls where I found some of the quotes
 */

 const goodreads = `<a href="https://www.goodreads.com/quotes" target="_blank">goodreads.com</a>`;
 const stacker = `<a href="https://stacker.com/stories/2617/can-you-name-who-said-these-50-famous-quotes" target="_blank">stacker.com</a>`;
 const brainy = `<a href="https://www.brainyquote.com/quotes" target="_blank">brainyquote.com</a>`
 

/*** 
 * `quotes` array
***/
const quotes = [
  {
    quote: "Confusion is part of programming.",
    source: "Felienne Hermans",
    citation: "The Programmer's Brain",
    year: 2021,
    resource: goodreads
  },
  {
    quote: "My mother always used to say: The older you get, the better you get - unless you're a banana.",
    source: "Rose (Betty White)",
    citation: "The Golden Girls",
    resource: goodreads
  },
  {
    quote: "Common sense is like deodorant. The people who need it most never use it.",
    source: "Mackenzie Morrison",
    resource: goodreads
  },
  {
    quote: "There is only one thing more painful than learning from experience and that is not learning from experience.",
    source: "Archibald McLeish",
    resource: brainy
  },
  {
    quote: "In youth we learn; in age we understand.",
    source: "Marie von Ebner-Eschenbach",
    resource: brainy
  },
  {
    quote: "Do not fear failure but rather fear not trying.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
    year: 2016,
    resource: goodreads
  },
  {
    quote: "When the whole world is silent, even one voice becomes powerful.",
    source: "Malala Yousafzai",
    citation: "Quote from a speech to an United Nations panel, New York",
    year: 2013,
    resource: stacker
  },
  {
    quote: "To err is human; to forgive, divine.",
    source: "Alexander Pope",
    citation: "An Essay on Criticism",
    resource: stacker
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: "Maya Angelou",
    resource: goodreads
  },
  {
    quote: "All you need is love. But a little chocolate now and then doesn't hurt.",
    source: "Charles M. Schulz",
    resource: goodreads
  }
];

/***
 * Array "indexes" to store the last 7 quote indexes
 */

let indexes = [];

/***
 * @function getRandomQuote(arr)
 * @param {array} arr - The array to pass to the function
 * @returns {object} - Returns the randomly chosen quote object 
 * @description: 
 * 1. stores index in a variable
 * 2. generates a random number from 0 to the length of the quotes array, if not already used and stored in the indexes array
 * 3. adds the current generated random value into the indexes array
 * 4. When array contains 7 indexes, reset (empty) array "indexes"
 * 5. returns the quote object
 */
const getRandomQuote = arr => {
  let index;

  do {
    index = Math.floor(Math.random() * arr.length);
  }
  while ( indexes.includes(index) );
  indexes.push(index);
  
  if (indexes.length = 7) {
    indexes = [];
  }

  return arr[index];
}

/***
 * @function randomBg()
 * @returns {string} color - creates and returns a random rgb color
 */

const randomBg = () => {
  const val = () => Math.floor(Math.random() * 256);
  return `rgb(${val()}, ${val()}, ${val()})`;
}



/***
 * @function printQuote()
 * @returns {string} - Returns html string containing quote object returned from the getRandomQuote function
 * @description:
 * 1. Generates an html string to display the randomly chosen quote by the getRandomQuote() function
 * 2. Adds the html to the quote-box div
 * 3. Sets background color to a random color using the function randomBg()
***/

const printQuote = () => {
  const {quote, source, citation, year, resource} = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}`;
   citation ? html += `<span class="citation">${citation}</span>` : null;
   year ? html += `<span class="year">${year}</span>` : null;
   resource ? html += `<span class="resource">found on ${resource}</span>` : null;
   html += `</p>`;
   document.querySelector("#quote-box").innerHTML = html;
   document.querySelector("body").style.backgroundColor = randomBg();
 }

printQuote();

/**
 * Displays a new quote every 10 seconds
 */

setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);