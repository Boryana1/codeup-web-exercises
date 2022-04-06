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
for (let i = 0; i < numbers.length ; i++) {
    function if (i % 2 === 0) {
    return i;
    } else {
        console.log(false);
    }
}

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



//if ( !(/[0-9]/.test(input))
