const Library = [];

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

  // looping over each book
  for (let i = 0; i < Library.length; ++i) {
    displayBooks(Library[i]);
  }
}

function displayBooks(items) {
  // display book info in form of grid
  console.log(items);
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  readStatus.value = "";
}

const newBookBtn = document.querySelector("#new-book-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

submitBtn.addEventListener("click", addBookToLibrary);
