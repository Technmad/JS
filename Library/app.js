const Library = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  const newBook = new Book(title, author, pages, read);
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

const newBookBtn = document.querySelector("#new-book-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
const submitBtn = document.querySelector("#submit-btn");
