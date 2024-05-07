let bot = document.getElementById("bot");
bot.addEventListener("click", blue);

function blue() {
  let count = document.getElementById("count").value;
  let a = count;
  if (a >= "") {
    document.getElementById("boot").innerHTML = a.length;
  }
}
blue();
