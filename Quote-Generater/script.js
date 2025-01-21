const quotes = [
  {
    text: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    author: "Albert Einstein",
  },
  {
    text: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    text: "If you want to shine like a sun, first burn like a sun.",
    author: "A. P. J. Abdul Kalam",
  },
];
//!Setting up the format for quote
const quotecontainer = document.querySelector(".quote");
const button = document.getElementById("nextquote");

function Displayquotation(index) {
  const quote = quotes[index];

  quotecontainer.innerHTML = `
    
        <h1 class="quotation"><i id="qm" class="fa-solid fa-quote-left"></i>${quote.text} <i id="qm" class="fa-solid fa-quote-right"></i></h1>
       
        <div class="author">~ ${quote.author}</div>
  `;
}

Displayquotation(Math.floor(Math.random() * quotes.length));

//! Displaying random quote
button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  Displayquotation(random);
});

//! Copy feature using clipboard
document.getElementById("copybtn").addEventListener("click", () => {
  const quotecontainer = document.querySelector(".quote").innerText;
  navigator.clipboard
    .writeText(quotecontainer)
    .then(() => alert(" quote is Copied "))
    .catch((error) => {
      console.error("Sometihng went wrong", error);
    });
});

//! Spelling out the quote and author
document.getElementById("spell").addEventListener("click", () => {
  const quoteforspell = document.querySelector(".quotation").innerText;
  const authorforspell = document.querySelector(".author").innerText;
  const fullword = `${quoteforspell} by ${authorforspell}`;
  const speak = new SpeechSynthesisUtterance(fullword);
  speechSynthesis.speak(speak);
});
