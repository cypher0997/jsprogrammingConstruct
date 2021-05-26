const prompt = require('prompt-sync')();

const year = parseFloat(prompt("Enter year: "));

if(year % 4 == 0) {
    if(year % 100 == 0){
        if(year % 400 ==0){
            console.log("its a leap year");
        }
        else{
            console.log("its not a leap year");
        }
    }
}
else{
    console.log("its not a leap year");
}