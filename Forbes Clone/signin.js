let Submit = document.getElementById("submit");
Submit.addEventListener("click", () => {
  let Name = document.getElementById("name").value;
  let Password = document.getElementById("password").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemArr = [];
    itemArr.push([Name, Password]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  } else {
    let itemStr = localStorage.getItem("itemjson");
    itemArr = JSON.parse(itemStr);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  }
});
