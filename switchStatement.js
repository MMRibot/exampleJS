/*

The switch statement is put together like this:

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
JavaScript will try to match the expression between the switch()
parentheses to each case. It will run the code below each case if it finds a match,
and will execute the default code if no match is found.

*/

/*
All on your own
Great work! Now it's time to put a switch statement together all on your lonesome.

Instructions
Create your own switch statement in the editor. It can do anything you like! Make sure to include at least three cases and a default.

*/

// Write your code below!
var fruit = prompt("Choose a fruit!");

switch(fruit) {
    case "Apples":
        console.log("I love " + fruit);
        break;
    case "Bananas":
        console.log("I love " + fruit);
        break;
    case "Mangos":
        console.log("I love " + fruit);
        break;
    default:
        console.log("Please select another fruit");
        break;
}
