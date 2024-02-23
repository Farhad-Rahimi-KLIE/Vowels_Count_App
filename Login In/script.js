let login = document.getElementById("www");
let bgBtn = document.querySelector(".container");
let cancel = document.getElementById("vvv");
login.addEventListener("click", () => {
  bgBtn.classList.add("bg-active");
});
cancel.addEventListener("click", () => {
  bgBtn.classList.remove("bg-active");
});

function logaan() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemarray = [];
    itemarray.push([user, pass]);
    localStorage.setItem("itemjson", JSON.stringify(itemarray));
  } else {
    let itemarraystr = localStorage.getItem("itemjson");
    itemarray = JSON.parse(itemarraystr);
    itemarray.push([user, pass]);
    localStorage.setItem("itemjson", JSON.stringify(itemarray));
  }
}
