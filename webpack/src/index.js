import myName from "./myName";

function comoponent() {
  const element = document.createElement("div");
  element.textContent = myName("Anurag");

  return element;
}

document.body.appendChild(comoponent());
