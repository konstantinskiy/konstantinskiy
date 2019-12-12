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
            $(this).parents('.s-items').find('.products-slider').slick('slickPrev');
        });

        $('.js-arrow-right').click(function(e) {
            e.preventDefault();
            $(this).parents('.s-items').find('.products-slider').slick('slickNext');
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


});