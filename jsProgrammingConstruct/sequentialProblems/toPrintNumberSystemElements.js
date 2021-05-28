const prompt = require('prompt-sync')();
const number = parseFloat(prompt("Enter number 1 or 10 or 100 or 1000: "));

switch(number){
    case 1:
        console.log("unit")
        break;
    
    case 10:
        console.log("tens")
        break;
    case 100:
        console.log("hundreds")
        break;
    case 1000:
        console.log("thousands")
        break;
    default:
        console.log("wrong input")
}