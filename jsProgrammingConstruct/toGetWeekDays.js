const prompt = require('prompt-sync')();
const number = parseFloat(prompt("Enter number: "));

switch(number){
    case 1:
        console.log("sunday")
        break;
    
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thrusday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("wrong input")
    
}