function getAndUpdate() {
  let gro = document.getElementById("grocerry").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemjsonArray = [];
    itemjsonArray.push([gro]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  } else {
    let itemjsonArraystr = localStorage.getItem("itemjson");
    itemjsonArray = JSON.parse(itemjsonArraystr);
    itemjsonArray.push([gro]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  }
  update();
}
function update() {
  if (localStorage.getItem("itemjson") == null) {
    let itemjsonArray = [];
    // itemjsonArray.push([gro]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  } else {
    let itemjsonArraystr = localStorage.getItem("itemjson");
    itemjsonArray = JSON.parse(itemjsonArraystr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemjsonArray.forEach((element, index) => {
    str += `
      <tr>
      <td>${element[0]}</td>
      <td><button class="btn btn-primary" onclick="deleted(${index})">delete</button></td>
  </tr>
      `;
  });
  document.getElementById("tableBody").innerHTML = str;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
  console.log("delete Item", itemIndex);
  let itemjsonArraystr = localStorage.getItem("itemjson");
  itemjsonArray = JSON.parse(itemjsonArraystr);
  itemjsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  update();
}
