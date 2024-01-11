console.log("hello World");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let Fname = document.getElementById("fname").value;
  let Lname = document.getElementById("lname").value;
  let number = parseInt(document.getElementById("Number").value);
  if (localStorage.getItem("itemjson") == null) {
    let itemArr = [];
    itemArr.push([Fname, Lname, number]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  } else {
    let itemStr = localStorage.getItem("itemjson");
    itemArr = JSON.parse(itemStr);
    itemArr.push([Fname, Lname, number]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  }
});
