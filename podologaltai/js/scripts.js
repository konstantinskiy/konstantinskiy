$(document).ready(function() {


    // Functions for show/hide adaptive container after click

    function toggleAdaptiveMenu() {
        $('.s-adaptive-slide').toggleClass('s-adaptive-slide--open');
        $('.menu-toggle-btn').toggleClass('menu-toggle-btn--open');
        $('html').toggleClass('scroll-disable');
    }

    $('.js-header-slide').on('click', function(e) {
        e.preventDefault();
        toggleAdaptiveMenu();
    });


    // Hero slider

    if ($('.js-hero-slider').length > 0) {
        $('.js-hero-slider').slick({
            arrows: false,
            dots: true,
        });
    }
    

    // Reviews slider

    if ($('.reviews-slider').length > 0) {
        $('.reviews-slider').slick({
            slidesToShow: 3,
            centerMode: true,
        });
    }


    // Modal init

    $('[data-fancybox-modal], [data-fancybox]').fancybox({
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


    // Scroll to target btn

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        const scrollTo = $(this).data('scrollto');
        if (scrollTo) {
            $('html, body').animate({scrollTop: $('.' + scrollTo).offset().top}, 400);
        }        
    });


    // Custom telephone validator with maskeidInput

    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 9;
    }, "");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "");


    // Validate order form

    $('.js-order-form').each(function() {
        $(this).validate({
            errorElement: 'div',
            rules: {
                phone: {
                    minlenghtphone: true,
                    requiredphone: true,
                },
            },
            messages: {
                phone: {
                    minlenghtphone: '',
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
            url: 'send.php',
            data: $(form).serialize(),
            success: function(data) {
                if (data.status == 'success') {
                    document.location.href = './thx.php';
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    console.log('Internal error: ' + jqXHR.responseText);
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    }


});