const prompt = require('prompt-sync')();

let Number = parseFloat(prompt("Enter Number: "));
let check = 0
function prime(){
    let temp = Number
    if(temp<=1){
        console.log("Number is not prime")
    }else{
        for(let count = 2;count<=temp/2;count++){
            if(temp % count == 0){
                check = 1
                break;
            }else{
                check = 0
            }
        }
    }
    if(check == 1){
        console.log(temp+" Number is not prime")
    }else{
        console.log(temp+" Number is prime")
    }
}

function palindrome(){
    let reverse = 0;
    let temp = Number;
    while (temp > 0){
        let digit = temp % 10
        temp = parseInt(temp / 10)
        reverse = reverse * 10 + digit
    }
    if(reverse == Number)
		{
			console.log("The inputed Number is Palindrome");
		}
		else
		{
			console.log("The inputted Number is not palindrome");
		}
}
prime()
palindrome()