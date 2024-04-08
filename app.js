const create = document.querySelector('.create-card');
const libraryGrid = document.querySelector('.library-grid');
create.onclick = () =>{
    dialog.showModal();
}
const dialog = document.querySelector('dialog');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');
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
cancelButton.onclick = () => {
    dialog.close();
    event.preventDefault();
}
