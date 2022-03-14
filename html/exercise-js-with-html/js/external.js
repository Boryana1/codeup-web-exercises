"use strict";
// console.log("Hello from external JavaScript");
// alert('Welcome to my Website!');
// var userInput = prompt('What is your favorite color?');
// alert("Great, " + userInput + " is my favorite color too");
//The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?
// var userInput = prompt('How many days did you rent "The little mermaid" for?');
// //turn userInput into a number
// var userInput1 = prompt('How many days did you rent "Brother Bear" for?');
// var userInput2 = prompt('How many days did you rent "Hercules" for?');
// var mp = 3;
// var TotalCost = [(userInput * mp) + (userInput1 * mp) + (userInput2 * mp)];
// alert('Your total coat is: $' + TotalCost);

var Google =  prompt("How many hours have you worked for Google?");
var Amazon = prompt("How many hours have you worked for Amazon?");
var Facebook = prompt("How many hours have you worked for Facebook?");
var pay1 = '400';
var pay2 = '380';
var pay3 = '350';
var totalPay = [(Google * pay1) + (Amazon * pay2) + (Facebook * pay3)];
alert(totalPay);
