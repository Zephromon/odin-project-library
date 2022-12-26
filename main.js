let myLibrary = [];

function Book(_title, _author, _pages, _read) {
  const book = document.createElement("div");
  book.className = "book";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "Title: " + _title;

  const author = document.createElement("div");
  author.className = "author";
  author.textContent = "Author: " + _author;

  const pages = document.createElement("div");
  pages.className = "pages";
  pages.textContent = "Pages: " + _pages;

  const read = document.createElement("div");
  read.className = "read";
  read.textContent = "Read?: " + _read;

  const delete_button = document.createElement("button");
  delete_button.type = "button";
  delete_button.textContent = "X";
  buttons.class = `book-${1 + myLibrary.length}`;

  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(read);
  book.appendChild(delete_button);

  book.class = `book-${1 + myLibrary.length}`;
  myLibrary.push(book);

  return book;
}

document.querySelector("#submit").addEventListener("click", function () {
  const book_container = document.querySelector("#book-container");

  const title_input = document.querySelector("#title-input").value;
  const author_input = document.querySelector("#author-input").value;
  const pages_input = document.querySelector("#pages-input").value;
  const read_input = document.querySelector("#read-input").value;

  book_container.appendChild(
    Book(title_input, author_input, pages_input, read_input)
  );
});

const delete_buttons = document.querySelectorAll(".book > button");

for (let i = 0; i < delete_buttons.length; i++) {}
