
let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let addBook = document.getElementById("add-book");

addBook.addEventListener("click", (event) => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numPages = document.getElementById("numPages").value;
    let hasRead = document.getElementById("read").value;

    addBookToLibrary(new Book(title, author, numPages, hasRead));
    displayLibrary();
});


function displayLibrary() {
    let displayContainer = document.getElementById("display-catalog");
    let displayDiv = document.createElement("div");
    myLibrary.forEach(book => {
        let info = "";
        for(let key in book) {
            info += book[key];            
        }
        displayDiv.textContent = info;
        displayContainer.appendChild(displayDiv);
    })
}

document.onload = displayLibrary();