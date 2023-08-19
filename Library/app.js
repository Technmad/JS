const Library = [];

const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  "150",
  "Not read"
);

//constructor
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  console.log("submit btn is clicked");
  if (title.value.length === 0 || author.value.length === 0) {
    alert("Please, fill all the fields");
  }

  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.value
  );

  // adding book to array
  Library.push(newBook);
}

const newBookBtn = document.querySelector("#new-book-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
// const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");
const bookForm = document.querySelector("form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  clearForm();
});

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  readStatus.value = "";
}

function displayBooks() {
  // display book info in form of grid
  const display = document.getElementById("display-container");

  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  // looping over each book
  for (let i = 0; i < Library.length; i++) {
    createCards(Library[i]);
  }
}

function createCards(items) {
  const displayCards = document.getElementById("display-container");

  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readStatus = document.createElement("button");
  const remove = document.createElement("button");
  // const edit = document.createElement("button");

  bookCard.classList.add("book");
  bookCard.setAttribute("id", Library.indexOf(items));

  title.textContent = items.title;
  title.classList.add("title");
  bookCard.appendChild(title);

  author.textContent = items.author;
  author.classList.add("author");
  bookCard.appendChild(author);

  pages.textContent = items.pages;
  pages.classList.add("pages");
  bookCard.appendChild(pages);

  readStatus.classList.add("read-btn");
  bookCard.appendChild(readStatus);

  // read status
  if (items.read == false) {
    readStatus.textContent = "Not Read";
    readStatus.style.backgroundColor = "red";
  } else {
    readStatus.textContent = "Not Read";
    readStatus.style.backgroundColor = "green";
  }

  // remove card
  remove.textContent = "Remove";
  remove.setAttribute("id", "remove-card");
  bookCard.appendChild(remove);

  displayCards.appendChild(bookCard);

  remove.addEventListener("click", () => {
    Library.splice(Library.indexOf(items), 1);
    displayBooks();
  });

  readStatus.addEventListener("click", () => {
    items.read = !items.read;
    displayBooks();
  });
}
