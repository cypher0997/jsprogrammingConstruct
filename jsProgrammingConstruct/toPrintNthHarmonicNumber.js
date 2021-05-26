const prompt = require('prompt-sync')();
const number = parseFloat(prompt("Enter number : "));

let result = 0;
if ( number > 0 ){
    for(count=1;count<=number;count++){
        result = result + 1/count
    }
}
console.log(result)
