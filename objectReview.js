/*
An Objective Review
Let's review the basics of objects covered in our previous lesson on objects.
Recall we can create objects using either literal notation or constructor notation.

Literal notation creates a single object. Literal notation uses curly brackets { } and
the object's default properties are defined within the brackets using property:value notation.
Constructor notation involves defining an object constructor. And like defining a function,
we use the function keyword. You can think of this constructor as a "template" from which you can create multiple objects.
To create a new object from a constructor, we use the new keyword.

Instructions
Finish the james object by adding properties to it. His job should be "programmer" and should have a married property set to false.

*/

var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person('student', true);

/*

Who's in Your Bracket?

And finally, let's go over retrieving property values. Throughout this section,
we've been using dot notation to get the value of an object's property:

someObj.propName;
However, remember that we can also use bracket notation:

someObj["propName"];
An advantage of bracket notation is that we are not restricted to just using strings in the brackets.
We can also use variables whose values are property names:

var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];
The last line is exactly the same as using someObj["propName"];.

Instructions
Take advantage of the ability to use variables with bracket notation.

In line 7, set aProperty to a string of the first property in james (ie. the job property).

Then print james's job using bracket notation and aProperty.

*/

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"

console.log(james[aProperty]);


/*

I.D., Please

Alright! Let's get our hands dirty and start exploring some really cool stuff about objects in JavaScript.
But before we can do that, how can we even tell if something is an object (as opposed to, say, a number or string)?
It would be great if we could tell what type something is in JavaScript. Good thing there's a handy built-in operator to do this!

Say we have a variable thing and we don't know what type thing is. We can call typeof thing to figure this out.
Generally, the most useful types are "number," "string," "function," and of course, "object."

As an example, the following example will print "object":

var someObject = {someProperty: someValue};
console.log( typeof someObject );
Instructions
In lines 3-6, we have an object, a number, and a string (in that order). Complete lines 7-9 so they will
print the appropriate types of these variables.

*/

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"

/*

You wouldn't know it, but every object in JavaScript comes with some baggage (stay tuned for more on this!).
Part of this baggage includes a method called hasOwnProperty. This lets us know if an object has a particular property.

We show how to use hasOwnProperty in the last two lines. It returns true or false, based on whether an object has a certain property.

Instructions
You should finish myObj by giving it a name property. Make sure that myObj does not have a nickname property so that the last line
will print false.

*/

var myObj = {
    // finish myObj
    name: "Someone"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

/*

Write an if statement that checks to see if suitcase has the shorts property.

If your if statement evaluates to true, print the value of the shorts property.

If your if statement evaluates to false, set the shorts property to any value you wish using dot notation.

Then print the value of the shorts property.

*/

var suitcase = {
    shirt: "Hawaiian"
};

if ( suitcase.hasOwnProperty("shorts") === true ) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "Bananas";
}

//OR

if ( !suitcase.hasOwnProperty("shorts") ) {
    suitcase.shorts = "Bananas";

} else {
 console.log(suitcase.shorts);   
}
