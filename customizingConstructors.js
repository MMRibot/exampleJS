/*
Customizing Constructors
In addition to the basic Object constructor, we can define our own custom constructors. These are helpful for two reasons:

We can assign our objects properties through parameters we pass in when the object is created.
We can give our objects methods automatically.
These both work to save us time and lines of code when we make objects.

Instructions
Notice that without the constructor, it takes us 3 lines of code to make harry_potter, an object that represents Harry Potter book 1.

Then in line 7 we introduce a constructor for a Book object, where we pass in the pages and author properties as parameters.

Use this constructor to make the_hobbit, a book with 320 pages by "J.R.R. Tolkien".
Notice by using the constructor you can do this in only one line instead of three!
*/

// 3 lines required to make harry_potter
//the object literal notation is preferable.
var harry_potter = new Object(); 
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R.Tolkien");
