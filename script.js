// Book Constructor
function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
};
// Handle UI Tasks
const myLibrary = [
  {
    title: "Book one",
    author: "John Smith",
    pages: "123"
  },
  {
    title: "Book two",
    author: "Jane Doe",
    pages: "456"
  },
  {
    title: "The Name of The Wind",
    author: "Patrick Rothfuss",
    pages: "600"
  }
];

const books = myLibrary;

books.forEach((book) => {
  addBookToLibrary(book);
});

function addBookToLibrary(book){
  const $bookList = document.querySelector(".book-list");

  const $card = document.createElement("div");
  $card.classList.add("book-card");

  $card.innerHTML = `
  <h3 class="book-title">${book.title}</h3>
  <h3 class="book-author">${book.author}</h3>
  <h3 class="book-pages">${book.pages}</h3>
  <div class="card-btn">
    <button class="toggle-read">Read</button>
    <button class="book-remove">Remove</button>
  </div>
  `;

  $bookList.appendChild($card);
};

// Store class: Handle Storage

// Event: Display Books
document.addEventListener("DOMContentLoaded", addBookToLibrary);

// Event: Add Book

// Event: Remove Book










/* const d = document;
const $bookShelf = d.querySelector(".books-grid"),
      $btnAdd = d.querySelector(".add-book-btn"),
      $modal = d.querySelector(".modal"),
      $overlay = d.querySelector(".overlay"),
      $newBook = d.querySelector(".add-new-book"),
      $btnRemove = d.querySelector(".book-remove"),
      $template = d.getElementById("card-template").content,
      $fragment = d.createDocumentFragment(),
      $addBookForm = d.querySelector(".form-add"); */

     // /* toggle read/notRead btn */
/* d.addEventListener("click", e => {
  const $toggleRead = d.querySelector(".toggle-read");
  if(e.target.matches(".toggle-read")){
    if ($toggleRead.textContent === "Read") {
      return $toggleRead.textContent = "Not Read";
    } else {
      return $toggleRead.textContent = "Read";
    }
  };
  if(e.target.matches(".add-book-btn")){
    $modal.classList.add("is-active");
    $overlay.classList.add("active");
    return;
  };
  if(e.target.matches(".modal-close")){
    $modal.classList.remove("is-active");
    $overlay.classList.remove("active");
    $addBookForm.reset();
  };
  if(e.target.matches(".book-remove")){

  }
});

let myLibrary = [];
let newArr = [];
let bookObj = {}; */

// /* form submit */
/* $addBookForm.addEventListener("submit", e => {
  const $inputTitle = d.getElementById("input-title").value,
    $inputAuthor = d.getElementById("input-author").value,
    $inputPages = d.getElementById("input-pages").value;


  e.preventDefault();
  myLibrary.push({title:$inputTitle, author:$inputAuthor, pages:$inputPages});
  $addBookForm.reset();

  $modal.classList.remove("is-active");
  $overlay.classList.remove("active");

  console.log(myLibrary);
  addBookToLibrary();
  myLibrary = [];
}); */

/* function addBookToLibrary() {
  if(myLibrary.length !== 0){
    myLibrary.forEach(el => {
      // console.log(el.title);
      $template.querySelector(".book-title").textContent = el.title;
      $template.querySelector(".book-author").textContent = el.author;
      $template.querySelector(".book-pages").textContent = el.pages;
      $template.querySelector(".toggle-read").dataset.id = el.id;
      $template.querySelector(".book-remove").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $bookShelf.appendChild($fragment);
  }
  return;
} */