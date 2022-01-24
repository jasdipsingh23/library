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

function displayCatalog() {
    myLibrary.forEach(element => {
        console.log(element.title);
        console.log(element.author);
        console.log(element.numPages);
        console.log(element.read);
        console.log();
    })
}

let test1 = new Book("test", "jimmy", 3, "false");
let test2 = new Book("testy-test", "john", 300, "true");
let test3 = new Book("last", "jk", 250, "false");


addBookToLibrary(test1);
addBookToLibrary(test2);
addBookToLibrary(test3);

displayCatalog();