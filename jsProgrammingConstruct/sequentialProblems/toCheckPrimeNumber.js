const prompt = require('prompt-sync')();

const number = parseFloat(prompt("Enter number: "));

let check = 0;

if (number <= 1){
    console.log( " is not a prime number.")
}else{
    for(count=2;count<=number/2;count++){
        if(number % count == 0){
            check = 1
            break;
        }else{
            check = 0
        }
    }
}
if(check == 1){
    console.log("not a prime")
}else{
    console.log("is prime")
}


    


        