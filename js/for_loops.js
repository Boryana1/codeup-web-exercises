// function showMultiplicationTable (x) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(x + " * " + i + " = " + x*i)
//     }
// }
// showMultiplicationTable(7);

for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 200)+20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}


// for (i; i<= Math.floor(Math.random() * 200)+20;  i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }
