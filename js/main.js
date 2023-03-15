(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var carousel = function() {
        $('.featured-carousel').owlCarousel({
            loop: false,
            autoplay: false,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            URLhashListener: true,
            merge: true,
            //touchDrag: false,
            //mouseDrag: false,
            //pullDrag: false,
            //freeDrag: true,
            items: 1,
            dotsData: true,
            navText: ["<p class=\"m-0\"><small>Anterior</small><span class='ion-ios-arrow-round-back'></span></p>", "<p class=\"m-0\"><small>Próximo</small><span class='ion-ios-arrow-round-forward'></span></p>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    };
    carousel();

})(jQuery);