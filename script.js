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

      /* toggle read/notRead btn */
d.addEventListener("click", e => {
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
let bookObj = {};

/* form submit */
$addBookForm.addEventListener("submit", e => {
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
});

function addBookToLibrary() {
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
}