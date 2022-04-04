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