const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
let smallest;

let op1 = num1 + num2 * num3;
console.log("op1: "+op1)
let op2 = num1 % num2 + num3;
console.log("op2: "+op2)
let op3 = num3 + num1 + num2;
console.log("op3: "+op3)
let op4 = num1 * num2 + num3;
console.log("op4: "+op4)

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