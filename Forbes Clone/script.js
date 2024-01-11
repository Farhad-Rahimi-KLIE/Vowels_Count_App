//Initialize the Variables
let Menu = document.getElementById("menu");
let jan = document.querySelector(".menujan");
let Close = document.querySelector(".close");
let Bilionaire = document.querySelector(".bilionaire");
let Left = document.querySelector(".left");
let Up = document.querySelector(".up");
let Pushh = document.querySelector(".pushh");

// for Bilionaire
Menu.addEventListener("click", () => {
  jan.classList.add("bg-active");
  Close.classList.add("bg-faal");
});

Close.addEventListener("click", () => {
  jan.classList.remove("bg-active");
  Close.classList.remove("bg-faal");
});
Left.addEventListener("click", () => {
  Bilionaire.classList.add("bilo");
  Up.classList.add("koo");
});
Pushh.addEventListener("click", () => {
  Bilionaire.classList.remove("bilo");
  Up.classList.remove("koo");
});

// for Innovation
let Right = document.querySelector(".right");
let Innovation = document.querySelector(".innovation");
let EE = document.querySelector(".ee");
let PPP = document.querySelector(".ppp");

Right.addEventListener("click", () => {
  Innovation.classList.add("inno");
  EE.classList.add("hoho");
});

PPP.addEventListener("click", () => {
  Innovation.classList.remove("inno");
  EE.classList.remove("hoho");
});
// for Leadership
let AAA = document.querySelector(".aaa");
let Leadership = document.querySelector(".leadership");
let JJ = document.querySelector(".jj");
let KKK = document.querySelector(".kkk");

AAA.addEventListener("click", () => {
  Leadership.classList.add("ddd");
  JJ.classList.add("ll");
});

KKK.addEventListener("click", () => {
  Leadership.classList.remove("ddd");
  JJ.classList.remove("ll");
});
