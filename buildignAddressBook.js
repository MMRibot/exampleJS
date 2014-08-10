//As a tutorial exercise, we will now build a minimilistic Address Book.
//We will define several funcitons as follows

//First we create two contacs to populate our "local database", which is an array of objects, which are in turn our cotacts.
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

//Here we populate ou array.
var contacts = [bob, mary];

//Define a function to print the details (fist name and last name) of our contacs.
//This function takes a single parameter (person) and prints into the console the first and last names of that person.
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

//Define a function to list all the cotacts available in our contact list.
function list() {
  //we store the length of our array in a variable so that we only need to calculate this once when iterating through all the contacts in our list
  //this will become significant as the list grows larger
    var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
    //print the contact corresponding to each index (i) in contacts
		printPerson(contacts[i]);
	}
}

//Create a search function based on the last name (normally last names are unique, so it makes sense)
function searchPerson (lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++){
      //set a condition that we only retrieve the last name if it already exists in out contact list
        if(lastName !== contacts[i].lastName){
          continue; //continue iteration
        } else {
          printPerson(contacts[i]);
        }
    }
}

//Create a function that takes four parameters and adds them to the object which is then passed into the contacts array by means of the push() method.
function addPerson (firstName, lastName, phoneNumber, email) {
    //define our object to be passed into contacts array
    var newPerson = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
        };
    var contactsLength = contacts.length;
    //Here we iterate through our contact list and compare it to our newly created contact to see if a person with that number already exists.
    //Some people can have two phone numbers, but no phone number is the same.
    for(var i = 0; i < contactsLength; i++){
      //we set the condition to compare the input phoneNumber with the existing phone numbers and return an answer if it already exists
        if(phoneNumber === contacts[i].phoneNumber){
        return console.log("A person with that number already exists!");
        }
    }
    //if the number doesn't exist, we add the newly created person to our contacts
    return contacts.push(newPerson);
}

//call the functions
addPerson ('Banana', 'Smoothie', '(650) 333-3333', 'bSmoothie@example.com');

list();

searchPerson('Smoothie'); 
