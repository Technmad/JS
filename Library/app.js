const Library = [];

//constructor
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

const newBookBtn = document.querySelector("#new-book-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
const bookForm = document.querySelector("form");
const overlay = document.getElementById("overlay");
const booksGrid = document.getElementById("booksGrid");
const popup = document.getElementById("popup");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.checked
  );

  if (Library.includes(newBook)) {
    errorMsg.textContent = "This book already exists in your library";
    errorMsg.classList.add("active");
    return;
  }

  // adding book to array
  Library.push(newBook);
  bookForm.reset();
  displayBooks();
  closePopUp();
}

function displayBooks() {
  // reset grid
  booksGrid.innerHTML = "";

  // looping over each book
  for (let i = 0; i < Library.length; i++) {
    createCards(Library[i]);
  }
}

function createCards(items) {
  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readStatus = document.createElement("button");
  const remove = document.createElement("button");

  bookCard.classList.add("book-card");
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
    readStatus.style.backgroundColor = "#e04f63";
    // readStatus.classList.add("btn-light-red");
  } else {
    readStatus.textContent = "Read";
    readStatus.style.backgroundColor = "#63da63";
    // readStatus.classList.add("btn-light-green");
  }

  // remove button
  remove.textContent = "Remove";
  remove.setAttribute("id", "remove-card");
  bookCard.appendChild(remove);

  booksGrid.appendChild(bookCard);

  remove.addEventListener("click", () => {
    Library.splice(Library.indexOf(items), 1);
    displayBooks();
  });

  readStatus.addEventListener("click", () => {
    items.read = !items.read;
    displayBooks();
  });
}

const openPopUp = () => {
  bookForm.reset();
  popup.classList.add("active");
  overlay.classList.add("active");
};

const closePopUp = () => {
  popup.classList.remove("active");
  overlay.classList.remove("active");
};

const handleKeyboardInput = (e) => {
  if (e.key === "Escape") closePopUp();
};

newBookBtn.onclick = openPopUp;
overlay.onclick = closePopUp;
window.onkeydown = handleKeyboardInput;
