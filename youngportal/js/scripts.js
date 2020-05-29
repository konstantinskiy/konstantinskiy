$(document).ready(function(){


    // Functions for show/hide adaptive container

    function toggleAdaptive() {
        $('.adaptive-slide-container').toggleClass('adaptive-slide-container--open');
        $('.adaptive-slide-bg').toggleClass('adaptive-slide-bg--open');
        if(window.innerWidth <= 767) {
            $('html').toggleClass('overflow-hidden');
        }
    }

    // Show/hide adaptive container after click

    $('.js-adaptive-menu-toggle, .js-adaptive-slide-close').on('click', function(e) {
        e.preventDefault();
        toggleAdaptive();
    });

    $(document).on('click', '.adaptive-slide-bg--open', function(e) {
        e.preventDefault();
        toggleAdaptive();
    });



    // Scroll to target btn

    $('.js-next-scroll').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('scroll-target');
        if(target) {
            $('html, body').animate({scrollTop: $('.' + target).offset().top}, 400);
        }
    });



    // Fancybox config

    $('[data-fancybox-modal]').fancybox({
        autoFocus : false,
        touch: false ,
        hideScrollbar: true,
        parentEl: 'html',
        beforeShow: function() {
            $('html').addClass('fancybox-scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('fancybox-scroll-disable');  
        }
    }); 

    

    // Company slider init

    if($('.company-slider').length) {
        $('.company-slider').owlCarousel({
            items: 4,
            margin: 10,
            nav: true,
            dots: false,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                640: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
            }
        });

    }



    // Tel mask

    $('.js-tel-mask').mask("+38(999)-999-99-99");



    // Custom telephone validator with maskeidInput

    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 11;
    }, "Недостаточно символов");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "Заполните поле корректно");



    // Validate callback form

    $('.reg-form').validate({
        errorElement: 'div',
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
            },
            surname: {
                required: true,
                minlength: 2,
            },
            tel: {
                requiredphone: true,
                minlenghtphone: true,
            },
            spec_select: {
                required: true,
            },
        },
        messages: {
            name: {
                required: '',
                minlength: '',
            },
            email: {
                required: '',
                email: '',
            },
            surname: {
                required: '',
                minlength: '',
            },
            tel: {
                requiredphone: '',
                minlenghtphone: '',
            },
            spec_select: {
                required: '',
            },
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data) {
                    // code after success
                }
            });
        }
    });


    // Validate questionary form

    $('.questionary-form').validate({
        errorElement: 'div',
        rules: {
            questionary_name: {
                required: true,
                minlength: 2,
            }, 
            questionary_school: {
                required: true,
            },
            questionary_tel: {
                requiredphone: true,
                minlenghtphone: true,
            },
            questionary_email: {
                required: true,
                email: true,
            },
        },
        messages: {
            questionary_name: {
                required: '',
                minlength: '',
            },
            questionary_school: {
                required: '',
            },
            questionary_tel: {
                requiredphone: '',
                minlenghtphone: '',
            },
            questionary_email: {
                required: '',
                email: '',
            },
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data) {
                    // code after success
                }
            });
        }
    });



    // Questionary tabs

    $('.questionary-tabs__link').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('questionary-tabs__link--active')) return;

        var tabId = $(this).data('questionary-tab');
        $('.questionary-tabs__link').removeClass('questionary-tabs__link--active');
        $(this).addClass('questionary-tabs__link--active');

        $('.questionary-tab').removeClass('questionary-tab--active');
        $('.questionary-tab--' + tabId).addClass('questionary-tab--active');
    });



    // Trigger file

    $(document).on('click', '.js-form-file', function(e) {
        e.preventDefault();
        $(this).parents('.questionary-form__group--file').find('.questionary-form__fileinput').trigger('click');
    });

    $(document).on('click', '.js-filename-close', function(e) {
        e.preventDefault();
        $(this).parents('.questionary-form__group--file').find('.questionary-file__name').removeClass('questionary-file__name--show');
        $(this).parents('.questionary-form__group--file').find('.questionary-file__name-value').text('');
        $(this).parents('.questionary-form__group--file').find('.questionary-form__fileinput').val('');
    });


    // Set filename to <div> after input type="file" change, valid filetypes: txt, pdf, doc, jpg, jpeg, png, bmp

    $('.questionary-form__fileinput').change(function(e) {
        var file = this.files[0],
            filename = file.name.toLowerCase(),
            filetype = filename.split('.').pop();

        if(filetype == 'txt' || filetype == 'pdf' || filetype == 'doc' || filetype == 'jpg' || filetype == 'jpeg' || filetype == 'png' || filetype == 'bmp' ) {
            $(this).parents('.questionary-form__group--file').find('.questionary-file__name').addClass('questionary-file__name--show');
            $(this).parents('.questionary-form__group--file').find('.questionary-file__name-value').text(filename);
            console.log('true filetype');
            return true;
        } else {
            console.log('false filetype');
            return false;
        }
    });


});