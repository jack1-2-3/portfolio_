class HeroSlider {
    constructor(el, options) {
        this.el = el;
        const defaultOptions = {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            }
        };
        this.options = Object.assign(defaultOptions, options);
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, this.options);
    }

    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableOnIntersection: false
        }, options);

        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}