const create = document.querySelector('.create-card');
const libraryGrid = document.querySelector('.library-grid');

const dialog = document.querySelector('dialog');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');

const form = document.querySelector("#form-book")

create.onclick = () =>{
    dialog.showModal();
}

confirmButton.addEventListener('click', () => {
    dialog.close();

    const book = document.createElement('div');
    const cardBook = document.createElement('div');
    const readButton = document.createElement('button');

    book.classList.add('book');
    libraryGrid.append(book);
    cardBook.classList.add('card-book');
    book.appendChild(cardBook)
    readButton.classList.add('read-button');
    book.appendChild(readButton)
    event.preventDefault();


});
const myLibrary = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(this);
    console.log(data)
})

cancelButton.onclick = () => {
    dialog.close();
    event.preventDefault();
}

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}
