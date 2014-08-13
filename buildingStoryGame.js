/*
After your prompt, add a switch statement that will test for several different cases (that is, different possible user inputs).
Create as many as you like! (Do at least three.)
Don't forget to include a default block at the end that will provide a response if the user's choice doesn't match one of your cases.
*/






var user = prompt("You are in a foreign and strange land. What is your skill? MAGE, SWORDSMAN, ARCHER?").toUpperCase();

switch(user) {
    case "MAGE":
        var adventure = prompt("We set off into the kingdom. You encounter a giant. What spell do you use? SHRINKABLE or INFLAMABLE?").toUpperCase();
        if(adventure === 'SHRINKABLE') {
            console.log("Good work, you shrunk the giant and now you can beat him!");
        } else if(adventure === 'INFLAMABLE') {
            console.log("Bad choice. Giants are impervious to flames! You just pissed-off a giant. You get crushed!");
        }
        break;

    case "SWORDSMAN":
        var adventure = prompt("We set off into the kingdom. You encounter a group of tribsmen. Do you FIGHT them or do you offer PEACE?").toUpperCase();
        if(adventure === 'FIGHT') {
            var sharp = prompt("Is your blade sharp? YES or NO").toUpperCase();
            var quick = prompt("Are you quick with a blade? YES or NO").toUpperCase();
            if(sharp === 'YES' && quick === 'YES'){
              console.log("You have good skills and defeat some men before the rest ask you to join them.");
            } else if (sharp === 'NO' || quick === 'NO'){
              console.log("You lose. You are a poor swordsman! They are too many");
          }else if (adventure === 'PEACE') {
              console.log("You made the right choice! Those are not just nay group of worriors! They are the elite blood bringgers! You live to play another day.");
          }
        }
        break;

    case "ARCHER":
        var adventure = prompt("We set off into the kingdom. You run into a bear. Do you draw your bow? YES or NO?").toUpperCase();
        if(adventure === 'YES'){
            var aim = prompt("Do you aim for the HEART or the HEAD?").toUpperCase();
            if(aim === 'HEART') {
                console.log("Good choice! You kill the bear!");
            } else if (aim === 'HEAD') {
                console.log("You idiot. Bears have thick skulls and you are not Robin Hood! You die!");
            }
        } else if(adventure === 'NO'){
            console.log("Walk away quietly and no one dies!");
        }
        break;

    default:
        console.log("Please choose a character and hit run again!");
        break;
}
