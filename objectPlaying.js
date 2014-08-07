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

var list = function (obj){
    for(var prop in obj){
        console.log(prop);
    }
};

var search = function (name, obj) {
  for(var prop in obj){
    if(obj[prop].firstName === name) {
        //console.log(obj[prop]);
        return "This is " + obj[prop].firstName + " who is " + obj[prop].age + " and lives in " + obj[prop].address.toString();
    } else {
        return "There is no such person in this book!";
    }
  }
};
