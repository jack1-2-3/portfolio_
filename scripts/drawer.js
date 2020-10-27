$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function() {
        if(window.ontouchstart) {
            $('.drawer').touchmove(function() {
                $('.drawer').drawer('close');
            });
        } else {
            $(window).scroll(function() {
                $('.drawer').drawer('close');
            });
        }
    });
});