document.body.onload = displayCatalog;

let myLibrary = [
    {
        title: "test",
        author: "jimmy",
        numPages: "42",
        read: false,
    }, 
    {
        title: "test",
        author: "jimmy",
        numPages: "42",
        read: false,
    }, 
    {
        title: "test",
        author: "jimmy",
        numPages: "42",
        read: false,
    }
];

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
    const catalog = document.getElementById("display-catalog");

    for(let obj in myLibrary) {
        let div = document.createElement("div");
        let text = "";
        for(let keys in obj) {
            console.log(obj[keys]);
            text += obj[keys];
        }
        div.textContent = text;
        catalog.appendChild(div);
    }
}