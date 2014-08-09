/*
Passing Objects into Functions
In addition to making arrays of Objects, we can use objects as parameters for functions as well.
That way, these functions can take advantage of the methods and properties that a certain object type provides.

To see an example, take a look at the console. In addition to our Person constructor we have introduced a new function, ageDifference (line 9).
This function takes two Person objects as parameters, and returns the difference in age between the two people.

Notice we would be in trouble here if we tried to call ageDifference and passed in strings instead of people,
because strings don't have an age property. But because we know from our constructor that all Person objects will have an age property,
we can pass any Person into ageDifference. We must be careful not to pass anything but Person objects into ageDifference.
*/

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if(person1.age === person2.age) {
        return person1.age;
    }
    if(person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;
    }
};

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);

console.log(diff);
