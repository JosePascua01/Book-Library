let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');

newBookBtn.addEventListener('click', ()=>{
  newBookForm.style.display = "block";
});


const myLibrary =[];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? 'already read':'not read yet'}`;
    }
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
}

newBookForm.addEventListener("submit", ()=>{
    event.preventDefault();
    addBookToLibrary();
})

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"