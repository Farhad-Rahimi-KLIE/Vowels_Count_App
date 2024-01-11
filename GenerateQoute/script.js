let quotes = [
  {
    quote: "dgjgjjgfgkjggk",
    source: "farhad",
    citiation: "twitter",
    year: "2000",
  },
  {
    quote: "dgjgjjgfgkjggk",
    source: "farhad",
    citiation: "twitter",
    year: "2000",
  },
  {
    quote: "dgjgjjgfgkjggk",
    source: "farhad",
    citiation: "twitter",
    year: "2000",
  },
  {
    quote: "dgjgjjgfgkjggk",
    source: "farhad",
    citiation: "twitter",
    year: "2000",
  },
  {
    quote: "dgjgjjgfgkjggk",
    source: "farhad",
    citiation: "twitter",
    year: "2000",
  },
];
console.log(quotes);

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}
function printQuote() {
  let currentQuote = getRandomQuote();
  let html = "";
  document.getElementById("quote-box");
  html += '<p class="quote">' + currentQuote.quote;
  html += "</p>";
  html += '<p class="source">' + currentQuote.source;
  if ("citiation" in currentQuote) {
    html += '<span class="citiation">' + currentQuote.citiation + "</span>";
  }
  if ("year" in currentQuote) {
    html += '<span class="year">' + currentQuote.year + "</span>";
  }
  html += "</p>";
  setRandomBackground();
}

function setRandomBackground(params) {
  let randomNumber = Math.floor(Math.random() * 6);
  if (randomNumber == 0) {
    document.body.style.background = "black";
  } else if (randomNumber == 1) {
    document.body.style.background = "blue";
  } else if (randomNumber == 2) {
    document.body.style.background = "green";
  } else if (randomNumber == 3) {
    document.body.style.background = "yellow";
  } else if (randomNumber == 4) {
    document.body.style.background = "aqua";
  } else if (randomNumber == 5) {
    document.body.style.background = "tan";
  }
}
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
window.setInterval(printQuote(), 30000);
