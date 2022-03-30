(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

// var person = {
//     firstName: "Boryana",
//         lastName: "Dimova"
//     }
//     console.log(person.firstName);
//     console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    var person = {
        firstName: "Boryana",
        lastName: "Dimova",
        sayHello: function() {
            return "Hello from " + person.firstName + " " + person.lastName + "!";
        }
    }
    // console.log(person.firstName);
    // console.log(person.lastName);
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180,
        },
        {
            name: 'Ryan',
            amount: 250},
        {
            name: 'George',
            amount: 320}
        ];

    shoppers.forEach(function(shopper){
        console.log(shopper); // {name: 'Cameron', amount: 180} // {name: 'Ryan', amount: 250},
        if(shopper.amount > 200){
            var discountedPrice = shopper.amount * .12;
            console.log(shopper.name + " has a total amount of: " + shopper.amount);
            console.log("You hava a discount of 12%")
            console.log("Your totat after the discount is: " + (shopper.amount - discountedPrice));
        } else {
            console.log(shopper.name + " has a total amount of: " + shopper.amount);
            console.log("Sorry, you have to spend more than $200 to get the discount");
        }
    })

    //EXAMPLE:
    // var colors = ["blue", "green", "yellow", "red"];
    // colors.forEach(function(color){
    //     console.log("my favorite color is: " + color);
    // })
    //
    // var shoppers = [
    //     {
    //         name: 'Cameron',
    //         amount: 180,
    //         about: {age: 31, hair: 'brown'}
    //     },
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // console.log(shoppers[0].about.hair); // {age: 31, hair: 'brown'}
    //
    // shoppers.forEach(function(shopper){
    //     console.log(shopper); // {name: 'Cameron', amount: 180} // {name: 'Ryan', amount: 250},
    //     shopper.name // 'Cameron' // 'Ryan' // ' George'
    //     shopper.amount //
    //     console.log(shopper.about.hair); // 'brown' // undefnied / undefined
    //     if(shopper.amount > 200){
    //         //
    //         var discounted = shopper.amount * .12;
    //         console.log(shopper.name + " has a total amt of: " + shopper.amount);
    //     } else {
    //         console.log("I don't know that shoppper")
    //     }
    //
    //
    // })
    //
    // console.log(shoppers.name + ", your total is: " + shoppers.amount + ".");
    //
    // shoppers.forEach(function(shopper){
    //     if (shoppers.amount >= 200) {
    //         var afterDiscount = shoppers.amount - (shoppers.amount * .12);
    //         console.log("Your discount is 12%: " + shoppers.amount * .12);
    //         return "Your total after the discount is: " + afterDiscount;
    //     } else if (shoppers.amount < 200) {
    //         return "Sorry, you do not qualify for the discount. Your total is: " + shoppers.amount;
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Gorgeous Lies",
            author: {
                    firstName: "Martha",
                    lastName: "McPhee"}},
        {
            title: "The Winemaker's Wife",
            author: {
                    firstName: "Kristin",
                    lastName: "Harmel"}},
        {
            title: "The Dinner List",
            author: {
                    firstName: "Rebecca",
                     lastName: "Serle"}},
        {
            title: "Normal People",
            author: {
                    firstName: "Sally",
                    lastName: "Rooney"}},
        {
            title: "The Family Upstairs",
            author: {
                    firstName: "Lisa",
                    lastName: "Jewell"}}
];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    // console.log(book.title+ "is number "+ books.indexOf(book))

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //EXTRA:
    //function Book(type, author) {
    //     this.type = type;
    //     this.author = author;
    //     this.getDetails = function () {
    //         return this.type + " written by " + this.author;
    //     }
    // }
    //
    // var book = new Book("Fiction", "Peter King");
    //
    // console.log(book.getDetails());        // => Fiction written by Peter King
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();