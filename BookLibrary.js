let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');

newBookBtn.addEventListener('click', ()=>{
  newBookForm.style.display = "block";
  document.querySelector('#title').value = "";
  document.querySelector('#author').value = "";
  document.querySelector('#pages').value =  "";
  document.querySelector('#read').checked = false; 
});


const myLibrary =[];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author  != "" ? author : 'Anonymous';
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++ ){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `
        <div class="card">
        <h1>${book.title}</h1> 
        <p>by ${book.author}</p>
        <p>has ${book.pages} page/s</p>
        <p>${book.read ? 'Already read.' : 'Not yet read.'}</p>
        <button class="deleted" onclick="removeBook(${i})"><i class="ri-delete-bin-line"></i></button>
        <button onclick="toggleRead(${i})">Toggle Read</button>
        </div>
        `
        libraryBook.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

newBookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
    newBookForm.style.display = "none";
})