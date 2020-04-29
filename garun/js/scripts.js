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



    // Sidebar scroll

    // if($('.s-main__side').length > 0) {
    //     $('.s-main__side').niceScroll({
    //         cursorcolor: "#999",
    //         cursoropacitymin: 1,
    //         horizrailenabled: false
    //     });
    // }


    $(window).on('scroll', function() {
        if($(this).scrollTop() > 200) {
            $('.s-main__side').addClass('s-main__side--bottom');
        } else {
            $('.s-main__side').removeClass('s-main__side--bottom');
        }
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



    // Show telephone dropdown

    $('.header-contacts__telnumber').on('click', function(e) {
        e.preventDefault();
        $(this)
            .toggleClass('header-contacts__telnumber--active')
            .parents('.header-contacts')
            .find('.header-contacts__drop')
            .toggleClass('header-contacts__drop--show');
        $('.shadow').toggleClass('shadow--show');
    });


    // Close telephone dropdown after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is(".header-contacts *")) {
            $('.header-contacts__telnumber').removeClass('header-contacts__telnumber--active');
            $('.header-contacts__drop').removeClass('header-contacts__drop--show');
            $('.shadow').removeClass('shadow--show');
        }
    });



    // Hero slider init

    if($('.hero-slider').length > 0) {
        $('.hero-slider').slick({
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1500,
                  settings: {
                    dots: false,
                    arrows: true,
                    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 58.5"><path d="M0 29.3L29.3 0l1.4 1.4-28 28 28 27.7-1.4 1.5L0 29.3"></path></svg></button>',
                    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 58.5"><path d="M30.7 29.3L1.4 0 0 1.4l28 28L0 57l1.4 1.5 29.3-29.2"></path></svg></button>'
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    dots: true,
                    arrows: false,
                  }
                },
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
                        //dots: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        //dots: true
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



    // Show/hide addresses

    $('.js-more-addresses').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('address-more__btn--active');
        $('.js-address-row').slideToggle('js-address-row--hidden').addClass('js-address-row--show');
        if($(this).hasClass('address-more__btn--active')) {
            $('.js-more-addresses span').text('Скрыть все магазины');
        } else {
            $('.js-more-addresses span').text('Показать все магазины');
        }
    });
        

});