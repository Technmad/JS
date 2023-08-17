const Library = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  console.log("submit btn is clicked");
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.value
  );
  Library.push(newBook);
  // looping over each book
  for (let i = 0; i < Library.length; ++i) {
    displayBooks(Library[i]);
  }
}

function displayBooks(items) {
  // display book info in form of grid
  console.log(items);
}

function clearForm() {}

const newBookBtn = document.querySelector("#new-book-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

submitBtn.addEventListener("click", addBookToLibrary);
