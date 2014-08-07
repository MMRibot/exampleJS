var friends = {
    nelson : {
        firstName: "Nelson",
        lastName: "Correia",
        age: 30,
        number: "(222) 444-5555",
        address: ["104 Mary Datchelor Close", "SE5 7DY", "London"]
    },
    samuel : {
        firstName: "Samuel",
        lastName: "Fernandes",
        age: 30,
        number: "(222) 444-6666",
        address: ["Somewhere near Westminster", "Centre London", "London"]
    },
    bill : {
        firstName: "Bill",
        lastName: "Foobar",
        age: 30,
        number: "(222) 444-7777",
        address: ["Somewhere near Cambden", "North East London", "London"]
    },
    steve : {
        firstName: "Steve",
        lastName: "Boonanza",
        age: 30,
        number: "(222) 444-8888",
        address: ["Somewhere near Chelsea", "North West London", "London"]
    }
};

//function that list all the properties in the passed object
var list = function (obj){
    for(var prop in obj){
      //for each prop in the obj log their names
        console.log(prop);
    }
};

var search = function (name, obj) {
  for(var prop in obj){
    //if the first name of the property is the same as the searched name, the return the string with firstname, age and addrees parsed to a string because it is an array
    if(obj[prop].firstName === name) {
        //console.log(obj[prop]);
        return "This is " + obj[prop].firstName + " who is " + obj[prop].age + " and lives in " + obj[prop].address.toString();
    } else {
      //if the searched name does not exist, display the message!
        return "There is no such person in this book!";
    }
  }
};
