import _ from "lodash";

function comoponent() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

document.body.appendChild(comoponent());
