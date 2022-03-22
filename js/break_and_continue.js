// Break and Continue:
// 1. Create a file named break_and_continue.js in the js directory.
// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//    Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

do {
    var userInput = prompt("Enter an odd number between 1 and 50.");
} while (userInput % 2 === 0 || userInput < 1 || userInput > 50 || isNaN(userInput));

for (var i = 1; i <= 50; i++) {
    if (i == userInput) {
        console.log("Yikes! Skipping number: " + userInput);
    } else if (i % 2 !== 0) {
        console.log("This is an odd number: " + i);
    } else {
        continue;
    }
}

// PRACTICE:

// for (i = 0; i < 50; i++) {
//     var i = prompt("Enter an odd number between 1 and 50.");
//     if ((i < 1 || i > 50) && (i % 2 === 0)) {
//         console.log("This is my favorite number.")
//         break;
//     }
// }

// let i = prompt("Enter an odd number between 1 and 50.");
// while (i < 1 || i > 50 && i % 2 === 0) {
//     i++;
//     if ( {
//         console.log("we are skipping this number")
//         continue;
//     } else if (i % 2 === 0){
//         break;
//     }
//     console.log(i);
// }

// let i = 0;
// while (i < 50) {
//     i++;
//     if ((i >= 26 && i <= 28)) {
//         console.log("we are skipping this number")
//         continue;
//     } else if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }
