console.log("press 1 for degC to degF"+"\n"+"press 2 for degF to degC")
const prompt = require('prompt-sync')();

const choice = parseFloat(prompt("Enter choice: "));
const value = parseFloat(prompt("Enter value for conversion: "));

function celsiusToFahrenheit(){

    if (value > -1 && value < 101){

        let degC = value
        let degF = degC * 9/5 + 32
        console.log(degF+" Fahrenheit")
    }
    else{
            console.log("Input must be within 0 to 100")
    }
}

function fahrenheitToCelsius(){

    if (value > 31 && value < 213){

        let degF = value
        let degC = degF - 32 * 5/9
        console.log(degC+" celcius")
    }
    else{
            console.log("Input must be within 32 to 212")
    }
}

switch(choice){
    case 1:
        celsiusToFahrenheit()
        break;
    case 2:
        fahrenheitToCelsius()
        break;
    default:
        console.log("give proper input");
}