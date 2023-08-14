import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function comoponent() {
  const element = document.createElement("div");
  element.textContent = myName("Anurag");
  element.classList.add("hello");

  // adding image to the file
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  return element;
}

document.body.appendChild(comoponent());
