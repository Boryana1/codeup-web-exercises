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

 // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 var findMedianSortedArrays = function(nums1, nums2) {
     if(nums1.length > nums2.length) {
         return findMedianSortedArrays(nums2, nums1);
     }

     let m = nums1.length;
     let n = nums2.length;
     let starts = 0, ends = m;

     while(starts <= ends) {
         const partitionX = (starts + ends) >> 1;
         const partitionY = ((m + n + 1) >> 1) - partitionX;

         const maxLeftX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
         const maxLeftY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

         const minRightX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
         const minRightY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]

         if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
             const lowMax = Math.max(maxLeftX, maxLeftY);
             if(( m + n ) % 2 == 1)
                 return lowMax;
             return (lowMax + Math.min(minRightX, minRightY)) / 2;
         } else if(maxLeftX < minRightY) {
             starts = partitionX + 1;
         } else
             ends = partitionX - 1;
     }
 };

 // Problem Statement: Given a set of strings, find the longest common prefix.













