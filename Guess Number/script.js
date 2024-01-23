let enter = document.getElementById("enter");
let again = document.getElementById("again");
let output = document.getElementById("output");

let RandomNumber = Math.ceil(Math.random() * 100);

let Guess = () => {
  let input = document.getElementById("user").value;
  if (input == RandomNumber) {
    output.innerHTML = "Yes You are Correct." + RandomNumber;
    output.style.color = "green";
  } else if (input > RandomNumber && input < 100) {
    output.innerHTML = "Yuo are Higher";
  } else if (input < RandomNumber && input > 1) {
    output.innerHTML = "Yuo are Lower";
  } else if (input > 1) {
    output.innerHTML = "Higher";
  } else {
    output.innerHTML = "Dont Won";
  }
};

enter.addEventListener("click", Guess);
again.addEventListener("click", () => {
  window.reload();
});
