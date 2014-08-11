/*
Prototype to the Rescue
Here we have very similar code as last time, but there is an important difference.
Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even
though we haven't added a bark method to that object. How is this so? Because we have now changed
the prototype for the class Dog. This immediately teaches all Dogs the new method.

In general, if you want to add a method to a class such that all members of the class can use it,
we use the following syntax to extend the prototype:

className.prototype.newMethod =

function() {
statements;
};
*/

function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");

//we assign the bark method to the Dog constructor and because our new dogs are created using the
//constructor function Dog, they now inherit the method bark from it.
Dog.prototype.bark = function() {
  console.log("Woof");
};

buddy.bark(); //woof

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark(); //woof



/*

In object-oriented programming, inheritance allows one class to see and use the methods and
properties of another class. You can think of it as a child being able to use his or her parent's
money because the child inherits the money.

We will learn more about inheritance as we continue this lesson, but for now let's just
refresh our memories about how classes and objects work.

Instructions
Create a class named Animal with two properties, name and numLegs. The Animal constructor should
have two arguments whose values are assigned to name and numLegs.

Next, change the prototype of Animal and add a method sayName that prints to the console
"Hi my name is [name]", where [name] is the value of name.

Click "Stuck? Get a hint!" for examples of how to create a class and how to add a method to an object's prototype.

Finally, we have provided the last two lines to test your constructor and sayName method. Don't change these!

*/

// create your Animal class here
function Animal (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Animal.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);
};

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName(); //Hi my name is Captain Cook.


//OR you could create the method directly in the class Animal, but that would defeat the point of using prototype inherit

// create your Animal class here
function Animal (name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.sayName = function () {
        console.log('Hi my name is ' + this.name);
    };
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName(); //Hi my name is Captain Cook.
