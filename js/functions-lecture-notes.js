//JS FUNCTIONS

//SYNTAX

//function --> keyword
//name of the function
// () --> potentially hold perimeters
// (perimeter1, perimeter2) --> data required for the function to run
//perimeters are passed in from the-outside-of-the-functions sources
// {} --> define our function code block
// {code goes here} ---> actual code to be run lives inside of the brackets

// function printsMyName (){
//     console.log('Boryana');
// }
// printsMyName();

// TODO: write a function that prints out "firstNameAge"
//  to the console replace firstName and age with your actual firstName and age
//
// function firstNameAge (){
//     var firstName = 'Boryana ';
//     var age = "29";
//     console.log(firstName + age)
// };
// firstNameAge();
//
// function doMathThing(){
//     //code lives here
//     return 4 + 8 * 5;
// };
// console.log(doMathThing());
//
// //15 MAR 2022
//
// function doSomething(){
//
// }
// // global scope
// var myNotes = "my notes bla bla bla"
// var isColdOutside = false;
// var temp = 86;
// var isACworking = false;


//TODO: write in a function that takes in the isColdOutside and returns a string
// that says "you will need a jacket" if it IS cold outside

// isColdOutside --- the variable we'll be using to verify whether or
//not to print out "you'll need a jacket // argument
//name of the function
//-do we need parameter? yes!
//what are parameter(s)?
// what are we naming the parameters?
//how do we use parameters inside a function?
//pass in variable we're actually going to be using inside our function
//return something from function
//what's being returned? a phase / returning a string
//where is the string being defined? we can create a variable or
//return the string directly
//if/else ---> check to see id isColdOutside is true, if it is, return
//string
//if it's false return...? // exit the function

//1. write a function
//2. function needs parameter(s)
//3. call the function
//4. pass in the argument (isColdOutside)
//5. inside of function: check If isColdOutside == true / else exit out of function
// out of function

//parameter=placeholder, not a string

//  var isColdOutside = false;
// function isCold(jacket){ //jacket is a placeholder
//     var finalString;
//     concole.log(jacket) //false;
//     if(jacket === true){
//         return "you will need a jacket"
//     }else{
//         console.log("not cold")
//         return finalString;
//     }
// }

//arguments - the actual values being passed in to be used in the function
//isCold(isColdOutside); //from a variable that already exists //it will replace jacket
//console.log(isCold(isColdOutside));

//TODO: write a function that adds 4 + 19;
//1. write a function (addNumbers)
//2. //code:4 + 19;
//3. call the function

//a void function --> returns nothing // doesn't even have a return statement
function addNumbers(){
    console.log(4 = 19);
}

addNumbers();

// without parameters but it returns something
//TODO: write a function that adds 4 + 19;
//1. write a function
//2. in the function block, add 4+19;
//3. return 4 + 19;
//4. call the function

function returnSum(){
    //return 4+19; //option 1
    var sum = 4+19; //option 2
    return sum;
}
returnSum();
console.log(returnSum());
//function that doesn't return anything (void)


//function with one parameter that doesn't return anything
// TODO: write a function that adds nub1 to 25;
//1. write a function
//2. add num1 + 25
//3. call the function
//4. create a num1 variable (outside of my function - globally)
//5. pass in num1 as an argument to the function
//// where do we pass in an argument? --> passed in when we call the function
/// what is the argument? the value being passed in to the fn --> num1
/// call in (INVOKE)
//// How do we reference those
//6. create a parameter to be used inside of the function (placeholder)


var num1 = 18;
function sumVar(param){
    param + 25;
}
sumVar(num1);

