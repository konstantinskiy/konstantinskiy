(function() {


    // Functions for show/hide adaptive container after click

    function toggleAdaptiveMenu() {
        $('.s-adaptive-slide').toggleClass('s-adaptive-slide--open');
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('html').toggleClass('scroll-disable');
    }

    $('.js-adaptive-slide').on('click', function(e) {
        e.preventDefault();
        toggleAdaptiveMenu();
    });


    // Toggle search box

    $('.header-search__toggler').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-search__toggler--active');
        $('.header-search__dropdown').toggleClass('header-search__dropdown--active');
    });


    // Close search box after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is(".header-bottom__inner *")) {
            $('.header-catalog').removeClass('header-catalog--active');
            $('.header-catalog-drop').removeClass('header-catalog-drop--active');
        }
    });


    // Fixed desktop header after scroll

    if (window.innerWidth > 767) {
        const headerH = $('.header').height();
        $(window).on('scroll', function() {            
            ($(this).scrollTop() > headerH)
                ? $('.mobile-header').addClass('mobile-header--fixed')
                : $('.mobile-header').removeClass('mobile-header--fixed');
        });
    }


    // Dropdown PC header catalog

    $('.js-header-catalog').on('click', function(e) {
        e.preventDefault();
        $(this)
            .toggleClass('header-catalog--active')
            .parents('.header-bottom__inner')
            .find('.header-catalog-drop')
            .toggleClass('header-catalog-drop--active');
    });


    // Dropdown header search

    $('.js-asearchbutton-toggler').on('click', function(e) {
        e.preventDefault();
        $(this)
            .toggleClass('header-middle__asearchbutton--active')
            .parents('.header-middle')
            .find('.header-middle__searchdrop')
            .toggleClass('header-middle__searchdrop--active');
    });

    
    // Close search drop after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is('.header-middle *')) {
            $('.header-middle__asearchbutton').removeClass('header-middle__asearchbutton--active');
            $('.header-middle__searchdrop').removeClass('header-middle__searchdrop--active');
        }
    });


    // Toggle adaptive submenu

    $(document).on('click', '.js-adaptmenu-toggler', function(e) {
        e.preventDefault();
        $(this)
            .toggleClass('menu-triangle--active')
            .parents('li')
            .find('ul')
            .slideToggle();
    });
    

    // Categories slider init

    if ($('.js-categories-slider').length > 0) {
        $('.js-categories-slider').slick({
            slidesToShow: 4,
			variableWidth: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
			            variableWidth: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                    }
                }
            ]
        });
    }


    // Reviews slider init

    if ($('.js-reviews-slider').length > 0) {
        $('.js-reviews-slider').slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    // News slider init

    const newsSlider = $('.js-news-slider');
    const newsSliderSettings = {
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    function initNewsSlider() {
        if (newsSlider.length > 0 && window.innerWidth > 767) {
            newsSlider.slick(newsSliderSettings);
        }
    }

    initNewsSlider();

    $(window).on('resize', function() {
        if (window.innerWidth < 768) {
            if (newsSlider.hasClass('slick-initialized')) {
                newsSlider.slick('unslick');
            }
            return;
        }
        if (!newsSlider.hasClass('slick-initialized')) {
            return newsSlider.slick(newsSliderSettings);
        }
    });


    // News slider arrows position

    if (window.innerWidth < 1400 && $('.news-slider').length > 0) {
        $(window).on('resize', function() {
            setTimeout(function() {
                const newsCardHeight = $('.news-card__img').height().toFixed(0);
                const arrowHeight = $('.news-slider .slick-arrow').height();
                const arrowTop = (newsCardHeight / 2) - (arrowHeight / 2);
    
                $('.news-slider .slick-arrow').css({'top': arrowTop});
            }, 200);
        });
    }


    // Portfolio sync slider

    if ($('.portfolio-big-slider').length > 0) {

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


    // Views products slider init

    if ($('.js-viewed-products-slider').length > 0) {
        $('.js-viewed-products-slider').slick({
            slidesToShow: 3,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.js-viewed-slider-prev').click(function(e) {
            e.preventDefault();
            $('.js-viewed-products-slider').slick('slickPrev');
        });

        $('.js-viewed-slider-next').click(function(e) {
            e.preventDefault();
            $('.js-viewed-products-slider').slick('slickNext');
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

    $('[data-fancybox="gallery"]').fancybox({
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        },
        loop: true
    });



    // Siderbar filter show more

    $('.js-category-filter-showall').on('click', function(e) {
        e.preventDefault();

        $('.category-filter-group__showall')
            .toggleClass('category-filter-group__showall--active')
            .parents('.category-filter-group__list')
            .find('[data-filter="forhide"]')
            .toggleClass('category-filter-group__item--hide');
        
        if ($(this).hasClass('category-filter-group__showall--active')) {
            $(this).text('Скрыть все');
        } else {
            $(this).text('Показать все');
        }

    });


    // Siderbar mobile filter show

    $('.js-category-filter-drop').on('click', function(e) {
        e.preventDefault();

        $(this)
            .toggleClass('category-filter__btndrop--active')
            .parents('.category-filter')
            .find('.category-filter__groups')
            .toggleClass('category-filter__groups--active')
    });


    // Close sidebar filter drop after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is('.category-filter *')) {
            $('.category-filter__btndrop').removeClass('category-filter__btndrop--active');
            $('.category-filter__groups').removeClass('category-filter__groups--active');
        }
    });
    


    
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


    // Is mobile object

    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        
    }








    // Custom telephone validator with maskeidInput

    $.validator.addMethod("minlengthphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 9;
    }, "");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "");

    


    // Validation cpform

    $('.js-cpform').each(function() {
        $(this).validate({
            errorElement: 'div',
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                tel: {
                    minlengthphone: true,
                    requiredphone: true,
                },
            },
            messages: {
                name: {
                    required: '',
                    minlength: '',
                },
                tel: {
                    minlengthphone: '',
                    requiredphone: '',
                },
            },
            submitHandler: function(form) {
                sendMail(form);
            }
        });
    });


    // Validation consult modal form

    $('.js-consult-modalform').each(function() {
        $(this).validate({
            errorElement: 'div',
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                tel: {
                    minlengthphone: true,
                    requiredphone: true,
                },
            },
            messages: {
                name: {
                    required: '',
                    minlength: '',
                },
                tel: {
                    minlengthphone: '',
                    requiredphone: '',
                },
            },
            submitHandler: function(form) {
                sendMail(form);
            }
        });
    });


    // Function to ajax send forms

    function sendMail(form) {
        $.ajax({
            type: 'POST',
            dataType:' json',
            url: '/wp-admin/admin-ajax.php?action=send_form',
            cache: false,
            data: $(form).serialize(),
            success: function(data) {
                if (data.status == 'success') {
                    $.fancybox.close();
                    $.fancybox.open({
                        src: "#success-modal",
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
                    setTimeout(function() {
                        $.fancybox.close(true);
                        $(form).trigger('reset');
                        $('.modal-form__input').removeClass('valid');
                        $('.modal-form__input').removeClass('error');
                    }, 3000);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    console.log('Internal error: ' + jqXHR.responseText);
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    }





})();