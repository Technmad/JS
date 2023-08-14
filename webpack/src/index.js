import myName from "./myName";
import "./style.css";

function comoponent() {
  const element = document.createElement("div");
  element.textContent = myName("Anurag");
  element.classList.add("hello");
  return element;
}

document.body.appendChild(comoponent());
