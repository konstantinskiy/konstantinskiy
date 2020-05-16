
$(document).ready(function() {


    // Show/hide adaptive container after click

    function toggleAdaptiveMenu() {
        $('html').toggleClass('scroll-disable');
        $('.adaptive-slide').toggleClass('adaptive-slide--open');
        $('.header-hamburger__link').toggleClass('header-hamburger__link--open');
    }

    $('.header-hamburger__link').on('click', function(e) {
        e.preventDefault();
        toggleAdaptiveMenu();
    });



    // Add fixed header 
    
    function fixHeader() {
        const headerScroll = $('.header-scroll');
        if(window.innerWidth > 1000 && headerScroll.length > 0) {
            $(window).on('scroll', function() {
                if($(this).scrollTop() > 200) {
                    headerScroll.addClass('header-scroll--show');
                } else {
                    headerScroll.removeClass('header-scroll--show');
                }
            });
        }
    }
    
    fixHeader();


    
    // Sidebar sort posts datepickers

    if($('.js-date-from').length > 0 && $('.js-date-to').length > 0) {
        var dateFrom = $('.js-date-from').datepicker({
            onSelect: function(formattedDate, date, inst) {
                inst.hide();
                dateTo.update({
                    minDate: date
                });
            }
        }).data('datepicker');

        var dateTo = $('.js-date-to').datepicker({
            onSelect: function(formattedDate, date, inst) {
                inst.hide();
                dateFrom.update({
                    maxDate: date
                });
            }
        }).data('datepicker');
    }



    // Fancybox config

    $('[data-fancybox-modal]').fancybox({
        autoFocus : false,
        touch: false,
        hideScrollbar: true,
        parentEl: 'html',
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');  
        }
    });



    // Poptours slider init

    if($('.poptours-slider').length) {
        $('.poptours-slider').owlCarousel({
            items: 5,
            dots: false,
            center: true,
            loop: true,
            margin: 20,
            stagePadding: 100,
            responsive:{
                0: {
                    items: 1,
                    center: false,
                    dots: true,
                    stagePadding: 0,
                },
                600: {
                    items: 2,
                    center: false,
                    dots: true,
                    stagePadding: 0,
                },
                768: {
                    items: 3,
                    center: false,
                    stagePadding: 0,
                },
                1000: {
                    items: 3,
                },
                1280: {
                    items: 4,
                },
                1440: {
                    items: 5,
                }
            }
        });

        $('.js-poptour-left').on('click', function(e) {
            e.preventDefault();
            $('.poptours-slider').trigger('prev.owl.carousel');
        });

        $('.js-poptour-right').on('click', function(e) {
            e.preventDefault();
            $('.poptours-slider').trigger('next.owl.carousel');
        });
    }



    // Excursions slider init

    if($('.excursions-slider').length) {
        $('.excursions-slider').owlCarousel({
            items: 2,
            dots: false,
            loop: true,
            margin: 30,
            responsive:{
                0: {
                    items: 1,
                    dots: true,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
                1280: {
                    items: 2,
                }
            }
        });

        $('.js-excursions-left').on('click', function(e) {
            e.preventDefault();
            $('.excursions-slider').trigger('prev.owl.carousel');
        });

        $('.js-excursions-right').on('click', function(e) {
            e.preventDefault();
            $('.excursions-slider').trigger('next.owl.carousel');
        });
    }



    // Excursions slider init

    if($('.blog-slider').length) {
        $('.blog-slider').owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            margin: 20,
            responsive:{
                0: {
                    items: 1,
                    dots: true,
                },
                600: {
                    items: 2,
                    dots: true,
                },
                800: {
                    items: 3,
                },
                1000: {
                    items: 2,
                },
                1280: {
                    items: 3,
                }
            }
        });

        $('.js-blog-left').on('click', function(e) {
            e.preventDefault();
            $('.blog-slider').trigger('prev.owl.carousel');
        });

        $('.js-blog-right').on('click', function(e) {
            e.preventDefault();
            $('.blog-slider').trigger('next.owl.carousel');
        });
    }


    
    // Reviews slider init

    if($('.review-slider').length) {
        $('.review-slider').owlCarousel({
            items: 1,
            loop: true
        });
    }



    // Custom telephone validator

    $.validator.addMethod("minlenghtphone", function(value, element) {
        return value.replace(/\D+/g, '').length > 11;
    }, "Недостаточно символов");

    $.validator.addMethod("requiredphone", function(value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "Заполните поле корректно");



    // Validate order form

    $('.order-form').each(function() {
        $(this).validate({
            errorElement: 'div',
            rules: {
                order_city: {
                    required: true,
                }, 
                order_excursion: {
                    required: true,
                },
                order_peoples: {
                    required: true,
                },
                order_from: {
                    required: true,
                },
                order_to: {
                    required: true,
                }
            },
            messages: {
                order_city: {
                    required: ''
                },
                order_excursion: {
                    required: ''
                },
                order_peoples: {
                    required: ''
                },
                order_from: {
                    required: ''
                },
                order_to: {
                    required: ''
                }
            },
            submitHandler: function(form) {
                let _form = $(form);
                let order_city = _form.find('select[name="order_city"]').val();
                let order_excursion = _form.find('select[name="order_excursion"]').val();
                let order_peoples = _form.find('select[name="order_peoples"]').val();
                let order_from = _form.find('input[name="order_from"]').val();
                let order_to = _form.find('input[name="order_to"]').val();

                let orderData = {
                    'order_city': order_city,
                    'order_excursion': order_excursion,
                    'order_peoples': order_peoples,
                    'order_from': order_from,
                    'order_to': order_to
                };

                orderData = JSON.stringify(orderData);
                localStorage.setItem('order_form', orderData);

                window.location.href = "order.html";
            }
        });
    });



    // Set Order form input value from localStorage

    function setAttsOrderForm() {
        let orderFormData = JSON.parse(localStorage.getItem('order_form'));
        if(orderFormData !== null) {
            $('.order-form').find('select[name="order_city"]').val(orderFormData.order_city);
            $('.order-form').find('select[name="order_excursion"]').val(orderFormData.order_excursion);
            $('.order-form').find('select[name="order_peoples"]').val(orderFormData.order_peoples);
            $('.order-form').find('input[name="order_from"]').val(orderFormData.order_from);
            $('.order-form').find('input[name="order_to"]').val(orderFormData.order_to);
        }
    }

    setAttsOrderForm();



    // Validate discuss form

    $('.discuss-form').each(function() {
        $(this).validate({
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
                email: {
                    required: true,
                    email: true,
                }
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
                email: {
                    required: '',
                    email: '',
                },
            },
            submitHandler: function(form) {
                sendMail(form);
            }
        });
    });



    // Validate callback modal form

    $('.consult-modal-form').each(function() {
        $(this).validate({
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
                email: {
                    required: true,
                    email: true,
                }
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
                email: {
                    required: '',
                    email: '',
                },
            },
            submitHandler: function(form) {
                sendMail(form);
            }
        });
    });



    // Ajax function for send email

    function sendMail(form) {           
        $.ajax({
            type: "POST",
            dataType:' json',
            url: '/wp-admin/admin-ajax.php?action=send_form',
            data: $(form).serialize(),
            success: function(data) {
                if(data.status == 'success') {
                    $.fancybox.close();
                    $.fancybox.open({
                        src: '#success-modal',
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
                        $.fancybox.close();
                    }, 3000);
                    $(form).trigger("reset");
                }
            }
        }); 
    }


});