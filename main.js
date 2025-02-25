const myLibrary = [];

function Book(title, author, numOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary(title, author, numOfPages, hasBeenRead) {
  const newBook = new Book(title, author, numOfPages, hasBeenRead);
  myLibrary.push(newBook);
}

addBookToLibrary("Memoirs of a Geisha", "Arthur Golden", 428, true);
addBookToLibrary("A Delicate Truth", "John le Carre", 310, false);
console.log(myLibrary);

const bookList = document.getElementById("book-list");
myLibrary.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author}, ${
    book.numOfPages
  } pages, ${book.hasBeenRead ? "Read" : "Not Read"}`;
  bookList.appendChild(li);
});
