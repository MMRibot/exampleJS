/*

DRY Penguins

Creating a brand new Penguin was nice, but we did end up reusing a lot of the same
code as the Animal class. This goes against the "DRY" principle of programming: Don't Repeat Yourself.

Inheritance can help us here! A Penguin is an Animal, so they should have all the same
properties and methods as Animal. Whenever this X is-a Y relationship exists, there's a
good chance that we should be using inheritance.

Remember, inheritance lets us see and use properties and methods from another class.
To say that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.


Instructions

Create a new Penguin class. The Penguin constructor can be more unique than the generic
Animal one because all penguins have 2 legs. Your constructor should only take a name parameter,
and within the constructor itself, set this.numLegs to 2.

Set the Penguin class's prototype to a new instance of Animal by adding this line after you make the constructor:

Penguin.prototype = new Animal();

This means that Penguin inherits properties and methods from Animal.

*/

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();




/*
We never defined a sayName method for Penguin, but what happens when we try to call it?

Instructions
Create a Penguin object with the variable name penguin and any name you'd like.

Then call penguin.sayName();.

Then be amazed.
*/

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

//Define a penguin object with the variable name penguin
var penguin = new Penguin("Ice Cream");

penguin.sayName();




/*

We saw in the last exercise how Penguin inherited the sayName method from Animal.
We now explore how classes can inherit properties as well.

For simplicity, we've defined a new Penguin class that doesn't inherit anything from Animal.


Instructions

Create an Emperor class that takes a single name parameter and sets its name property to be this value.
Don't set a numLegs property in the constructor.

Similar to what we did in the previous exercise, make Emperor inherit from Penguin by setting the prototype of Emperor to be Penguin.

Create a new emperor object that is an instance of the Emperor class with any name you'd like.
Then use console.log to print the number of legs emperor has—this should have been inherited from Penguin!

*/

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has.
var emperor = new Emperor("Big boss");
console.log(emperor.numLegs); //2




/*
A penguin is an animal and an emperor penguin is a penguin. Are emperor penguins animals too? Of course!

The "prototype chain" in JavaScript knows this as well. If JavaScript encounters something it can't find in
the current class's methods or properties, it looks up the prototype chain to see if it's defined in a class that
it inherits from. This keeps going upwards until it stops all the way at the top: the mighty Object.prototype
(more on this later). By default, all classes inherit directly from Object, unless we change the class's prototype,
like we've been doing for Penguin and Emperor.

Let's see how going up the prototype chain works! We've defined some classes and inheritance patterns:
Emperor inherits from Penguin which inherits from Animal. We've also created an instance of the Emperor class.
*/

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true
