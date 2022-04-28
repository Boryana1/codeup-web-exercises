// $(document).ready(function () {
//     alert('The DOM has finished loading!');
// });

// ID SELECTORS

// alert($('#header').html());
// var menu = $('#menu-items').html();
// console.log(menu);
// alert(menu);

// var pizza = $('#pizza').html();
// alert(pizza);


// CLASS SELECTORS

// $('.codeup').css('border', '1px solid red');

// ELEMENT SELECTORS
//
// $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', 'red');

// var h1Element = $("h1").html();
// var h1Element2 = $("#menu-items").html();
// alert(h1Element);
// alert(h1Element2);
// Create a jQuery statement to alert the contents of your h1 element(s).
//
// MULTIPLE SELECTORS
// $('h1, p, li').css('background-color', 'red');

//MOUSE EVENTS

// Add jQuery code that will change the background color of an h1 element when clicked.
//
//     Make all paragraphs have a font size of 18px when they are double clicked.
//
//     Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('h1').click(function () {
    $(this).css('background-color', 'blue');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function () {
        $(this).css('background-color', 'red');
    },
    function () {
        $(this).css('background-color', 'black')
    }
);