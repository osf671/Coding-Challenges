/* Create a Book constructor that has two properties :

Title
Author
and two methods:

A getter for title that returns: "Title: " + the instance title.
A getter for the author that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
Name the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP)
I would get the following properties and methods: */


class Book {
    constructor(public title: string, public author: string) {
      this.title = title;
      this.author = author;
    }
  
    get Title() {
      return `Title: ${this.title}`;
    }
  
    get Author() {
      return `Author: ${this.author}`;
    }

    set Author(str) {
        this.author = str;
    }
  }
  
  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');
  const HP = new Book('Harry Potter', 'J.K. Rowling');
  console.log(WP.Title)
  let x = HP.Author;
  HP.Author = 'Tony'

  

  