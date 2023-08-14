import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";

function comoponent() {
  const element = document.createElement("div");
  element.textContent = myName("Anurag");
  element.classList.add("hello");

  // adding image to the file
  const myIcon = new Icon();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(comoponent());
