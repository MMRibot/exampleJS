/*
Using a constructor function to create a module that creates 'Persons'
We then use a for lop to iterate through our array family and print out the values of the name key
*/

// Our Person constructor
function Person (name, age) {
  //by usgin this we an call this method on any object. 'this' will refere to the context, which will be the object on which we are calling the function
    this.name = name;
    this.age = age;
}
var family = [ ];
// Now we can make an array of people
family[0] = new Person('alice', 40);
family[1] = new Person('bob', 42);
family[2] = new Person('michelle', 8);
family[3] = new Person('timmy', 6);

// loop through our new array
for(var i = 0; i < family.length; i++) {
    //iterate through all the indexes in family and printing each property 'name' for each index
    console.log(family[i].name);
}
