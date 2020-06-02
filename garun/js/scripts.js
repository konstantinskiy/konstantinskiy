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



    // Detect scroll direction and fixed/unfixed left sidebar

    function sidebarFixing() {
        let lastScrollTop = 0;
        let winHeight = window.innerHeight;
        let sideHeight = $('.s-main__sidein').height();

        $(window).on('scroll', function() {
            let scrollTop = $(this).scrollTop();
            if(sideHeight < winHeight) return;
            if(scrollTop < lastScrollTop) {  // if top scroll direction
                if($(this).scrollTop() < 300) {
                    $('.s-main__side').removeClass('s-main__side--bottom');
                }
            } else {  // if bottom scroll direction
                if($(this).scrollTop() > 300) {
                    $('.s-main__side').addClass('s-main__side--bottom');
                }
            }
            lastScrollTop = scrollTop;
        });
    }

    sidebarFixing();



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
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 58.5"><path d="M0 29.3L29.3 0l1.4 1.4-28 28 28 27.7-1.4 1.5L0 29.3"></path></svg></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 58.5"><path d="M30.7 29.3L1.4 0 0 1.4l28 28L0 57l1.4 1.5 29.3-29.2"></path></svg></button>',
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



    // Single product sync slider

    if($('.sproduct-slider').length > 0) {

        $('.sproduct-slider').slick({
            asNavFor: '.sproduct-smpreslider-nav',
            arrows: false,
            responsive: [{
                    breakpoint: 480,
                    settings: {
                        arrows: false
                    }
                },
            ]
        });

        $('.sproduct-smpreslider-nav').slick({
            slidesToShow: 4,
            asNavFor: '.sproduct-slider',
            arrows: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
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



    // NoUI filter range sliders

    $('.filter-ranges').each(function () {
        var $this = $(this);
        var slider = $this.find('.filter-ranges__slider')[0];
        var inputLeft = $this.find('.filter-ranges__input--min')[0];
        var inputRight = $this.find('.filter-ranges__input--max')[0];
        var inputs = [inputLeft, inputRight];

        var minValue = ($(inputLeft).data('min-value')) ? $(inputLeft).data('min-value') : 0;
        var maxValue = $(inputRight).data('max-value');

        var startValue = $(inputLeft).attr('placeholder');
        var endValue = $(inputRight).attr('placeholder');

        noUiSlider.create(slider, {
            start: [startValue, endValue],
            connect: true,
            step: 1,
            range: {
                'min': [minValue],
                'max': [maxValue]
            }
        });

        slider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        slider.noUiSlider.on('change', function (values, handle) {
            inputs[handle].value = values[handle];
        });

    });



    // Product tabs

    $('.sproduct-tabs-nav__link').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('sproduct-tabs-nav__link--active')) return;

        let tabId = $(this).data('tab-id');

        $(this).parents('.sproduct-tabs-nav').find('.sproduct-tabs-nav__link').removeClass('sproduct-tabs-nav__link--active');
        $(this).addClass('sproduct-tabs-nav__link--active');

        $('.sproduct-tabs__content').removeClass('sproduct-tabs__content--active');
        $('.sproduct-tabs__content').eq(tabId).addClass('sproduct-tabs__content--active');
    });



    // Product colors

    $('.sproduct-color').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('sproduct-color--active')) return false;

        $(this).parents('.sproduct-colors').find('.sproduct-color--active').removeClass('sproduct-color--active');
        $(this).addClass('sproduct-color--active');
    });



    // Input increment value

    $('.js-cartcount-minus').on('click', function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.cartpage-item-counter__input'),
            inputValue = input.val();
        
        if(!(inputValue - 1) <= 0) {        
            input.val(parseInt(inputValue) - 1);
        }
    });



    // Input decrement value

    $('.js-cartcount-plus').on('click', function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.cartpage-item-counter__input'),
            inputValue = input.val();
        input.val(parseInt(inputValue) + 1);
    });



    // Cart toggler
    
    $('.cartpage-toggler').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('cartpage-toggler--active');
    });



    // Cart item color

    $('.cartpage-item__color').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('cartpage-item__color--active')) return false;

        $(this).parents('.cartpage-item__colors').find('.cartpage-item__color--active').removeClass('cartpage-item__color--active');
        $(this).addClass('cartpage-item__color--active');
    });



    // Cart item color

    $('.cart-client-types__link').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('cart-client-types__link--active')) return false;

        $(this).parents('.cart-client-types').find('.cart-client-types__link--active').removeClass('cart-client-types__link--active');
        $(this).addClass('cart-client-types__link--active');
    });



    // Cart fakecheck

    $('.js-cart-fakecheck').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('cart-box-fakecheck--active')) return false;

        $(this).parents('.cart-box-fakechecks').find('.cart-box-fakecheck--active').removeClass('cart-box-fakecheck--active');
        $(this).addClass('cart-box-fakecheck--active');

        if($(this).data('delivery-type') == 'self') {
            $('.cart-box-addresses, .cart-box-uptoflat').hide();
        }
        else if($(this).data('delivery-type') == 'rf') {
            $('.cart-box-uptoflat').hide();
            $('.cart-box-addresses').show();
        } else if($(this).data('delivery-type') == 'all') {
            $('.cart-box-addresses, .cart-box-uptoflat').show();
        }

    });
        

});