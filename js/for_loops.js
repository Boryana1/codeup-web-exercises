// function showMultiplicationTable (x) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(x + " * " + i + " = " + x*i)
//     }
// }
// showMultiplicationTable(7);

// for (var i = 1; i <= 10; i++) {
//     var randomNumber = Math.floor(Math.random() * 200)+20;
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even.");
//     } else {
//         console.log(randomNumber + " is odd.");
//     }
// }

for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num) }

// for (let i = 1; i < 10; i++) {
//     let string = "";
//     for (let j = 0; j < i; j++) {
//     }
//     string += i;
// }
// console.log(string);
// console.log(string);
//     var arr = new Array();
//     for (var i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++){
//         arr.push(j);
//         console.log(j);
//     }
//     // var outputString = i.toString();
//     // console.log(i.repeat(1));
// }
// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var arr = new Array();
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             arr.push(j);
//             console.log(j);
//         }
//     }
// }

// for (i; i<= Math.floor(Math.random() * 200)+20;  i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }

for (i = 100; i >= 0; i-=5) {
    console.log(i);
}
