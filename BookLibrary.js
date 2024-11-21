function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? 'already read':'not read yet'}`;
    }
}

Book.prototype.sayWow = () => {
    return `Wow Hello!!!`;
}

Object.getPrototypeOf(Book.prototype) === Object.prototype;

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

console.log(theHobbit.valueOf()); 
