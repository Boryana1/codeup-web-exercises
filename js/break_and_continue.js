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
