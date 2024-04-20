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
    Book.read_status = false;
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

    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const bookPages = document.createElement('span');

    book.classList.add('book');
    cardBook.classList.add('card-book');

    book.appendChild(cardBook)

    bookTitle.innerHTML = `Title: ${newBook.title}`;
    bookAuthor.innerHTML = `Author: ${newBook.author}`;
    bookPages.innerHTML = `Pages: ${newBook.pages}`;

    cardBook.appendChild(bookTitle);
    cardBook.appendChild(bookAuthor);
    cardBook.appendChild(bookPages);

    read(newBook, book);
    del(book);

    libraryGrid.append(book);
    event.preventDefault();
}
function read(newBook, book){
    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    book.appendChild(readButton)

    readButton.onclick = () => {
        if(newBook.read_status === false){
            readButton.style.backgroundColor = '#9BB74F';
            newBook.read_status = true;
        }
        else{
            readButton.style.backgroundColor = '#b63535'
            newBook.read_status = false;
        }
    }
}

function del(book){
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    book.appendChild(deleteButton)

    deleteButton.onclick = (e) => {
        e.target.parentElement.remove();
        myLibrary.splice(e, 1);
    }
}