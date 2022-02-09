// Book Constructor
function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
};

// Handle UI Tasks
const myLibrary = [
  {
    title: "book 1",
    author: "John Doe",
    pages: "123"
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
    <button class="read">Read</button>
    <button class="remove">Remove</button>
  </div>
  `;

  $bookList.appendChild($card);
};

function deleteBook(el) {
  if(el.classList.contains("remove")) {
    el.parentElement.parentElement.remove();
  }
};

// Store class: Handle Storage

// Event: Display Books
//document.addEventListener("DOMContentLoaded", addBookToLibrary);

// Modal Window
const $modalBtn = document.querySelector(".book-btn-modal");
const $modal = document.querySelector(".modal");
const $overlay = document.querySelector(".overlay");

$modalBtn.addEventListener("click", e => {
  $modal.classList.add("is-active");
  $overlay.classList.add("active");
});

//Close Modal Window
document.querySelector(".modal-close").addEventListener("click", (e) => {
  $modal.classList.remove("is-active");
  $overlay.classList.remove("active");
  $addBookForm.reset();
});

// Event: Add New Book
$addBookForm = document.querySelector(".form-add");
$addBookForm.addEventListener("submit", (e) => {
  //Prevent actual Submit
  e.preventDefault();
  const $title = document.getElementById("title").value,
        $author = document.getElementById("author").value,
        $pages = document.getElementById("pages").value;

  if($title === "" || $author === "" || $pages === ""){
    alert("Please fill in all fields");
  } else {
    //Book Instance
    const book = new Book($title, $author, $pages);
    addBookToLibrary(book);
  
    //Close Modal
    $modal.classList.remove("is-active");
    $overlay.classList.remove("active");
    $addBookForm.reset();
  }
});


// Event: Toggle Read
document.querySelector(".read").addEventListener("click", (e) => {
  if(e.target.textContent !== "Read"){
    e.target.textContent = "Read"
  } else {
    e.target.textContent = "Not Read"
  };
});

// Event: Remove Book
document.querySelector(".book-list").addEventListener("click", e => {
  deleteBook(e.target);
});