let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', ()=>{
  let nweBookForm = document.querySelector('new-book-form')
})


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

}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"