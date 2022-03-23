 // Create a function where you prompt for a number 1-3 and have the number picked return a color. // 1 = blue, 2 = yellow,
// 3 = red. //create a function. asking for a prompt for a number. // make the function return the corresponding color for the number chosen with an alert.
// if the number chose is not 1-3 return with an alert that "that color is lameo".
 function pickANumber() {
    do{
        var num = prompt("Pick a number between 1 and 3.");
        if (num < 1 || num > 3 ) {
            alert("Ooops, wrong number.")
        } else if (isNaN(num)) {
            alert("That color is lameo")
        }
    } while (num < 1 || num > 3 || isNaN(num));
    if (num === 1) {
        alert("Blue");
    } else if (num === 2) {
        alert("Yellow");
    } else {
        alert("Red");
    }
}
pickANumber();


//TODO: Fizzbuzz Activity
 // Print numbers 1-100
 //if  # is divisible by 3 use Fizz
 //if # is divisible by 5 use Buzz
 // if # is divisible by 3 and 5 use FizzBuzz

 function fizzBuzz() {
     for (var i =1; i <= 100; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
             console.log("FizzBuzz");
         } else if (i % 3 === 0) {
             console.log("Fuzz");
         } else if (i % 5 === 0) {
             console.log("Buzz");
         } else {
             console.log(i);
         }
     }

 }
 fizzBuzz();













