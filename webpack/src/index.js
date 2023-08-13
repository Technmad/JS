import myName from "./myName";

function comoponent() {
  const element = document.createElement("div");
  element.textContent = myName("cody");
  return element;
}

document.body.appendChild(comoponent());
