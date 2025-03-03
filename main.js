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
addBookToLibrary("Sapiens", "Yuah Noah Harari", 466, false);

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear table before adding new rows

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.numOfPages}</td>
          <td>${book.hasBeenRead ? "✔" : "❌"}</td>
          <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
          `;

    bookList.appendChild(row);
  });

  const deleteButton = document.querySelectorAll(".deleteBtn");
  deleteButton.forEach((button) => {
    button.addEventListener("click", deleteBook);
  });
}

function deleteBook(event) {
  const index = event.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBooks();
}

displayBooks();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Click has happened");
});
