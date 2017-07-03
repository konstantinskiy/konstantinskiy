$(document).ready(function(){

    // Header city toggle block
    
    $('.header-city-toggler').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('header-city-toggler--active');
        $(this).next().toggleClass('header-city-select-dropdown--active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).is(".header-city-select-block *")) {
            $('.header-city-toggler').removeClass('header-city-toggler--active');
            $('.header-city-select-dropdown').removeClass('header-city-select-dropdown--active');
        };
    }); 

    // Adaptive menu toggle

    $('.adaptive-menu-toggler').on('click', function(e){
        e.preventDefault();
        $('.adaptive-menu-container').slideToggle();
    });
    
    $('.adaptive-menu-close').on('click', function(e){
        e.preventDefault();
        $('.adaptive-menu-container').removeClass('open');
    });


    // Adaptive search block toggle

    $('.adaptive-header-search-block__trigger').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('adaptive-header-search-block__trigger--active')){
            $(this).removeClass('adaptive-header-search-block__trigger--active');
            $('.adaptive-header-search-dropdown').removeClass('open');    
        }
        else{
            $(this).addClass('adaptive-header-search-block__trigger--active');
            $('.adaptive-header-search-dropdown').addClass('open');       
        }        
    });

    // Adaptive search close

    $('.adaptive-search-close').on('click', function(e){
        e.preventDefault();
        if($('.adaptive-header-search-dropdown').hasClass('open')){
            $('.adaptive-header-search-block__trigger').removeClass('adaptive-header-search-block__trigger--active');
            $('.adaptive-header-search-dropdown').removeClass('open');    
        }
        else{
            $('.adaptive-header-search-block__trigger').addClass('adaptive-header-search-block__trigger--active');
            $('.adaptive-header-search-dropdown').addClass('open');       
        }        
    });


    // Callback modal

    $('.callback-modal-trigger').fancybox({
        wrapCSS: 'callback-modal-container',
        helpers : { 
            overlay: {
                css : {
                    'background' : 'rgba(109, 109, 109, 0.5)',
                }
            }
        }
    });


    // Datepicker 
    
    if($('.form-input-date').length){
        $('.form-input-date').datepicker();
    }


    // Tel mask

    $('.form-input-tel').mask("+7(999) 999-99-99");


    // Action owl slider 

    $('.action-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true, 
        dots: true,   
        responsive:{            
            0: {
                nav: false,
            },
            767: {
                nav: true,
            },
        }   
    });

    // Product owl slider 

    $('.product-slider').owlCarousel({
        loop: true,
        items: 5,
        margin: 0,
        nav: true,  
        dots: false,     
        responsive:{
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1366: {
                items: 5,
            }
        }
    }); 

    // Brands owl slider 

    $('.brands-slider').owlCarousel({
        loop: true,
        items: 5,
        nav: true,  
        dots: false,     
        responsive:{
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            767: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    }); 


    // Action counter 
    
    $('#action-counter').mbComingsoon({
        expiryDate: new Date(2017, 10, 0, 25, 30),
        speed: 600,
        localization: {
            days: "Дней",
            hours: "Часов",
            minutes: "Минут",
            seconds: "Секунд"
        },
    });


    // Change big product image 

    $('.product-slider-thumb-trigger').click(function(e){
        e.preventDefault();
        var bigImgPath = $(this).attr('href');
        $('.product-slider-thumb-trigger.active').removeClass('active');
        $(this).addClass('active');
        $('.product-slider-big-img').attr('src', bigImgPath);
    });


    // Close all opened select after click on the empty place

    $(document).on('click', function(e) {
        if (!$(e.target).is(".product-complect-select-block *")) {
            $('.product-complect-select-block').removeClass('active');
            $('.product-select-options').slideUp(100);
        };
    });   


    // Input increment value

    $(document).on('click', '.cart-counter-btn__minus', function(e){
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.cart-calculate-input'),
            inputValue = $(this).parent().find('.cart-calculate-input').val();
        
        if(!(inputValue - counterValue) <= 0){        
            input.val(parseInt(inputValue) - counterValue);
        }
        return false;
    });


    // Input decrement value

    $(document).on('click', '.cart-counter-btn__plus', function(e){
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.cart-calculate-input'),
            inputValue = $(this).parent().find('.cart-calculate-input').val();
        input.val(parseInt(inputValue) + counterValue);
    });


    // Delete cart row

    $(document).on('click', '.cart-delete-row-btn', function(e){
        e.preventDefault();
        $(this).parents('.cart-table-row').remove();
    });   
    
});