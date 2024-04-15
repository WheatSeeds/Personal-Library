const create = document.querySelector('.create-card');
const libraryGrid = document.querySelector('.library-grid');

const dialog = document.querySelector('dialog');
const cancelButton = document.getElementById('cancel-button');

const form = document.querySelector("#form-book")

const myLibrary = [];

create.onclick = () =>{
    dialog.showModal();
}

form.addEventListener("submit", function(e) {
    const data = new FormData(form);
    const Book = Object.fromEntries(data)

    createBook(Book);
    myLibrary.push(Book);

    dialog.close();
    e.preventDefault();
})

cancelButton.onclick = () => {
    dialog.close();
    event.preventDefault();
}

function createBook(newBook){
    const book = document.createElement('div');
    const cardBook = document.createElement('div');
    const readButton = document.createElement('button');

    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const bookPages = document.createElement('span');

    book.classList.add('book');
    libraryGrid.append(book);
    cardBook.classList.add('card-book');
    book.appendChild(cardBook)
    readButton.classList.add('read-button');
    book.appendChild(readButton)

    bookTitle.innerHTML = newBook.title;
    bookAuthor.innerHTML = newBook.author;
    bookPages.innerHTML = newBook.pages;

    cardBook.appendChild(bookTitle);
    cardBook.appendChild(bookAuthor);
    cardBook.appendChild(bookPages);

    event.preventDefault();
}

