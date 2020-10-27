$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function() {
        if(window.ontouchstart) {
            $(window).bind('touchmove', function() {
                $('.drawer').drawer('close');
            });
        } else {
            $(window).scroll(function() {
                $('.drawer').drawer('close');
            });
        }
    });
});