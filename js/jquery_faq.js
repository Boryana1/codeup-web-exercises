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

$('document').ready(function() {
    $('.highlighted').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('highlighted');
    });
});