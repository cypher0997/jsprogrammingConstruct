const prompt = require('prompt-sync')();

const month = parseFloat(prompt("Enter month: "));
const day = parseFloat(prompt("Enter day: "));

let forDate = new Date(2018,month,day);
let testdate1 = new Date(2018,03,20);

let testdate2 = new Date(2018,06,20);

if(forDate.getTime() >= testdate1.getTime() && forDate.getTime() <= testdate2.getTime()) {
    console.log("true");
}
else{
    console.log("false")
}
