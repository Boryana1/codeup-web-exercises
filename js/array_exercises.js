var schoolGames = ["dodge-ball", "kickball", "hopscotch", "tag", "hide" +
" and seek"];
schoolGames.forEach(function (game){
    console.log("My favorite game in school was: " + game);
});

// EXERCISE 1:
//
// Imagine the supplied array is like a pack of cards. Write a function to shuffle an array in to a completely new and entirely random order, much like shuffling a pack of cards.
//     example input: [2,4,6,8]
// expected output: [4,2,8,6];

//OPTION 1;
let input = [2,4,6,8];
// const output = input.sort((a, b) => 0.5 - Math.random());
// console.log(output);

//OPTION 2:
// input = input.sort(() => Math.random() - 0.5)

//OPTION 3:
function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// var alphabet=["a","b","c","d","e"];
randomArrayShuffle(input);



// QUESTION: WHY MY INPUT DOES NOT CHANGE THE FIRST TIME I RUN THE CODE????
//

// 1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//     return //Something
// };

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// 2. Return true if palindrome and false if not
//     ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };

function isPalindrome(x) {
    if
}


