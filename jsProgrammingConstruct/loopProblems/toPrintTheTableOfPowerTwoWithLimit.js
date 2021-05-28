const prompt = require('prompt-sync')();

const number = parseFloat(prompt("Enter Number: "));
let result=1

let count=1
while(count<=number){
    result = result*2
    if(result <= 256){
        console.log(result)
    }
    else{
        console.log("limit reached")
        break;
    }
    count++
}