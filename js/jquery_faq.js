// $('document').ready(function() {
//     $('#visibility-dd').click(function(event) {
//         event.preventDefault();
//         $('.invisible').toggleClass('.invisible');
//     });
// });
"use strict"

$('document').ready(function() {

$('#visibility').click(function(event) {
        event.preventDefault();
        $('.facts').toggleClass('invisible');
    });
});

console.log("This is js");