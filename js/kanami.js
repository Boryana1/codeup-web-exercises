// $(document).konami({
//     code : [38,38,40,40,37,39,37,39], // up up down down left right left right
//     cheat: function() {
//         alert( 'Cheat code activated!' );
//     }
// });
//
// $.fn.konami.defaults = {
//     code : [38,38,40,40,37,39,37,39,66,65,13],
//     eventName : 'konami',
//     eventProperties : null,
//     cheat: function(evt, opts) {
//         $(evt.target).trigger(opts.eventName, [ opts.eventProperties ]);
//     }
// };

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65,13";

$(document).keydown(function(e) {
    kkeys.push(e.keyCode);

    if (kkeys.toString().indexOf(konami) >= 0) {
        $(document).unbind('keydown', arguments.callee);

        alert("You have added 30 lives!")

    }
});
