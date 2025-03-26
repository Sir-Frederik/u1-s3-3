// window.onload = function () {
//   const body = document.querySelector("body");

//   const form = document.createElement("form");
//   const input = document.createElement("input");
//   const button = document.createElement("button");

//   button.textContent = "Aggiungi";
//   input.placeholder = "Nuova Task";

//   form.appendChild(input);
//   form.appendChild(button);
//   body.appendChild(form);
const form = document.querySelector("form");
const list = document.getElementById("tasksList");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("submit");

  const inputNode = document.getElementById("newTask");
  console.log(inputNode.value);
};

console.log("ciao");
