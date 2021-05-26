const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
let smallest;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

if(num1 <= num2 && num1 <= num3) {
    smallest = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
}
else {
    smallest = num3;
}

console.log("The largest number is " + largest);
console.log("The largest number is " + smallest);