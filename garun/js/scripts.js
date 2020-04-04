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
            arrows: false,
            dots: true
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



    // Change active product color

    $('.js-product-color').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('product-item__color--active')) return;
        $(this).parents('.product-item__colors').find('.product-item__color').removeClass('product-item__color--active');
        $(this).addClass('product-item__color--active')
    });



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