$(document).ready(function() {


    // Preloader

    $(window).on('load', function() {
        $('.preloader').fadeOut();

        setTimeout(function() {
            $('html').removeClass('scroll-disable');
            $('.header__logo-round').addClass('header__logo-round--show');
            $('.header__img').addClass('header__img--show');
        }, 400);
    });


    //$.Scrollax();


    // Functions for show/hide adaptive container after click

    function openAdaptiveSlide() {
        $('.s-adaptive-slide').addClass('s-adaptive-slide--open');
        $('.adaptive-menu-toggle').addClass('adaptive-menu-toggle--open');
        if($(window).width() < 1000) {
            $('html').addClass('scroll-disable');
        }
    }

    function closeAdaptiveSlide() {
        $('.s-adaptive-slide').removeClass('s-adaptive-slide--open');
        $('.adaptive-menu-toggle').removeClass('adaptive-menu-toggle--open');
        if($(window).width() < 1000) {
            $('html').removeClass('scroll-disable');
        }
    }

    $('.js-adaptive-slide-open').on('click', function(e) {
        e.preventDefault();
        openAdaptiveSlide();
    });

    $('.js-adaptive-slide-close').on('click', function(e) {
        e.preventDefault();
        closeAdaptiveSlide();
    });



    // Mobile touch swipe left menu

    function touchSlideLeftMenu() {

        $('.s-adaptive-slide').on('touchstart', handleTouchStart);        
        $('.s-adaptive-slide').on('touchmove', handleTouchMove);

        var xDown = null;                                                        
        var yDown = null;

        function getTouches(evt) {
            return evt.touches ||          // browser API
                evt.originalEvent.touches; // jQuery
        }                                                     

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        };                                                

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    closeAdaptiveSlide();
                }                       
            }
            xDown = null;
            yDown = null;                                             
        };
    }

    touchSlideLeftMenu();



    // Scroll to target btn

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('scrollTarget');
        if(target) {
            $('html, body').animate({scrollTop: $('.' + target).offset().top}, 400);
        }
    });

    // Adaptive menu scroll link
    
    $('.adaptive-menu__link').on('click', function(e) {
        if($(this).hasClass('adaptive-menu__link--active')) return;
        $('.adaptive-menu__link--active').removeClass('adaptive-menu__link--active');
        $(this).addClass('adaptive-menu__link--active');
    });



    // Scroll animate transform: translateY

    function scrollAnimationElem(elem, direction = 'top', ratio = 0.15) {
        var elem = $(elem);
        var elemOffsetTop = elem.offset().top;
        var elemHeight = elem.height();
        var elemHalf = elemHeight/2;
        // var elemBottom = elemOffsetTop + elemHeight;
        // console.log(elemBottom);
        // var windowH = $(window).height();

        $(window).on('scroll', function() {
            var scrollWindow = $(this).scrollTop();

            if(isScrolledIntoView(elem)) {
                elem.addClass('in-view');
            //if(elemOffsetTop >= 0 && elemBottom <= windowH) {
            //if(elemOffsetTop < windowH && elemBottom >=0 ) {
                // var diffValue = scrollWindow - elemBottom;
                var diffValue = scrollWindow - elemOffsetTop;
                var scrollRatio = Math.round((diffValue / elemHeight) * 100);

                if(direction == 'top') {
                    var scrollElem = parseInt(0 - (diffValue * ratio));
                    // var scrollElem = -2;
                    // var scrollElem = (0-(scrollWindow * ratio));
                    // var scrollElem = parseInt((scrollRatio * ratio));
                    elem.css({
                        'transform': 'translateY(' + scrollElem + 'px)',
                    });
                }
                else if(direction == 'bottom') {
                    var scrollElem = diffValue * ratio;
                    var scrollElem = parseInt(0-(scrollRatio * ratio));
                    //var scrollElem = 2;
                    elem.css({
                        'transform': 'translateY(' + scrollElem + 'px)',
                    });
                }
            } else {
                elem.removeClass('in-view');
            }
        });
    }

    function isScrolledIntoView(el) {
        var $el = $(el);
        var $window = $(window);
        var $windowHeight = $window.height();

        var elTop = $el.offset().top;
        var elBottom = elTop + $el.height();

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $windowHeight;

        return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
    }

    
    // scrollAnimationElem('.header__logo-round');
    // scrollAnimationElem('.round-box--elite');
    // scrollAnimationElem('.elite-sm-img', 'bottom', 0.25);


    //$('.s-sale .round-box').hide();



    // Show elems animate after document ready

    // setTimeout(function() {
    //     $('.preloader').fadeOut();
    // }, 15000);

    // setTimeout(function() {
    //     $('.header__logo-round').addClass('header__logo-round--show');
    //     $('.header__img').addClass('header__img--show');
    // }, 15500);


    // Element animate after scroll
    
    function elementParallaxScrollAnimate(elem, animateValue = 80) {
        var elem = $(elem);
        var elemHeight = elem.height();
        var elemHalfHeight = elemHeight/2;
        var windowHeight = $(window).height();
        var animateValue = animateValue + 'px';

        if(elem.length) {
            var elemOffsetTop = elem.offset().top,
                elemOffsetTopPoint = elemOffsetTop - ((windowHeight/1.5) - elemHalfHeight);

            $(window).on('scroll', function() {
                var windowScrollTop = $(this).scrollTop();

                if(windowScrollTop > elemOffsetTopPoint) {
                    elem.css({
                        'transform': 'translateY(' + animateValue + ')'
                    });
                } else {
                    elem.css({
                        'transform': 'translateY(0px)'
                    });
                }
            });    
        }
    }
    
    if($(window).width() > 1000) {
        elementParallaxScrollAnimate('.round-box--elite');
        elementParallaxScrollAnimate('.elite-sm-img', 100);

        elementParallaxScrollAnimate('.round-box--invest');
        elementParallaxScrollAnimate('.invest-sm-img', 100);

        elementParallaxScrollAnimate('.round-box--sale');
        elementParallaxScrollAnimate('.sale-sm-img', 100);
    }



    // Animate hidden blocks

    function animateItems(item, animationClass, timer, interval) {
        var item = $(item),
            itemPos = item.offset().top,
            windowHeight = $(window).height() * 0.7,
            topOfWindow = $(window).scrollTop();
        if (itemPos < topOfWindow + windowHeight) {
            item.each(function() {
                var _this = $(this);
                setTimeout(function () {
                    _this.addClass(animationClass);
                    _this.removeClass('animate-hidden');
                }, timer);
                timer = timer + interval;
            })
        }
    }
    
    //if($(window).width() > 1000) {
        $(window).scroll(function() {
            animateItems('.s-mission__round', 'animate-visible animated zoomIn', 0);
            animateItems('.round-box--easy', 'animate-visible animated zoomIn', 0);
            animateItems('.round-box--easy', 'animate-visible animated bounceIn', 0);
            animateItems('.round-box--foreign', 'animate-visible animated bounceIn', 0);
            animateItems('.round-box--about', 'animate-visible animated bounceIn', 0);
            animateItems('.easy-list__col--1', 'animate-visible animated bounceInUp', 0);
            animateItems('.easy-list__col--2', 'animate-visible animated bounceInUp', 0);
        });
    //}



    // Popular slider init

    if($('.news-slider').length > 0) {
        $('.news-slider').slick({
            centerMode: true,
            centerPadding: '170px',
            slidesToShow: 3,
            arrows: false,
            responsive: [{
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]
        });

        $('.s-news__arrow--left').click(function(e) {
            e.preventDefault();
            $(".news-slider").slick('slickPrev');
        });

        $('.s-news__arrow--right').click(function(e) {
            e.preventDefault();
            $(".news-slider").slick('slickNext');
        });
    }



    // Modal init

    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        }
    });


});