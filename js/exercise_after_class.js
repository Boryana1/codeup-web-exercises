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
     function longestCommonPrefix(a) {
         let size = a.length;

         /* if size is 0, return empty string */
         if (size == 0)
         return "";

         if (size == 1)
         return a[0];

         /* sort the array of strings */
         a.sort();

         /* find the minimum length from first and last string */
         let end = Math.min(a[0].length, a[size-1].length);

         /* find the common prefix between the first and
            last string */
         let i = 0;
         while (i < end && a[0][i] == a[size-1][i] )
         i++;

         let pre = a[0].substring(0, i);
         return pre;
     }

 //Given an integer, reverse the order of the digits.
 describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
   assert.equal(reverse(1234), 4321);
   assert.equal(reverse(-1200), -21);
  });
 });

 // Given a string, reverse each word in the sentence
 var string = "Welcome to this Javascript Guide!";

 // Output becomes !ediuG tpircsavaJ siht ot emocleW
 var reverseEntireSentence = reverseBySeparator(string, "");

 // Output becomes emocleW ot siht tpircsavaJ !ediuG
 var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

 function reverseBySeparator(string, separator) {
     return string.split(separator).reverse().join(separator);
 }

 // Given two strings, return true if they are anagrams of one another
 var firstWord = "Mary";
 var secondWord = "Army";

 isAnagram(firstWord, secondWord); // true

 function isAnagram(first, second) {
     // For case insensitivity, change both words to lowercase.
     var a = first.toLowerCase();
     var b = second.toLowerCase();

     // Sort the strings, and join the resulting array to a string. Compare the results
     a = a.split("").sort().join("");
     b = b.split("").sort().join("");

     return a === b;
 }

 // How would you use a closure to create a private counter?
 function counter() {
     var _counter = 0;
     // return an object with several functions that allow you
     // to modify the private _counter variable
     return {
         add: function(increment) { _counter += increment; },
         retrieve: function() { return 'The counter is currently at: ' + _counter; }
     }
 }

 // error if we try to access the private variable like below
 // _counter;

 // usage of our counter function
 var c = counter();
 c.add(5);
 c.add(9);

 // now we can access the private variable in the following way
 c.retrieve(); // => The counter is currently at: 14



 function printPattern(range) {
     for(var i=1;i<=range;i++){
         var str="";
         for(var j=1;j<=i;j++){
             str += j+" ";
         }
         console.log(str);
     }
 }
 printPattern(8);

 function digitSum(num) {
     var sum=0;
     while(num!=0){
         sum += num % 10;
         num = Math.floor(num/10);
     }
     return sum;
 }
 console.log(digitSum(4367));

 var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
 var largest = arr[0];
 for(var i=0;i<arr.length;i++){
     largest = arr[i]>largest ? arr[i]:largest; //Check largest number
 }
 console.log(largest)



 var arr = [[0,1,1],[0,1,0],[1,0,0]];
 var zeroCount = 0;
 for(var i=0;i<arr.length;i++){
     for(var j=0;j<arr[0].length;j++){
         zeroCount = arr[i][j]==0 ? zeroCount+1 : zeroCount;
     }
 }

 console.log(zeroCount)