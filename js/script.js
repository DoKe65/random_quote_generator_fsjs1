/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Constants with urls where I found some of the quotes
 */

 const goodreads = `<a href="https://www.goodreads.com/quotes" target="_blank">(goodreads.com)</a>`;
 const stacker = `<a href="https://stacker.com/stories/2617/can-you-name-who-said-these-50-famous-quotes" target="_blank">(stacker.com)</a>`;
 const brainy = `<a href="https://www.brainyquote.com/quotes" target="_blank">(brainyquote.com)</a>`
 

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
    quote: "Common sense is like deodorant. The people who need ist most never use it.",
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
    year: "July 12, 2013",
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
 * `getRandomQuote` function
 * 
***/
/**
 * 
 * @param {array} arr - The array to pass to the function
 * @returns {object} - Returns the object at the randomly generated index from the array passed to the function 
 */
const getRandomQuote = arr => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

console.log(getRandomQuote(quotes))


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);