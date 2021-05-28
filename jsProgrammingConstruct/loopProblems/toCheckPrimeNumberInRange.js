const prompt = require('prompt-sync')();

const start = parseFloat(prompt("Enter startNumber: "));
const end = parseFloat(prompt("Enter endNumber: "));
let check = 0;
let number
for(counter = start ; counter<=end ; counter++){   
    number = counter;
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
        if(check == 0){
            console.log(counter+"is prime")
        }
    }
}


    


        