$(document).ready(function(){


    // Adaptive menu toggle

    $('.adaptive-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $('.adaptive-menu-container').addClass('open');
    });
    
    $('.adaptive-menu-close').on('click', function(e) {
        e.preventDefault();
        $('.adaptive-menu-container').removeClass('open');
    });


    // Header city dropdown

    $('.header-city__toggler').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('header-city__toggler--active')) {
            $(this).next().removeClass('header-city__dropdown--active');
            $(this).removeClass('header-city__toggler--active');
        } else {
            $(this).addClass('header-city__toggler--active');
            $(this).next().addClass('header-city__dropdown--active');
        }
    });

    $(document).on('click', function(e) {
        if(!$(e.target).is(".header-city__select-block *")) {
            $('.header-city__toggler').removeClass('header-city__toggler--active');
            $('.header-city__dropdown').removeClass('header-city__dropdown--active');
        };
    });


    // Show cart

    $(document).on('click', function(e) {
        if(!$(e.target).is(".header-cart *")) {
            $('.header-cart__content').removeClass('header-cart__content--active');
            $('.header-cart__dropdown').removeClass('header-cart__dropdown--active');
        };
    });


    $('.sidebar-filter-item__title').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sidebar-filter-item__title--up');
        $(this).next().slideToggle();
    })


    $('.header-cart__content').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-cart__content--active');
        $('.header-cart').toggleClass('header-cart--active');
        $(this).next().toggleClass('header-cart__dropdown--active');
    });


    // Header contacts extend toggle hide/show

    $('.header-contact-extend__trigger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-contact-extend__trigger--active');
        $(this).next().toggleClass('header-contact-extend__content--active');
    });

    $(document).on('click', function(e) {
        if(!$(e.target).is(".header-contact-extend *")) {
            $('.header-contact-extend__trigger').removeClass('header-contact-extend__trigger--active');
            $('.header-contact-extend__content').removeClass('header-contact-extend__content--active');
        };
    });


    // Adaptive sidebar filter toggle show/hide

    $('.sidebar-filter-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sidebar-filter-toggle--active').next().slideToggle();
    });


    // Placeholder for ie9

    $("[placeholder]").focus(function() {
        if($(this).val()==$(this).attr("placeholder")) $(this).val("");
    }).blur(function() {
        if($(this).val()=="") $(this).val($(this).attr("placeholder"));
    }).blur();

    $("[placeholder]").parents("form").submit(function() {
        $(this).find('[placeholder]').each(function() {
            if ($(this).val() == $(this).attr("placeholder")) {
                $(this).val("");
            }
        })
    });
    

    // Filter toggle 

    $('.filter-toggle__btn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('filter-toggle__btn--active')) {
            $(this).text('+ развернуть');
            $(this).removeClass('filter-toggle__btn--active');
            $('.filter-toggle-content').slideUp();
        } else {
            $(this).text('- свернуть');
            $(this).addClass('filter-toggle__btn--active');
            $('.filter-toggle-content').slideDown();
        }        
    });


    // Price range slider

    $("#range-slider-1").slider({
        min: 0,
        max: 20000,
        values: [0,20000],
        range: true,
        stop: function(event, ui) {
            $("#min-range-input-1").val($("#range-slider-1").slider("values",0));
            $("#max-range-input-1").val($("#range-slider-1").slider("values",1));
        },
        slide: function(event, ui) {
            $("#min-range-input-1").val($("#range-slider-1").slider("values",0));
            $("#max-range-input-1").val($("#range-slider-1").slider("values",1));
        }
    });

    $("#min-range-input-1").change(function() {
        var value1 = $("input#min-range-input-1").val();
        var value2 = $("input#max-range-input-1").val();

        if(parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("#min-range-input-1").val(value1);
        }
        $("#range-slider-1").slider("values", 0, value1);    
    });
    
    $("#max-range-input-1").change(function() {
        var value1 = $("#min-range-input-1").val();
        var value2 = $("#max-range-input-1").val();
        
        if(value2 > 20000) {
            value2 = 20000;
            $("#max-range-input-1").val(20000);
        }

        if(parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("#max-range-input-1").val(value2);
        }
        $("#range-slider-1").slider("values", 1, value2);
    });


    $("#range-slider-2").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function(event, ui) {
            $("#min-range-input-2").val($("#range-slider-2").slider("values", 0));
            $("#max-range-input-2").val($("#range-slider-2").slider("values", 1));
        },
        slide: function(event, ui) {
            $("#min-range-input-2").val($("#range-slider-2").slider("values", 0));
            $("#max-range-input-2").val($("#range-slider-2").slider("values", 1));
        }
    });

    $("#min-range-input-2").change(function() {
        var value1 = $("#min-range-input-2").val();
        var value2 = $("#max-range-input-2").val();

        if(parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("#min-range-input-2").val(value1);
        }
        $("#range-slider-2").slider("values", 0, value1);    
    });
    
    $("#max-range-input-2").change(function() {
        var value1 = $("#min-range-input-2").val();
        var value2 = $("#max-range-input-2").val();
        
        if (value2 > 1000) {
            value2 = 1000;
            $("#max-range-input-2").val(1000)
        }

        if(parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("#max-range-input-2").val(value2);
        }
        $("#range-slider-2").slider("values", 1, value2);
    });


    // Modal

    $('.modal-trigger').fancybox();


    // Tel mask

    if($('.form-input-tel').length > 0) {
        $('.form-input-tel').mask("+7(999) 999-99-99");
    }    


    // Audio controls 

        // play-stop click event
    $(document).on('click', '.audio-control--play', function(e) {
        e.preventDefault();
        //$(this).parents('.reviews').find('audio')[0].pause(); // pause all playing audio, not this
        //$(this).parents('.reviews').find('audio')[0].currentTime = 0; // return all audio current time to 0 second

        var tAudio = $(this).parents('.review-item').find('audio')[0];
        
        //$('.review-item.review-item--active').removeClass('review-item--active');
        //$(this).parents('.review-item').addClass('review-item--active');
        //$(this).parents('.review-item__audio').find('audio')[0].play();

        if(tAudio.paused == true) {
            var audios = $('.reviews').find('audio');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
            $('.review-item.review-item--active').removeClass('review-item--active');
            $(this).parents('.review-item').addClass('review-item--active');
            tAudio.play();
        } else {
            $('.review-item.review-item--active').removeClass('review-item--active');
            tAudio.pause();
        }
    });

        // pause action
    // $(document).on('click', '.audio-control--pause', function(e){
    //     e.preventDefault();
    //     $(this).parents('.review-item').removeClass('review-item--active');
    //     $(this).parents('.review-item__audio').find('audio')[0].pause();
    // });


    // Owl carousels

    $('.advice-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false, 
        dots: true,   
    });

    $('.popular-slider').owlCarousel({
        loop: true,
        items: 4,
        nav: true,  
        dots: false,     
        responsive:{
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }); 


    // Accordeon

    $('.accordeon-item__title').on('click', function() {
        if($(this).hasClass('accordeon-item__title--active')) {
            $(this).removeClass('accordeon-item__title--active').next().slideUp();
        } else {
            $('.accordeon-item__title.accordeon-item__title--active').next().slideUp();
            $('.accordeon-item__title.accordeon-item__title--active').removeClass('accordeon-item__title--active');
            $(this).addClass('accordeon-item__title--active').next().slideDown();
        }
    });

  
    // Input increment value

    $(document).on('click', '.product-complect-counter-btn__minus', function(e) {
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.product-complect-counter-input'),
            inputValue = $(this).parent().find('.product-complect-counter-input').val();
        
        if(!(inputValue - counterValue) <= 0) {        
            input.val(parseInt(inputValue) - counterValue);
        }
    });


    // Input decrement value

    $(document).on('click', '.product-complect-counter-btn__plus', function(e) {
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.product-complect-counter-input'),
            inputValue = $(this).parent().find('.product-complect-counter-input').val();
        input.val(parseInt(inputValue) + counterValue);
    });

      
    // Contacts map

    if($('#contacts-map').length > 0) {
       
    }

    
});