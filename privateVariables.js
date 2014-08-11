/*
Private Variables

Good! But what if an object wants to keep some information hidden?

Just as functions can have local variables which can only be accessed from within that function,
objects can have private variables.
Private variables are pieces of information you do not want to publicly share, and they can
only be directly accessed from within the class.

The Person class has been modified to have a private variable called bankBalance.
Notice that it looks just like a normal variable, but it is defined inside the constructor for
Person without using this, but instead using var. This makes bankBalance a private variable.
*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person

var john = new Person("John", "Perkins", 34);
// try to print his bankBalance
console.log(john.bankBalance);


/*
Accessing Private Variables
Although we cannot directly access private variables from outside the class, there is a way to
get around this. We can define a public method that returns the value of a private variable.

Instructions
Here we have included similar code from last time, but here we have added a method getBalance.
Modify getBalance so that it returns bankBalance.

Then on line 17, create a new variable named myBalance and set its value to John's bank balance.
You can do this by calling your newly-defined getBalance method for john. Then print myBalance.

Line 14 should still print undefined!

*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);



/*
Private Methods

Why did that code work? An object's private variables can only be accessed by other methods that are part
of that same object. So, we just used an object's public method to access a private variable!

Methods can also be private within a class and inaccessible outside of the class. Changing this.returnBalance from
the last exercise to var returnBalance makes this method private. If you run the program trying to access the method
you get an undefined error this time.

The way to access a private method is similar to accessing a private variable. You must create a public method for the
class that returns the private method.

Instructions
Create a method called askTeller within the Person class that returns the returnBalance method. This means that it returns
the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.

Because askTeller returns a method, we need to call it to make it of any use. This is what var myBalance = myBalanceMethod(); does.

*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;

   // private variable
   var bankBalance = 7500;
   // private method
   var returnBalance = function() {
      return bankBalance;
   };

   // public method
   this.askTeller = function () {
       return returnBalance;
   };

}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);


/*
Passing Arguments
The askTeller function has been modified within the Person class to directly give you your balance.
However, it now needs the account password in order to return the bankBalance.

Instructions
Create a new variable called myBalance that calls the askTeller function with a password argument, 1234.

*/


function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function(pass) {
     if (pass === 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);
console.log(myBalance);
