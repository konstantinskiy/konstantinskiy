$(document).ready(function() {


    // Functions for show/hide adaptive container after click

    function toggleAdaptiveMenu() {
        $('.s-main__side').toggleClass('s-main__side--open');
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('html').toggleClass('scroll-disable');
    }

    $('.js-adaptive-slide').on('click', function(e) {
        e.preventDefault();
        toggleAdaptiveMenu();
    });



    // Adaptive submenu slideToggle

    $('.sidebar-cat__toggle').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('sidebar-cat__link--active').next().slideToggle();
    });



    // Subcats toggle 

    $('.sidebar-subcats-head__btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sidebar-subcats-head__btn--active').parents('.sidebar-subcats-head').next().slideToggle();
    });



    // Toggle search box

    $('.header-search__toggler').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-search__toggler--active');
        $('.header-search__dropdown').toggleClass('header-search__dropdown--active');
    });


    // Close search box after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is(".header-search *")) {
            $('.header-search__toggler').removeClass('header-search__toggler--active');
            $('.header-search__dropdown').removeClass('header-search__dropdown--active');
        }
    });



    // Hero slider init

    if($('.hero-slider').length > 0) {
        $('.hero-slider').slick({
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }



    // Products slider init

    if($('.products-slider').length > 0) {
        $('.products-slider').slick({
            slidesToShow: 4,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });

        $('.js-arrow-left').click(function(e) {
            e.preventDefault();
            $(this).parents('.s-items-head').next().slick('slickPrev');
        });

        $('.js-arrow-right').click(function(e) {
            e.preventDefault();
            $(this).parents('.s-items-head').next().slick('slickNext');
        });
    }



    // Products 5 elems slider init

    if($('.products-slider-5').length > 0) {
        $('.products-slider-5').slick({
            slidesToShow: 5,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });

        $('.js-arrow-left').click(function(e) {
            e.preventDefault();
            $(this).parents('.s-items').find('.products-slider-5').slick('slickPrev');
        });

        $('.js-arrow-right').click(function(e) {
            e.preventDefault();
            $(this).parents('.s-items').find('.products-slider-5').slick('slickNext');
        });
    }



    // Portfolio sync slider

    if($('.portfolio-big-slider').length > 0) {

        $('.portfolio-big-slider').slick({
            asNavFor: '.portfolio-sm-slider',
            arrows: false
        });

        $('.portfolio-sm-slider').slick({
            slidesToShow: 9,
            asNavFor: '.portfolio-big-slider',
            arrows: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $('.js-arrow-left').click(function(e) {
            e.preventDefault();
            $(this).parents('.portfolio-item').find('.portfolio-sm-slider').slick('slickPrev');
            $(this).parents('.portfolio-item').find('.portfolio-big-slider').slick('slickPrev');
        });

        $('.js-arrow-right').click(function(e) {
            e.preventDefault();
            $(this).parents('.portfolio-item').find('.portfolio-sm-slider').slick('slickNext');
            $(this).parents('.portfolio-item').find('.portfolio-big-slider').slick('slickNext');
        });

    }



    // Related posts slider init

    if($('.related-posts-slider').length > 0) {
        $('.related-posts-slider').slick({
            slidesToShow: 4,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });
    }



    // Subcats slider init

    if($('.subcats-slider').length > 0) {
        $('.subcats-slider').slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: "<div class='subcats-slider__arr subcats-slider__prev'></div>",
            nextArrow: "<div class='subcats-slider__arr subcats-slider__next'></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
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



    // Product gallery init

    $('[data-fancybox="productGallery"]').fancybox({
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        },
        loop: true
    });



    // Textile categories textile gallery

    $('[data-fancybox*="textileGallery"]').fancybox({
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        },
        loop: true
    });



    // NoUI sidebar filter range sliders

    if($('.sidebar-filter-range').length > 0) {
        $('.sidebar-filter-range').each(function() {
            var $this = $(this);
            var slider = $this.find('.sidebar-filter-range__slider')[0];
            var inputLeft = $this.find('.sidebar-filter-range__input--left')[0];
            var inputRight = $this.find('.sidebar-filter-range__input--right')[0];
            var inputs = [inputLeft, inputRight];

            var minValue = ($(slider).data('min-value')) ? $(slider).data('min-value') : 0;
            var maxValue = $(slider).data('max-value');

            noUiSlider.create(slider, {
                start: [minValue, maxValue],
                connect: true,
                step: 1,
                range: {
                    'min': [minValue],
                    'max': [maxValue]
                },
                format: wNumb({
                    decimals: 0
                })
            });

            slider.noUiSlider.on('update', function(values, handle) {
                inputs[handle].value = values[handle];
            });

            slider.noUiSlider.on('change', function(values, handle) {
                inputs[handle].value = values[handle];
            });

        });
    }



    // Single product active img

    $('.sglproduct-imgsm__link').on('click', function(e) {
        e.preventDefault();
        var imgImgId = $(this).data('img-id');
        if($(this).hasClass('sglproduct-imgsm__link--active')) return;

        $('.sglproduct-imgsm__link').removeClass('sglproduct-imgsm__link--active');
        $(this).addClass('sglproduct-imgsm__link--active');

        $('.sglproduct-imgb').removeClass('sglproduct-imgb--active');
        $('.sglproduct-imgb--' + imgImgId).addClass('sglproduct-imgb--active');
    });



    // Single product tabs

    $('.js-product-tab').on('click', function(e) {
        e.preventDefault();
        var tabId = $(this).data('tab-id');
        if($(this).hasClass('sglproduct-tab-nav__link--active')) return;

        $('.sglproduct-tab-nav__link').removeClass('sglproduct-tab-nav__link--active');
        $(this).addClass('sglproduct-tab-nav__link--active');

        $('.sglproduct-tab-content__item')
            .removeClass('sglproduct-tab-content__item--active')
            .eq(tabId)
            .addClass('sglproduct-tab-content__item--active');
    });



    // Single product small images scroll

    if($('.sglproduct-imgsm').length > 0) {
        $('.sglproduct-imgsm').niceScroll({
            cursorcolor: "#999",
            cursoropacitymin: 1,
        });
    }



    // Single product more show
    
    $('.sglproduct-charact-more__link').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('sglproduct-charact-more__link--active')) {
            $(this)
                .removeClass('sglproduct-charact-more__link--active')
                .text('подробнее')
                .parents('.sglproduct-characts')
                .find('.sglproduct-charact-groups')
                .addClass('sglproduct-charact-groups--hide');
        } else {
            $(this)
            .addClass('sglproduct-charact-more__link--active')
            .text('свернуть')
            .parents('.sglproduct-characts')
            .find('.sglproduct-charact-groups')
            .removeClass('sglproduct-charact-groups--hide');
        }
        
    });



    // Product accordion

    $('.sglproduct-choice-accordion__title').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sglproduct-choice-accordion__title--active').next().slideToggle();
    });



    // Product choice item add/remove class active

    $('.sglproduct-choice-item').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sglproduct-choice-item--active');
    });



    // Input increment value

    $('.js-cart-minus').on('click', function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.cart-item__value'),
            inputValue = input.val();
        
        if(!(inputValue - 1) <= 0) {        
            input.val(parseInt(inputValue) - 1);
        }
    });


    // Input decrement value

    $('.js-cart-plus').on('click', function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.cart-item__value'),
            inputValue = input.val();
        input.val(parseInt(inputValue) + 1);
    });



    // Cart accordion

    $('.js-cart-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('cart-checkout-group__trigger--active').parents('.cart-checkout-group__title').next().slideToggle();
    });


    $('.salons-tabs-nav__link').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('salons-tabs-nav__link--active')) return;

        var tabId = $(this).data('tab-id');

        $('.salons-tabs-nav__link').removeClass('salons-tabs-nav__link--active');
        $(this).addClass('salons-tabs-nav__link--active');
        $('.salon-tab').removeClass('salon-tab--active');
        $('.salon-tab--' + tabId).addClass('salon-tab--active');

    });



    // Contacts map 1

    if($('#salon-map-1').length > 0) {
        ymaps.ready(initMap1);

        function initMap1() {
            var myMap = new ymaps.Map('salon-map-1', {
                center: [57.77302079714255,40.90140849999999],
                zoom: 6
            });
            myMap.behaviors.disable('scrollZoom');

            var point;
            var points = [
                [57.77302079714255,40.90140849999999],
                [58.77302079714255,40.90140849999999],
                [56.77302079714255,41.90140849999999]
            ];

            for(var i = 0; i < points.length; i++) {
                point = new ymaps.Placemark(points[i], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/i/i-map-placemark.png',
                    iconImageSize: [43, 60],
                    iconImageOffset: [-5, -5]
                });
                myMap.geoObjects.add(point);
            }
        }
    }


    // Contacts map 2

    if($('#salon-map-2').length > 0) {
        ymaps.ready(initMap2);

        function initMap2() {
            var myMap = new ymaps.Map('salon-map-2', {
                center: [57.77302079714255,40.90140849999999],
                zoom: 6
            });
            myMap.behaviors.disable('scrollZoom');

            var point;
            var points = [
                [56.77302079714255,40.90140849999999],
                [56.77302079714255,41.90140849999999],
                [57.77302079714255,40.90140849999999]
            ];

            for(var i = 0; i < points.length; i++) {
                point = new ymaps.Placemark(points[i], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/i/i-map-placemark.png',
                    iconImageSize: [43, 60],
                    iconImageOffset: [-5, -5]
                });
                myMap.geoObjects.add(point);
            }
        }
    }


    // Warehouse map

    if($('#warehouse-map').length > 0) {
        ymaps.ready(initWarehouseMap);

        function initWarehouseMap() {
            var myMap = new ymaps.Map('warehouse-map', {
                center: [57.77302079714255,40.90140849999999],
                zoom: 6
            });
            myMap.behaviors.disable('scrollZoom');

            var placemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                iconLayout: 'default#image',
                iconImageHref: 'images/i/i-map-placemark.png',
                iconImageSize: [43, 60],
                iconImageOffset: [-5, -5]
            });
            myMap.geoObjects.add(placemark);
        }
    }
        

});