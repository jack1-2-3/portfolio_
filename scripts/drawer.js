$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function() {
        const scrollEvent = window.ontouchstart ? 'touchmove' : 'scroll';
        $(window).on(scrollEvent, function() {
            $('.drawer').drawer('close');
        });
    });
});