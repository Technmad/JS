import myName from "./myName";
import printMe from "./print.js";

function comoponent() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.textContent = myName("Anurag");

  btn.innerHTML = "click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(comoponent());
