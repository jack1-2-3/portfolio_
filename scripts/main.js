document.addEventListener('DOMContentLoaded', function() {
    new ScrollObserver('.view');
    const slider = new HeroSlider('.swiper-container', {
        effect: 'slide',
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        },
        autoplay: {
            delay: 4000,
            disableOnIntersection: false
        },
        pagination: {
            el: '.swiper-pagination'
        }        
    });
});