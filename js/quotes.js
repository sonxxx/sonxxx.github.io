const quotes = [
  {
    quote: "Try not to become a man of success but rather try to become a man of value.",
    author: "- Albert Einstein"
  },
  {
    quote: "Idleness and lack of occupation tend - nay are dragged - towards evil.",
    author: "- Hippocrates"
  },
  {
    quote: "Nothing of me is original. I am the combined effort of everybody I've ever known.",
    author: "- Chuck Palahniuk"
  },
  {
    quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    author: "- Thomas A. Edison"
  },
  {
    quote: "Hope is a waking dream.",
    author: "- Aristotle"
  },
  {
    quote: "The most wasted of all days is one without laughter.",
    author: "- E. E. Cummings"
  },
  {
    quote: "I really had a lot of dreams when I was a kid, and I think a great deal of that grew out of the fact that I had a chance to read a lot.",
    author: "- Bill Gates"
  },
  {
    quote: "Everything in your world is created by what you think.",
    author: "- Oprah Winfrey"
  },
  {
    quote: "While there's life, there's hope.",
    author: "- Cicero"
  },
  {
    quote: "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
    author: "- Erica Jong"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;