const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a text content";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const header = document.createElement("h3");
header.style.cssText = "color: blue";
header.textContent = "I'm a blue h3!";
container.appendChild(header);

const container1 = document.createElement("div");
container1.setAttribute("style", "background: pink; border: 1px");

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

container1.appendChild(header1);

const paragraph1 = document.createElement("p");
paragraph1.textContent = "ME TOO!";

container1.appendChild(paragraph1);
container.appendChild(container1);
