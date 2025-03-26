window.onload = function () {
  const body = document.querySelector("body");

  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  button.textContent = "Aggiungi";
  input.placeholder = "Nuova Task";

  form.appendChild(input);
  form.appendChild(button);
  body.appendChild(form);

const handleBtnClick = function (e){
    console.log ("cliccato");
}

  const div = document.createElement("div");
  const ul = document.createElement("ul");

  div.id = "divTasks";
  body.appendChild(div);
};

console.log("ciao");
