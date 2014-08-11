/*
Getting IN-timate

Now let's learn how to work with all the properties that belong to an object. First, let's define an object:

var dog = {
species: "bulldog",
age: 3,
color: brown
};
To print out all elements, we can use a for/in loop, like this:

for(var property in dog) {
  console.log(property);
}
In the loop we use console.log to print out each key. Remember the "property" bit can be any placeholder name you like.

Instructions

Use a for-in loop to print out all the properties of nyc.

*/

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var prop in nyc){
    console.log(prop);
}

//This literally only prints the properties of nyc, NOT the values of those properties. So the output of this loop will be:

// fullName
// mayor
// population
// boroughs


/*

But how do we print out all the values associated with every property? Surprise!

The for-in loop will be our friend again! Let's get there slowly. Our dog object can help us.

var dog = {
species: "bulldog",
age: 3,
color: brown
};
First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";

We see that by assigning the property name to a variable, we can then use the variable name in bracket notation to get the property's value.
So to get all the values from the dog object, we would use the for-in loop and the bracket notation we just saw above.
See the hint to see the code to print the property values for dog.

Instructions
Write another for-in loop, but this time print the value of each property in nyc.

*/

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for(var prop in nyc) {
    console.log(nyc[prop]);
  //In the for/in loop we need to use the bracket notation because we have set the properties to a variable inside of the for loop (var prop)
  //We are assigning the property name to a variable, which we choose to call 'prop'
}


/*
Objects aren't so foreign if you really think about it!

Remember you can figure out the type of a variable by using typeof myVariable;.
Types we are concerned with for now are "object", "string", and "number".

Recall the for-in loop:

for(var x in obj) {
executeSomething();
}
This will go through all the properties of obj one by one and assign the property
name to x on each run of the loop.

Let's combine our knowledge of these two concepts.

Instructions
Examine the languages object. Three properties are strings, whereas one is a number.

Use a for-in loop to print out the three ways to say hello. In the loop, you should check
to see if the property value is a string so you don't accidentally print a number.
*/


var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var prop in languages) {
  // we have to check the values of the prop and not the prop itself
    if(typeof languages[prop] === "string") {
        console.log(languages[prop]);
    }
}
