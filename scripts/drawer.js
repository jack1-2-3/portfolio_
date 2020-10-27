$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function() {
        $(window).scroll(function() {
            $('.drawer').drawer('close');
        });
    });
});