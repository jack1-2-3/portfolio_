class ScrollObserver {
    constructor(els, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
            once: true
        };
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }

    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('isview');
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    entry.target.classList.remove('isview');
                }
            })
        }

        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}