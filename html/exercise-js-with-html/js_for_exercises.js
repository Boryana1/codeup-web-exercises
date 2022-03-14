// 1. What string are we trying to find the index of
// 2. the method that allows us to find the index
// 3. the character whose index we're looking for
var sample = 'Hello Codeup!';
sample += 'students';
    sample.indexOf("c");
var pass = "asfdghfdsa";
pass.indexOf(' '); // -1
pass.indexOf('a'); // 0;
pass.lastIndexOf('a');
pass.indexOf('a', 'a'); // 0
sample.indexOf('C');
sample.indexOf('p');
sample.substring(6, 12); //Codeup

var start = sample.indexOf('C');
var end = sample.indexOf('p');
sample.substring(start, end);
end += 1;
//or end ++
sample.substring(start, end);

//how much do I have to pay? --> number
//variable? ---> movieNames, DaysPerMovie; CostPerDay;
//How to calculate total cost ---> numOfDays * CostPerDay

var movie1 = "the little mermaid";
var movie2 = "bro bearas";
var movie3 = "hercules";

var mermaidDaysRented = 3;
var bearsDaysRented = 5;
var hercDaysRented = 1;

var costPerDay = 3;

var totalCostPerDay = (mermaidDaysRented * costPerDay) + (bearsDaysRented * costPerDay) +(hercDaysRented * costPerDay);

mermaidTotalCost = 3 * costPerDay;
mermaidTotalCost



var is5Chars;
var username = 'codeup';
var password = 'notastrongpassword';
password.length;
//18 > 5;
//is5Chars = 18 > 5;


