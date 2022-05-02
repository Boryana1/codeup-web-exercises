$('document').ready(function() {
    $('#visibility-dd').click(function(event) {
        event.preventDefault();
        $('.invisible').toggleClass('visibility');
    });
});
