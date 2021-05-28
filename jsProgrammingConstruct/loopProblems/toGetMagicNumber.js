const prompt = require('prompt-sync')();

let number = parseFloat(prompt("Enter Number: "));
let numNext = number/2
let i = 1.0
while(i<=numNext){
    if(i==numNext){
        number=numNext*2
        console.log("magic number is: "+number)
    }
    i++
}