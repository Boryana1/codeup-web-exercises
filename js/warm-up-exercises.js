// Write a function that returns the reading status of each of following books
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
for (let i = 0; i < library.length; i++){
    console.log(library[i].readingStatus)
}

//Problem 9: //FROM 2ND ASSESSMENT
// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
// subtract(10, 2)                     // 8
// subtract(0, 0)                      // 0
// subtract(-4, 1)                     // -5
// subtract("10", 2)                   // 8
// subtract(5, true)                   // false
// subtract(true, false)               // false
// subtract("Monday", "Tuesday")       // false
// subtract()                          // false

function isNumeric(x) {
    return !isNaN(parseFloat(x));
}
function subtract(input1, input2) {
    if (isNumeric(input1) && isNumeric(input2)) {
        return input1 - input2;
    } else {
        return false;
    }
}

//EXERCISE 4 APR 2022
// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

var numbers = [12,2,3,4,5,6,7,8,9];
var array = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        array.push(numbers[i]);
    }
}
console.log(array)



//05 APRIL EXERCISE // ADD UP ALL THE NUMBERS
// example input: [1,2,3,4,5];
// expected output: 15
// some possible test cases to think about:
//     function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers

var array = [1, 2, 3, 4, 5];
var sum = array.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);


//ANOTHER WAY TO GET THE SUM:

function sum(arr) {
    let sum = 0;
    for (const val of arr) {
        sum += val;
    }
    return sum;
}
sum([1, 2, 3, 4, 5]);


//ANOTHER WAY:

function sum(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
}
sum([1, 2, 3, 4, 5]);

//ANOTHER WAY:

var passedNumbers = [1,'2',3,4,5];
var result = 0;
function sumArr(input) {
    input = passedNumbers.map(Number);
    if (input === "") return "sum not available";
    for (var i = 0; i < passedNumbers.length; i++) {
        result += input[i];

    } return result;
}
sumArr(passedNumbers);

//https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

//EXERCISE FROM 6 APR 2022:
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];

var sortArr = [5,8,2,6,9,3,2];
sortArr.sort(function(a, b){return a-b});

var input = [3, 'b', true, 4, 5, 8, 9, 'xyz'];
// create new array with only the numbers of the input array
var inputNew = []
for(var i = 0; i < input.length; i++) {
    if (typeof input[i] === 'number') {
        inputNew.push(input[i])
    }
}

// sort the only numbers array


inputNew.sort(function(a, b){return a-b});
console.log(inputNew)

let uniqueChars = input.filter((c, index) => {
    return input.indexOf(c) === index;
});

console.log(uniqueChars);

//if ( !(/[0-9]/.test(input))
//EXERCISE FOR 7 AUG 2022
// Write a function that accepts a string and returns a map with the strings character frequency.
//     example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }

 var input = ["'b', 'a', 'n', 'a', 'n', 'a'"];

function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
 count(input)

// 1. Make a function named isOdd(number)
//
function isOdd(number) {
    if(number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
// 2. Make a function named isEven(number)
//
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// 3. Make a function named isMultipleOfFive(input)
//
function isMultipleOfFive(number) {
    if(number % 5 === 0) {
        return true;
    } else {
        return false;
    }
}
// 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//
function isMultipleOf(target, n) {
    if(target % n === 0) {
        return true;
    } else {
        return false;
    }
}
// 5. Make a function named isVowel(letter)
function isVowel(letter) {
    if(letter.toString().toLowerCase() === 'a', 'e', 'y', 'o', 'u', 'i'){
        return true;
    } else {
        return false;
    }
}

//FROM THE SECOND ASSESSMENT:
function multiplyBy2(input) {
    var result = Number(input);
    if ( !(/[0-9]/.test(input))) return false;
    if(Number) return result * 2;
}
multiplyBy2("3");

// 6. Write a function called first(input) that returns the first character in the provided string.
//
function first(input) {
    return input[0];
}
// 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second input string
// removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be removed
// where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.
//

// 8. Make a function named isSpace(letter) that returns if a character is a space character
//
function isSpace(letter) {
    if (letter === " ") {
        return true;
    } else {
        return false;
    }
}
// 9. Write a function named squareRoot(n) that returns the square root of the input
//
function squareRoot(n) {
    return Math.sqrt(n);
}
// 10* create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//

function whitespaces()
// 11. Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
//


// 12. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// 13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers


// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

for (let i = 1; i <= 50; i++) {
    function primeNumber(num) {
        if (num % num !== 0){
            return num;
        }
    } console.log(num);
}

// 13 April 2022
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]

function myArr(arr1, arr2) {
    var result = arr1.concat(arr2);

    result = [...new Set(result)];

    return result.sort();
}
console.log(myArr([1,2,3],[3,4,5]));

// 18 April 2022 //   GTG
// var i = 20;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

for (let i = 20; i >= 0 ; i--) {
    console.log(i);
}
//    2. Write a function that takes an object (a) as argument and returns an array with all object keys
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
// example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']


var input1 = {a:1,b:2,c:3}
    console.log(Object.keys(input1));

// 19 APR 2022
//
// (hint hint hint: learn how to use a modulus)
// Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)
for (let i = 1; i < 16; i++) {
    if (i % 3 === 0){
        console.log(i);
    }
}


// 2. Extra Challenging - Set likely won’t be covered but it’s a useful tool in JS
// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set
//
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
//     example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------
newSet = ([1, 2, 3]);
newArray = [2, 3];

    function myArr(arr1, arr2) {
        var result = arr1.concat(arr2);

        result = [...new Set(result)];

        return result.sort();
    }
console.log(myArr(newSet, newArray));
    var myNewArray = myArr(newSet, newArray);
    console.log(new Set(myNewArray))