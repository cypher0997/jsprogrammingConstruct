const prompt = require('prompt-sync')();
const number = parseFloat(prompt("Enter number : "));

let result=1

for(count=0;count<number;count++){
    result = result * 2
    console.log(result)
}
