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

 // Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

 var side1 = 5;
 var side2 = 6;
 var side3 = 7;
 var s = (side1 + side2 + side3)/2;
 var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
 console.log(area);

 //Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
 for (var year = 2014; year <= 2050; year++)
 {
     var d = new Date(year, 0, 1);
     if ( d.getDay() === 0 )
         console.log("1st January is being a Sunday  "+year);
 }










