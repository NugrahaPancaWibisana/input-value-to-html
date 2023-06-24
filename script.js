const inputBox = document.getElementById("inputBox");
const valueList = document.getElementById("valueList");

function addValue() {
  if (inputBox.value === "") {
    alert("TOLONG DI ISI VALUE ANDA!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    valueList.appendChild(li);
    inputBox.value = "";
  }
}
