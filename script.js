const d = document;
const $bookShelf = d.querySelector(".books-grid"),
      $btnAdd = d.querySelector(".add-book-btn"),
      $modal = d.querySelector(".modal"),
      $overlay = d.querySelector(".overlay"),
      $newBook = d.querySelector(".add-new-book"),
      $btnRemove = d.querySelector(".book-remove"),
      $template = d.getElementById("card-template").content,
      $fragment = d.createDocumentFragment(),
      $addBookForm = d.querySelector(".form-add");

const $toggleRead = d.getElementById("toggle-read");

$toggleRead.addEventListener("click", e => {
  if ($toggleRead.textContent === "Read") {
    return $toggleRead.textContent = "Not Read";
  } else {
    return $toggleRead.textContent = "Read";
  }
});

let myLibrary = [];
let newArr = [];
let bookObj = {};

$addBookForm.addEventListener("submit", e => {
  const $inputTitle = d.getElementById("input-title").value,
    $inputAuthor = d.getElementById("input-author").value,
    $inputPages = d.getElementById("input-pages").value;


  e.preventDefault();
  myLibrary.push({title:$inputTitle, author:$inputAuthor, pages:$inputPages});

  $modal.classList.remove("is-active");
  $overlay.classList.remove("active");

  console.log(myLibrary);
  addBookToLibrary();
  myLibrary = [];
});

function addBookToLibrary() {
  if(myLibrary.length !== 0){
    myLibrary.forEach(el => {
      // console.log(el.title);
      $template.querySelector(".book-title").textContent = el.title;
      $template.querySelector(".book-author").textContent = el.author;
      $template.querySelector(".book-pages").textContent = el.pages;
      $template.getElementById("toggle-read").dataset.id = el.id;
      $template.querySelector(".book-remove").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $bookShelf.appendChild($fragment);
  }
  return;
}
      

      

$btnAdd.addEventListener("click", e => {
  $modal.classList.add("is-active");
  $overlay.classList.add("active");
});