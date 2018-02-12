$(document).ready(function(){


    // Adaptive menu toggle
    // ===============================================

    $('.adaptive-menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('html').toggleClass('header-menu--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');

    });

    $('.adaptive-menu__link-hassub').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu__link-hassub--active').next().slideToggle();
    });



    // Add padding to layout from fixed block - header-top
    // ===============================================

    layoutPaddingTop();

    function layoutPaddingTop() {
        var fixedHeaderHeight = $('.header-top').outerHeight();    
        $('.layout').css('paddingTop', fixedHeaderHeight);
        $('.adaptive-menu-container').css('paddingTop', fixedHeaderHeight);
    }    

    $(window).resize(function() {
        layoutPaddingTop();
    });



    // Add padding to layout from fixed block - header-top
    // ===============================================

    $('.technical-charact__name').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('technical-charact__name--active').next().slideToggle();
    });
    
    

    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        btnTpl : {          
            smallBtn   : '<button data-fancybox-close class="fancybox-close-custom" title="Закрыть"></button>',
        },
        autoFocus : false,
        touch: false,
    });


    $('[data-fancybox="model-gallery"]').fancybox({
        hash : false,
    });



    // Form input datepicker
    // ===============================================

    if($('.form-input-date').length){
        $('.form-input-date').datepicker({
            language: 'ru-RU',
            weekStart: 1,
            offset: 0,
            autoHide: true,
        });        

        $('.form-input-date').datepicker('setStartDate', new Date());
    }



    // Custom telephone validator with maskeidInput

    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 11;
    }, "Недостаточно символов");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "Заполните поле корректно");


    // Validate callback form

    $('.callback-form').validate({
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
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов',
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    //
                }
            });
        }
    });



    // Validate service form

    $('.service-form').validate({
        errorElement: 'div',
        rules: {
            auto: {
                required: true,
                minlength: 2,
            },
            mileage: {
                required: true,
                minlength: 2,
            },
            car_number: {
                required: true,
                minlength: 2,
            },
            date: {
                required: true,
            },
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
            auto: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов',
            },
            mileage: {
                required: 'Заполните поле корректно',
                minlength: ''
            },
            car_number: {
                required: 'Заполните поле корректно',
                minlength: ''
            },
            date: {
                required: 'Заполните поле корректно',
            },
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });


    
    // Validate testdrive form

    $('.testdrive-modal-form').validate({
        errorElement: 'div',
        rules: {
            date: {
                required: true,
            },
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
            date: {
                required: 'Заполните поле корректно',
            },
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов',
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Validate newsletter modal form

    $('.newsletter-modal-form').validate({
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
        },
        messages: {
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            email: {
                required: 'Заполните поле корректно',
                email: 'Email введен не корректно',
            },
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    //
                }
            });
        }
    });



    // Validate leasing modal form

    $('.leasing-modal-form').validate({
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
            },
            total_cost: {
                required: true,
            },
            prepayment: {
                required: true,
            },
            leasing_term: {
                required: true,
            },           
        },
        messages: {
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
            email: {
                required: 'Заполните поле корректно',
                email: 'Email введен не корректно',
            },
            total_cost: {
                required: 'Заполните поле корректно',
            },
            prepayment: {
                required: 'Заполните поле корректно',
            },        
            leasing_term: {
                required: 'Заполните поле корректно',
            },
            
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Validate credit modal form

    $('.credit-modal-form').validate({
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
            },
            total_cost: {
                required: true,
            },
            prepayment: {
                required: true,
            },
            credit_term: {
                required: true,
            },           
        },
        messages: {
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
            email: {
                required: 'Заполните поле корректно',
                email: 'Email введен не корректно',
            },
            total_cost: {
                required: 'Заполните поле корректно',
            },
            prepayment: {
                required: 'Заполните поле корректно',
            },        
            credit_term: {
                required: 'Заполните поле корректно',
            },
            
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Validate insurance modal form

    $('.insurance-modal-form').validate({
        errorElement: 'div',
        rules: {
            auto: {
                required: true,
            },
            total_cost: {
                required: true,
            },
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
            },
        },
        messages: {
            auto: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            total_cost: {
                required: 'Заполните поле корректно',
            },
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
            email: {
                required: 'Заполните поле корректно',
                email: 'Email введен не корректно',
            },
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Validate credit modal form

    $('.tradein-modal-form').validate({
        errorElement: 'div',
        rules: {
            auto: {
                required: true,
            },
            auto_model: {
                required: true,
            },
            year: {
                required: true,
                minlength: 4,
            },
            name: {
                required: true,
                minlength: 2,
            }, 
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
            auto: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            auto_model: {
                required: 'Заполните поле корректно',
            },
            year: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 4-х символов'
            },
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },            
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Validate resume modal form

    $('.resume-modal-form').validate({
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
            },
            file_resume: {
                required: true,
            },
            file_photo: {
                required: true,
            }
        },
        messages: {
            name: {
                required: 'Заполните поле корректно',
                minlength: 'Длина должна быть не меньше 2-х символов'
            },
            tel: {
                requiredphone: 'Заполните поле корректно',
                minlenghtphone: 'Недостаточно символов',
            },
            email: {
                required: 'Заполните поле корректно',
                email: 'Email введен не корректно',
            },
            file_resume: {
                required: 'Загрузите файл',
            },  
            file_photo: {
                required: 'Загрузите фото',
            }          
        },
        highlight: function(element) {
            $(element).parents('.form-input-block').addClass('form-input-block--error').removeClass('form-input-block--valid');
        },
        unhighlight: function(element) {
            $(element).parent('.form-input-block').addClass('form-input-block--valid').removeClass('form-input-block--error');
        },
        submitHandler: function(form) {            
            $.ajax({
                url: '',
                type: 'POST',
                dataType: 'json',
                success: function(data){
                    // success
                }
            });
        }
    });



    // Custom select
    // ===============================================    

    $('.custom-form-select__btn').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.custom-form-select').toggleClass('custom-form-select--open');
        $('.custom-form-select__dropdown').toggleClass('custom-form-select__dropdown--open');
    });


    // Custom select choise option

    $('.custom-form-select-option__btn').on('click', function(e) {
        e.preventDefault();
        var dataOption = $(this).data('selectOption'),
            dataSelectImg = $(this).data('selectImg');
        $('.testdrive-modal-img').removeClass('testdrive-modal-img--active');
        $('.testdrive-modal-img--' + dataSelectImg).addClass('testdrive-modal-img--active');
        $(this).parents('.custom-form-select').addClass('custom-form-select--choosen');
        if($(this).hasClass('custom-form-select-option__btn--active')) {
            return false;
        } else {
            $('.custom-form-select-option__btn').removeClass('custom-form-select-option__btn--active');
            $(this).addClass('custom-form-select-option__btn--active').parents('.custom-form-select').find('.custom-form-select__btn').text(dataOption);        
            $('.custom-form-select').removeClass('custom-form-select--open');
            $('.custom-form-select__dropdown').removeClass('custom-form-select__dropdown--open');
        }

    });


    // Close custom select after outside click

    $(document).on('click', function(e) {
        if (!$(e.target).is(".custom-form-select *")) {
            $('.custom-form-select').removeClass('custom-form-select--open');
            $('.custom-form-select__dropdown').removeClass('custom-form-select__dropdown--open');
        }
    });



    // Leasing tabs

    $('.leasing-tabs__link').on('click', function(e) {
        e.preventDefault();
        $('.leasing-tabs__link').removeClass('leasing-tabs__link--active');
        $(this).addClass('leasing-tabs__link--active');
        $('.leasing-tabs-content').removeClass('leasing-tabs-content--active');
        $('.leasing-tabs-content').eq($(this).index()).addClass('leasing-tabs-content--active');
    });



    // Modal map
    // ===============================================

    var map,
        mapOptions,
        gMaps = google.maps;

    if($('#modal-map').length){
        function initializeModalMap() {
            var myLatlng = new google.maps.LatLng(50.032276, 36.341075);
            mapOptions = {
                zoom: 16,
                center: myLatlng,
                scrollwheel: false,
            };
            map = new google.maps.Map(document.getElementById('modal-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
            }); 
        }
    }

    google.maps.event.addDomListener(window, 'load', initializeModalMap);

    $('.modal-map-trigger').fancybox({
        btnTpl : {          
            smallBtn   : '<button data-fancybox-close class="fancybox-close-custom" title="Закрыть"></button>',
        },
        autoFocus : false,
        afterShow: function(){
            gMaps.event.trigger(map, 'resize');
            map.setCenter(mapOptions.center);
        }
    });


    
    // Fixed header after scroll
    // ===============================================

    $(window).scroll(function() {
        if($(this).scrollTop() > 84) {
            $('.header-top').addClass('header-top--scrolling');
        } else {
            $('.header-top').removeClass('header-top--scrolling');
        }
    });



    // Check scroll down/up
    // ===============================================

    var header_bottom_height = $('.header-bottom').outerHeight(),
        header_bottom_offset = $('.header-bottom').offset().top,
        header_bottom_point_bottom = header_bottom_height + header_bottom_offset - 74;

    var scroll_pos = 0, 
        scroll_top;

    $(window).scroll(function() {

        scroll_top = $(this).scrollTop();        

        if (scroll_top > scroll_pos) {            
            $('.header-bottom--scroll').removeClass('header-bottom--scroll-show');
        } else if(scroll_top < scroll_pos) {
            $('.header-bottom--scroll').addClass('header-bottom--scroll-show');
            if(scroll_top <= header_bottom_point_bottom) {
                $('.header-bottom--scroll').removeClass('header-bottom--scroll-show');
            }
        }

        scroll_pos = scroll_top;

    });



    // Car animate left to right
    // ===============================================

    if($('.car-animate').length && window.innerWidth > 999) {
        var animate_item_pos = $('.car-animate').offset().top;
        $(window).scroll(function() {
            var scroll_top = $(this).scrollTop();
            if (scroll_top > animate_item_pos + 100) {
                $('.tech-img-car').addClass('drive');
                $('.tradein-getting-auto').addClass('drive');
                $('.leasing-compare-car').addClass('drive');
            }
        });
    }



    // Warranty slideUp/slideDown

    $('.page-warranty-level__btn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('page-warranty-level__btn--active')) {
            $(this).parents('li').find('.page-warranty-level').removeClass('page-warranty-level--showing');
            $(this).text('Развернуть').removeClass('page-warranty-level__btn--active');
        } else {
            $(this).parents('li').find('.page-warranty-level').addClass('page-warranty-level--showing');
            $(this).text('Свернуть').addClass('page-warranty-level__btn--active');
        }
    });



    // Techservice table description

    $('.techservice-table-description__btn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('techservice-table-description__btn--active')) {
            $(this).parents().find('ul').slideUp();
            $(this).text('Развернуть').removeClass('techservice-table-description__btn--active');
        } else {
            $(this).parents().find('ul').slideDown();
            $(this).text('Свернуть').addClass('techservice-table-description__btn--active');
        }
    });



    // Hide/show warranty list
    // ===============================================

    $('.warranty-trigger-btn').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('warranty-trigger-btn--active')) {
            $(this).parent().find('.page-warranty-sublist--showing').removeClass('page-warranty-sublist--showing');
            $(this).text('Развернуть').removeClass('warranty-trigger-btn--active');
        } else {
            $(this).parent().find('.page-warranty-sublist--hidden-item').addClass('page-warranty-sublist--showing');
            $(this).text('Свернуть').addClass('warranty-trigger-btn--active');
        }
    });



    // Scroll to block
    // ===============================================

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();
        var scroll_target = $(this).data('target'),
            header_height = $('.header-top').outerHeight(),
            header_height_new = header_height + 20;
        
        if(scroll_target.length) {
            $('html, body').animate({ scrollTop: $('#' + scroll_target).offset().top - header_height_new }, 500);
        }
    });


   
    // Tel mask
    // ===============================================

    $('.form-input-tel').mask("+38 (999) 999-99-99");

    

    // Main slider init
    // ===============================================

    if($('.main-slider').length) {
        $('.main-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true, 
            dots: true,
            responsive: {
                0: {
                    nav: false,
                },
                768: {
                    nav: true,
                },
            },
        });
    }



    // Vacancy slider init
    // ===============================================


    if($('.vacancy-accordion-slider')) {
        $('.vacancy-accordion-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true, 
            dots: false,
        });
    }



    // Team mobile slider init
    // ===============================================


    if($('.team-group-slider')) {
        $('.team-group-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true, 
            dots: false,
        });
    }



    // Equipment-transmission toggle
    // ===============================================

    $('.equipment-transmission__link-i').on('click', function(e) {
        e.preventDefault();
        var price = $(this).data('price');
            transmissionNumber = $(this).data('transmissionNumber');
        $('.equipment-transmission__link-i').removeClass('equipment-transmission__link-i--active');
        $(this).addClass('equipment-transmission__link-i--active');
        $('.equipment-price__value span, .equipment-compare-col__price span').text(price);
        $('.equipment-compare-transmission').removeClass('equipment-compare-transmission--active');
        $('.equipment-compare-transmission--' + transmissionNumber).addClass('equipment-compare-transmission--active');
    });



    // Equipment model toggle
    // ===============================================

    $('.equipment-model-toggle__link').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('equipment-model-toggle__link--active');
        $(this).next().toggleClass('equipment-model-dropdown--active');
    });

    // equipment model close after click outside block

    $(document).on('click', function(e) {
        if (!$(e.target).is(".equipment-model-toggle *")) {
            $('.equipment-model-toggle__link').removeClass('equipment-model-toggle__link--active');
            $('.equipment-model-dropdown').removeClass('equipment-model-dropdown--active');
        }
    }); 



    // Equipment slider init
    // ===============================================

    if($('.equipment-slider').length) {
        $('.equipment-slider').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            nav: true, 
            dots: true,
            responsive: {
                0: {
                    nav: false,
                },
                1000: {
                    nav: true,
                },
            },
            onInitialized: equipmentSliderActive,
            onChanged: equipmentSliderActive,
            onTranslated: equipmentSliderActive,
        });
    }

    $('.equipment-slider-color').on('click', function(e) {
        e.preventDefault();

        var color_index = $(this).index(),
            new_color_index = color_index + 1;
        
        if($(this).hasClass('equipment-slider-color--active')) {
            return false;
        }

        $('.equipment-slider-color').removeClass('equipment-slider-color--active');
        $(this).addClass('equipment-slider-color--active');
        $('.equipment-slider').trigger('to.owl.carousel', color_index);

        $('.equipment-slider-colorname__value').removeClass('equipment-slider-colorname__value--active');
        $('.equipment-slider-colorname__value--' + new_color_index).addClass('equipment-slider-colorname__value--active');

    });

    function equipmentSliderActive(event) {

        var current_item = $('.equipment-slider .owl-item.active .equipment-slider__item').data('sliderIndex');         
        $('.equipment-slider-color').removeClass('equipment-slider-color--active');
        $('.equipment-slider-color--' + current_item).addClass('equipment-slider-color--active');

        $('.equipment-slider-colorname__value').removeClass('equipment-slider-colorname__value--active');
        $('.equipment-slider-colorname__value--' + current_item).addClass('equipment-slider-colorname__value--active');

    }    



    // Equipment compare toggler
    // ===============================================


    $('.equipment-compare-group__link').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('equipment-compare-group__link--collapse');
        $(this).parent().next().slideToggle();
    });


    // Equipment compare toggler
    // ===============================================

    var def_equipment = $('.equipment-compare-table').data('defaultEquipment');
    $('.equipment-compare-col--' + def_equipment).addClass('equipment-compare-col--show');

    $('.equipment-addcompare-toggle__btn').on('click', function(e) {
        e.preventDefault();
        var compare = $(this).data('compare');
        if(compare == def_equipment) {
            return false;
        } else {
            $(this).toggleClass('equipment-addcompare-toggle__btn--active');
            $('.equipment-compare-col--' + compare).toggleClass('equipment-compare-col--show');
            
            $('.equipment-addcompare-dropdown .equipment-addcompare-dropdow__item').each(function() {
            	var equipment_btns_count = $('.equipment-addcompare-toggle__btn', this).length;
            	var equipment_active_btns_count = $('.equipment-addcompare-toggle__btn--active').length;

            	if(equipment_active_btns_count > 0) {
	            	$('.equipment-showdifferent__link').addClass('equipment-showdifferent__link--visible');
	            } else {
	            	$('.equipment-showdifferent__link').removeClass('equipment-showdifferent__link--visible');
	            }	            
            });          
        }
    });


    // Equipment addcompare close after click beyond block
    // ===============================================

    $(document).on('click', function(e) {
        if (!$(e.target).is(".equipment-addcompare-block *")) {
            $('.equipment-addcompare__link').removeClass('equipment-addcompare__link--active');
            $('.equipment-addcompare-dropdown').removeClass('equipment-addcompare-dropdown--active');
        }
    }); 

   

	// Equipment addcompare dropdown hide/show
    // ===============================================    

    $('.equipment-addcompare__link').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('equipment-addcompare__link--active');
        $(this).next().toggleClass('equipment-addcompare-dropdown--active');
    });



    // Model diff paramets rows
    // ===============================================

    $('.equipment-showdifferent__link').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('equipment-showdifferent__link--active');
        $('.equipment-compare-row').removeClass('hidden');

        if($(this).hasClass('equipment-showdifferent__link--active')) {
            $(this).html('Показывать <br> все параметры');

            var countModel = $('.equipment-compare-head .equipment-compare-col--show').length;

            $('.equipment-compare-row').each(function() {
                var li_check = $('.equipment-compare-col--stat.equipment-compare-col--show[data-compare-label="check"]', this).length;
                var li_cross = $('.equipment-compare-col--stat.equipment-compare-col--show[data-compare-label="cross"]', this).length;

                if(li_check == countModel || li_check == 0 || li_cross == 0) {
                    $(this).addClass('hidden');
                }
            });

            $('.equipment-compare-group').each(function() {
            	var rowCount = $('.equipment-compare-row', this).length;
            	var rowCountHidden = $('.equipment-compare-row.hidden', this).length;

            	if(rowCount == rowCountHidden) {
            		$(this).addClass('hidden');
            	} else {
            		$(this).removeClass('hidden');
            	}
            });

        } else {
            $(this).html('Показывать <br> только отличия');
            $('.equipment-compare-group').each(function() {
            	var rowCount = $('.equipment-compare-row', this).length;
            	var rowCountHidden = $('.equipment-compare-row.hidden', this).length;

            	if(rowCount == rowCountHidden) {
            		$(this).addClass('hidden');
            	} else {
            		$(this).removeClass('hidden');
            	}
            });
        }        
    
    });



    // Vacancy accordion
    // ===============================================

    $('.vacancy-accordion__title').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('vacancy-accordion__title--active');
        $(this).next().slideToggle();
    });



    // Catalog slider init
    // ===============================================

    if($('.catalog-slider').length) {
        var owl = $('.catalog-slider').owlCarousel({
            loop: true,
            items: 3,
            nav: true, 
            dots: false,
            center: true,
            onDragged: carSliderCallback,
            onInitialized: carSliderCallback,
            onTranslated: carSliderCallback,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
            },
        });
    }

    function carSliderCallback() {

        var current_id = $('.catalog-slider .owl-item.center .catalog-slider__item').data('slideId');
        var currentAutoName = $('.catalog-slider .owl-item.center .catalog-slider__item').data('slideAutoname');

        // show name/price block

        $('.catalog-slider-info-item').removeClass('catalog-slider-info-item--active');
        $('.catalog-slider-info-item--' + current_id).addClass('catalog-slider-info-item--active');

        // show auto name on the button 

        $('.catalog-slider-more__autoname').text(currentAutoName);

        // shop charact block

        $('.catalog-slider-characts-item').removeClass('catalog-slider-characts-item--active');
        $('.catalog-slider-characts-item--' + current_id).addClass('catalog-slider-characts-item--active');

    }

    if(window.innerWidth > 767) {
        var catalog_slider_item_width = $('.catalog-slider.owl-carousel .owl-item').width();
        var catalog_slider_item_width_new = (catalog_slider_item_width/2) + 25;
        $('.catalog-slider.owl-carousel .owl-nav .owl-next').css('right', -catalog_slider_item_width_new);
        $('.catalog-slider.owl-carousel .owl-nav .owl-prev').css('left', -catalog_slider_item_width_new);    
    }
    
    $(window).resize(function() {

        if(window.innerWidth > 767) {
            var catalog_slider_item_width = $('.catalog-slider.owl-carousel .owl-item').width();
            var catalog_slider_item_width_new = (catalog_slider_item_width/2) + 25;            
            $('.catalog-slider.owl-carousel .owl-nav .owl-next').css('right', -catalog_slider_item_width_new);
            $('.catalog-slider.owl-carousel .owl-nav .owl-prev').css('left', -catalog_slider_item_width_new);
        }

    });



    // News slider init
    // ===============================================

    if($('.news-slider').length) {
        $('.news-slider').owlCarousel({
            loop: true,
            items: 3,
            nav: true, 
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }



    // Mobile services slider init
    // ===============================================

    if($('.services-slider').length) {
        $('.services-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true, 
            dots: false,
            margin: 0,
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                768: {
                    nav: true,
                },
                1000: {
                    items: 1,
                },
            },
            onInitialized: serviceSliderCounter,
            onChanged: serviceSliderCounter,
            onTranslated: serviceSliderCounter,
        });
    }

    function serviceSliderCounter(event) {

        var items = event.item.count;
        var current_item = $('.services-slider .owl-item.active .services-slider__item').data('sliderIndex'); 
        $('.service-slider-count__current').text(current_item);
        $('.service-slider-count__max').text(items);

    }    



    // Equipment slider init
    // ===============================================

    if($('.model-equipment-slider').length) {
        $('.model-equipment-slider').owlCarousel({
            items: 3,
            nav: true, 
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }   


  
    // Contacts google map
    // ===============================================

    if($('#contacts-page-map').length) {
        function initContactsPageMap(){
            var myLatlng = new google.maps.LatLng(50.032091, 36.341004);
            var mapOptions = {
                zoom: 18,
                center: myLatlng,
                scrollwheel: false,
            }
            var map = new google.maps.Map(document.getElementById('contacts-page-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
            }); 
        }
        google.maps.event.addDomListener(window, 'load', initContactsPageMap);    
    }  
    
});