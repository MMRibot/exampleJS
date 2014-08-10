/*
Fun with Functions
Recall that we can add methods (i.e., functions associated with objects) to a constructor:

function someObject() {

  this.someMethod = function() {
  };

}
Suppose we said var someObj = new someObject();. When we call someObj.someMethod(), the code between the curly brackets { } above will run.

Instructions
Add a speak method to the Person constructor. Whenever speak is called, it should print "Hello!" to the console.

*/

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!");
    };
}

var user = new Person("Codecademy Student",false);
user.speak();

/*
Literally Speaking

In the last exercise, we added methods to objects via constructor notation. We can also add methods to objects in literal notation:

var someObj = {

aProperty: value,
someMethod: function(some, params) { }

};
When we call someObj.someMethod(some, values);, the code between the curly brackets { } will run.

Note here we see a method that takes parameters. Methods defined in both constructors and literal notation can take parameters,
just like normal functions.

Instructions
Take a look at the partially-defined james object. Complete the speak method such that the last two lines in the editor will cause
"Hello, I am feeling great" and "Hello, I am feeling just okay" to be printed to the console.

*/

var james = {
    job: "programmer",
    married: false,
    speak: function(feeling) {
        console.log('Hello, I am feeling ' + feeling);
    }
};

james.speak("great");
james.speak("just okay");


/*
Can I See Your References?

Remember when defining a method for an object, it's easy to reference other properties in that object: just use this.propertyName!

When that method is called, this.propertyName will always refer to the most recent value of propertyName.

Instructions
Take a look at the james object. Complete the sayJob method so that it will print to the console "Hi, I work as a [job]",
where [job] is the value of the job property.

Then in line 14, change the job for james to "super programmer". Although the method calls in lines 11 and 17 are exactly the same,
their output should be different because James' job changed!

*/

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log('Hi, I work as a ' + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();
