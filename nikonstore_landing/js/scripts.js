$(document).ready(function(){


    // Adaptive menu toggle
    // ===============================================

    $('.adaptive-menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');

    }); 



    // Set active class to header menu link
    // ===============================================

    $('.header-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link--active');
        $(this).addClass('header-menu__link--active');
    });



    // Set active class to adaptive menu link
    // ===============================================

    $('.adaptive-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.adaptive-menu__link').removeClass('adaptive-menu__link--active');
        $(this).addClass('adaptive-menu__link--active');
    });



    // Add/remove header class after scroll
    // ===============================================

    $(window).on('scroll', function() {
        if($(this).scrollTop() > 300) {
            $('.header').addClass('header--scrolled');
        } else {
            $('.header').removeClass('header--scrolled');
        }
    });



    // Scroll to target btn

    $('.js-scrollto').on('click', function(e){
        e.preventDefault();
        var target = $(this).data('target');
        if(target) {
            $('html, body').animate({scrollTop: $('#' + target).offset().top}, 400);
        }        
    });



    // Header slider
    // ===============================================

    if($('.header__slider').length) {
        $('.header__slider').slick({
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 1000,
            fade: true,
            cssEase: 'linear'
        });
    }

    function setSliderHeight () {
        var headerH = $('.header').outerHeight();
        if(window.innerWidth < 1001) {
            $('.header').height(headerH);
            $('.header__slider-item').outerHeight(headerH);
        }    
    }
    
    setSliderHeight();

    $(window).resize(function() {
        if(window.innerWidth < 1001) {
            setSliderHeight();
        }
    });



    // Service slider
    // ===============================================

    if($('.service-slider').length) {
        $('.service-slider').slick({
            dots: true,
            slidesToShow: 1,
        });
    }   
    


    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
    });



    // Validate callback form

    $('.feedback-form').validate({
        errorElement: 'div',
        errorClass : 'erorr-message',
        rules: {
            name: {
                required: true,
                minlength: 2,
            }, 
            email: {
                required: true,
                email: true,
            },
            question_to: {
                required: true,
            },
            message: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Обязательное поле',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            email: {
                required: 'Обязательное поле',
                email: 'Заполните email корректно',
            },
            question_to: {
                required: 'Обязательное поле',
            },
            message: {
                required: 'Обязательное поле',
            },
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success

                    $('.feedback-form').reset();
                }
            });
        }
    });



    // Contacts accordion
    // ===============================================

    $('.contacts-accordion__btn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('contacts-accordion__btn--active')) {
            $(this).next().slideUp();
            $(this).parent().removeClass('contacts-accordion__item--active');
            $(this).removeClass('contacts-accordion__btn--active');
            
        } else {
            $('.contacts-accordion__btn--active').next().slideUp();
            $('.contacts-accordion__btn').removeClass('contacts-accordion__btn--active');
            $(this).addClass('contacts-accordion__btn--active').next().slideDown();
            $('.contacts-accordion__item').removeClass('contacts-accordion__item--active');
            $(this).parent().addClass('contacts-accordion__item--active');
        }
    });



    // Contacts google map
    // ===============================================

    if($('#contacts-map').length) {
        var lat = $('#contacts-map').data('lat');
        var lng = $('#contacts-map').data('lng');
        function initContactsMap(){
            var myLatlng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
                scrollwheel: false,
            }
            var map = new google.maps.Map(document.getElementById('contacts-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
            }); 
        }
        google.maps.event.addDomListener(window, 'load', initContactsMap);    
    } 

});