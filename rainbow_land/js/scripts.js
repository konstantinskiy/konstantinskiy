$(document).ready(function(){


    // Functions for show/hide adaptive container

    function toggleAdaptive() {
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');
        $('.adaptive-menu-shadow').toggleClass('adaptive-menu-shadow--open');
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
    }

    function removeAdaptive() {
        $('.adaptive-menu-container').removeClass('adaptive-menu-container--open');
        $('.adaptive-menu-shadow').removeClass('adaptive-menu-shadow--open');
        $('.adaptive-menu-toggle').removeClass('adaptive-menu-toggle--open');
    }


    // Show/hide adaptive container after click

    $('.adaptive-menu-toggle, .adaptive-menu-container__close, .adaptive-container__toggle').on('click', function(e) {
        e.preventDefault();
        toggleAdaptive();
    }); 


    // Close adaptive container after click on the shadow

    $(document).on('click', '.adaptive-menu-shadow', function() {
        toggleAdaptive();
    });


    // Close adaptive after click button Esc 

    $(document).on('keyup', function(e) {
        e.preventDefault();
        if(e.keyCode === 27) {
            removeAdaptive();
        }
    });



    // Header search close ico

    $('.header-search__ico').on('click', function(e) {
        e.preventDefault();
        $('.search-adaptive-block').slideToggle();
    });



    // Scroll to target btn

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('scrollTarget');
        if(target) {
            $('html, body').animate({scrollTop: $('#' + target).offset().top}, 400);
        }
    });



    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
    });



    // Select styler init
    // ===============================================

    if($('.service-styler-select').length) {
        $('.service-styler-select').styler();
    }
    


    // Main slider init
    // ===============================================

    if($('.main-slider').length) {
        $('.main-slider').slick({
            arrows: false,
            dots: true,
        });
    }

    $('.main-slider__arr--prev').click(function(e) {
        e.preventDefault();
        $('.main-slider').slick('slickPrev');
    });

    $('.main-slider__arr--next').click(function(e) {
        e.preventDefault();
        $('.main-slider').slick('slickNext');
    });



    // Heroes slider init
    // ===============================================

    if($('.heroes-slider').length) {
        $('.heroes-slider').slick({
            slidesToShow: 4,
            dots: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        dots: false,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
    }



    // Price slider init
    // ===============================================

    if($('.price-slider').length) {
        $('.price-slider').slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }



    // Service hero slider init
    // ===============================================

    if($('.service-hero-slider').length) {
        $('.service-hero-slider').slick({
            dots: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }



    // Programs slider init
    // ===============================================

    if($('.programs-slider').length) {
        $('.programs-slider').slick({
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });
    }



    // Gallery slider init
    // ===============================================

    if($('.gallery-slider').length) {
        $('.gallery-slider').slick({
            slidesToShow: 4,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
    }



    // Videogallery slider init
    // ===============================================

    if($('.videogallery-slider').length) {
        $('.videogallery-slider').slick({
            slidesToShow: 3,
            dots: true,
            centerMode: true,
            centerPadding: 0,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
    }



    // Videogallery slider init
    // ===============================================

    if($('.videoprograms-slider').length) {
        $('.videoprograms-slider').slick({
            slidesToShow: 3,
            dots: true,
            centerMode: true,
            centerPadding: 0,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }



    // Related slider init
    // ===============================================

    if($('.related-slider').length) {
        $('.related-slider').slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1000,
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
    }


    // Mclass hero slider init
    // ===============================================

    if($('.mclass-hero-slider').length) {
        $('.mclass-hero-slider').slick({
            slidesToShow: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }



    $('.service-description-more__btn').on('click', function(e) {
        e.preventDefault();
        $(this).parents().prev().css('height', 'auto');
        $(this).hide();
    });



    $('.js-order-related').on('click', function(e) {
        e.preventDefault();
        var related_service_name = $(this).data('releatedServiceName');
        console.log(related_service_name);
    });



    $('.js-herofilter-checkall').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('hero-filter__checkall--checked')) {
            $(this).parents('.hero-filter').find('.custom-radio__link').removeClass('custom-radio__link--active');
            $(this).removeClass('hero-filter__checkall--checked');
            $(this).text('Выбрать все');
        } else {
            $(this).parents('.hero-filter').find('.custom-radio__link').addClass('custom-radio__link--active');
            $(this).addClass('hero-filter__checkall--checked');
            $(this).text('Отключить все');
        }        
    });



    // Tel mask
    // ===============================================

    if($('.input-tel').length) {
        $('.input-tel').mask("+7 99-999-99-99");
    }



    // Confirm checkbox 

    $('.order-form__confirm').on('click', function(e) {
        e.preventDefault();

        if($('.order-form__checkbox').hasClass('order-form__checkbox--checked')){
            $(this).removeClass('order-form__confirm--checked');
            $('.order-form__checkbox').removeClass('order-form__checkbox--checked').prop('checked', false);
        } else{
            $(this).addClass('order-form__confirm--checked');
            $('.order-form__checkbox').addClass('order-form__checkbox--checked').prop('checked', true);
        }
    });



    // Custom telephone validator with maskeidInput

    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 9;
    }, "");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "");



    // Validate and send order form

    $('.order-form').validate({
        errorElement: 'div',
        rules: {
            name: {
                required: true,
                minlength: 2,
            }, 
            tel: {
                requiredphone: true,
                minlenghtphone: true,
            },
            order_form_agree: {
                required: true,
            },
        },
        messages: {
            name: {
                required: '',
                minlength: ''
            },
            tel: {
                requiredphone: '',
                minlenghtphone: '',
            },
            order_form_agree: {
                required: 'Вы не дали согласие',
            },
        },
        submitHandler: function(form) { 
            console.log('sending ...');
            sendMail(form);
        }
    });


    // Validate and send callback modal form

    $('.callback-modal-form').validate({
        errorElement: 'div',
        rules: {
            name: {
                required: true,
                minlength: 2,
            }, 
            tel: {
                requiredphone: true,
                minlenghtphone: true,
            },
        },
        messages: {
            name: {
                required: '',
                minlength: ''
            },
            tel: {
                requiredphone: '',
                minlenghtphone: '',
            },
        },
        submitHandler: function(form) { 
            console.log('sending ...');
            sendMail(form);
        }
    });

    

    // Validate and send order discount form

    $('.order-modal-form').validate({
        errorElement: 'div',
        rules: {
            name: {
                required: true,
                minlength: 2,
            }, 
            tel: {
                requiredphone: true,
                minlenghtphone: true,
            },
        },
        messages: {
            name: {
                required: '',
                minlength: ''
            },
            tel: {
                requiredphone: '',
                minlenghtphone: '',
            },
        },
        submitHandler: function(form) { 
            console.log('sending ...');
            sendMail(form);
        }
    });

    function sendMail(form) {           
        $.ajax({
            type: "POST",
            dataType:' json',
            url: "send.php",
            data: $(form).serialize(),
            beforeSend: function(data) {
                $(form).find('.order-form__submit').attr('disabled','disabled');
            },
            success: function(data) {
                console.log('success');
                $(form).find('.order-form__submit').removeAttr('disabled');
                $(form)[0].reset();
                if($(form).find('.order-form__confirm')) {
                    $('.order-form__confirm').removeClass('order-form__confirm--checked');
                    $('.order-form__checkbox').removeClass('order-form__checkbox--checked').prop('checked', false);
                }
            }
        }); 
    }



    // Ballon animate
    
    function balloonAnimate() {
        if($('.gallery-container').length && $('.gallery-container__ballon').length) {
            var gallery_container_offset_top = $('.gallery-container').offset().top,
                gallery_container_top_point = gallery_container_offset_top - ($(window).height())/2.2;

            $(window).on('scroll', function() {
                var scroll_value = $(this).scrollTop();

                if(scroll_value > gallery_container_top_point) {
                    $('.gallery-container__ballon').css({
                        'transform': 'translateY(70px)'
                    });
                } else {
                    $('.gallery-container__ballon').css({
                        'transform': 'translateY(-70px)'
                    });
                }
            });    
        }
    }
    
    balloonAnimate();



    // Plane animate
    
    function planeAnimate() {
        var discount_offset_top = $('.order-discount-container').offset().top,
            discount_container_top_point = discount_offset_top + ($(window).height())/10;

        $(window).on('scroll', function() {
            var scroll_value = $(this).scrollTop();

            if(scroll_value > discount_container_top_point) {
                $('.discount-calc__plane').css({
                    'transform': 'translateX(70px)'
                });
            } else {
                $('.discount-calc__plane').css({
                    'transform': 'translateX(-70px)'
                });
            }
        });    
    }
    
    if($('.order-discount-container').length) {
        planeAnimate();
    }    



    // Parallax blocks


    $('.js-gallery-container-parallax').mousemove(function(e) {
        parallaxIt(e, '.main-slider-element--1', 45, 0);
        parallaxIt(e, '.main-slider-element--2', 150, 0);
        parallaxIt(e, '.main-slider-element--3', -100, 0);
    });

    $('.js-gallery-container-parallax').mousemove(function(e) {
        parallaxIt(e, '.gallery-container__clouds', -70, 30);
    });

    $('.js-gallery-container-parallax').mousemove(function(e) {
        parallaxIt(e, '.gallery-container__stars', 35, -15);
    });

    $('.js-mclass-container-parallax').mousemove(function(e) {
        parallaxIt(e, '.mclass-container__serpantine--left', -120, 5);
        parallaxIt(e, '.mclass-container__serpantine--right', 50, 10);
    });
    

    function parallaxIt(e, target, movementX, movementY) {
        var $this = $('.parallaxBox');
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movementX,
            y: (relY - $this.height() / 2) / $this.height() * movementY,
        });
    }



    // Custom radio

    $('.js-custom-radio').on('click', function(e) {
        e.preventDefault();
        var checkbox_percent_value = $(this).data('checkbox-value'),
            checkbox_percent_total = $('.discount-calc__total span').text(),
            checkbox_percent_result = 0;

        if($(this).hasClass('custom-radio__link--active')) {
            $(this).removeClass('custom-radio__link--active');
            checkbox_percent_result = parseInt(checkbox_percent_total) - parseInt(checkbox_percent_value);
            if($('.custom-radio__link--active').length <= 1) {
                checkbox_percent_result = 0;
            }
        } else {
            $(this).addClass('custom-radio__link--active');
            if($('.custom-radio__link--active').length > 1) {
                checkbox_percent_result = parseInt(checkbox_percent_total) + parseInt(checkbox_percent_value);
            }
        }
  
        $('.discount-calc__total span').text(checkbox_percent_result);
        
    });



    // Action after show discount modal

    $('.js-order-discount').on('click', function(e) {
        e.preventDefault();

        var services_list_arr = [];
                
        $('.custom-radio__link--active').each(function() {
            var order_service = $(this).find('span').text();
            services_list_arr.push(order_service);
        });

        $('.form-services-list-hidden').val(services_list_arr);
        $('.form-services-percent-hidden').val($('.discount-calc__total span').text());

    });



    // Google map
    // ===============================================

    if($('#map-container').length) {
        function initContactsMap() {
            var myLatlng = new google.maps.LatLng(50.032091, 36.341004);
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
                scrollwheel: false,
            }
            var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
            }); 
        }
        google.maps.event.addDomListener(window, 'load', initContactsMap);    
    }


});