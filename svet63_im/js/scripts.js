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
        $(this).toggleClass('adaptive-menu-toggler--active');
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

    $('.modal-trigger').fancybox({
        wrapCSS: 'modal-container',
        helpers : { 
            overlay: {
                css : {
                    'background' : 'rgba(109, 109, 109, 0.5)',
                }
            }
        }
    });


    // Photo fancybox

    $('.product-zoom-btn').fancybox();


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

    // Single product owl slider

    $('.single-product-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true, 
        dots: false,   
        thumbs: true,
        thumbsPrerendered: true
    });

    // Fastsee product owl slider

    $('.fastsee-product-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false, 
        dots: false,   
        thumbs: true,
        thumbsPrerendered: true
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


    // Add active class to filter first and second element if resolution > 767px

    if($(window).width() > 767){
        $('.sidebar-filter-content').eq(0).addClass('sidebar-filter-content--active');
        $('.sidebar-filter-content').eq(1).addClass('sidebar-filter-content--active');
        $('.sidebar-filter-content').eq(0).find('.sidebar-filter-item-body').css('display', 'block');    
        $('.sidebar-filter-content').eq(1).find('.sidebar-filter-item-body').css('display', 'block');    
    }


    // Init scrolling block

    if($('.scrolling-block').length > 0){
        $('.scrolling-block').niceScroll({
            cursorcolor: '#fd3f03',
            background: '#ffded4',
            cursorwidth: "4px",
            cursorborder: "0", 
        });
    }    

    
    // Filter accordeon 

    $('.sidebar-filter-item__title').on('click', function(e){
        e.preventDefault();
        if($(this).parent().hasClass('sidebar-filter-content--active')){
            $(this).next().slideUp(function(){
                if($(this).find('.scrolling-block')){
                    $('.scrolling-block').getNiceScroll().resize();
                }                
            });
            $(this).parent().removeClass('sidebar-filter-content--active');
        }
        else{
            $(this).next().slideDown(function(){
                $(".scrolling-block").getNiceScroll().resize();
            });
            $(this).parent().addClass('sidebar-filter-content--active');            
        }
    });


    // Sidebar toggle title
    
    $('.sidebar-filter__title').on('click', function(e){
        e.preventDefault();
        if($(window).width() < 768){
            $(this).next().slideToggle();
        }
    });


    // Sort toggle 

    $('.sort-toggle-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('sort-toggle-btn--active');
        $(this).next().toggleClass('sort-dropdown--active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).is('.sort-block *')) {
            $('.sort-toggle-btn').removeClass('sort-toggle-btn--active');
            $('.sort-dropdown').removeClass('sort-dropdown--active');
        };
    }); 

    
    // Product tabs

    $('.product-tab-link').on('click', function(e){
        e.preventDefault();
        if(!$(this).hasClass('product-tab-link--active')){

            var dataTab = $(this).data('tab');
            $('.product-tab-content').removeClass('product-tab-content--active');
            $('#' + dataTab).addClass('product-tab-content--active');
            
            $('.product-tab-link').removeClass('product-tab-link--active');
            $(this).addClass('product-tab-link--active');
        }
    });


    // Characteristics toggle

    $('.product-characteristics-show-more-btn').on('click', function(e){
        e.preventDefault();
        $('.product-characteristics-hidden').slideToggle();
    });

    
    // Adaptive tel toggle 

    $('.adaptive-header-tel__trigger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('adaptive-header-tel__trigger--active');
        $(this).next().toggleClass('adaptive-header-tel-dropdown--active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).is('.adaptive-header-tel-block *')) {
            $('.adaptive-header-tel__trigger').removeClass('adaptive-header-tel__trigger--active');
            $('.adaptive-header-tel-dropdown').removeClass('adaptive-header-tel-dropdown--active');
        };
    }); 


    // Price range slider

    if($('#price-range-slider').length > 0 && $(window).width() > 767){
        var priceRangeSlider = document.getElementById('price-range-slider'),
            minPrice = document.getElementById('min-price-input'),
            maxPrice = document.getElementById('max-price-input'),
            inputs = [minPrice, maxPrice]

        noUiSlider.create(priceRangeSlider, {
            start: [0, 10000],
            connect: true,
            tooltips: false,
            step: 1,
            format: wNumb({
                decimals: 0
            }),
            range: {
                'min': 0,
                'max': 10000
            }
        });
        priceRangeSlider.noUiSlider.on('update', function( values, handle ) {
            inputs[handle].value = values[handle];
        });

        function setSliderHandle(i, value) {
            var r = [null,null];
            r[i] = value;
            priceRangeSlider.noUiSlider.set(r);
        }

        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function(){
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function( e ) {
                var values = priceRangeSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = priceRangeSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];
                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch ( e.which ) {

                    case 13:
                        setSliderHandle(handle, this.value);
                        break;

                    case 38:
                        // Get step to go increase slider value (up)
                        position = step[1];
                        // false = no step is set
                        if ( position === false ) {
                            position = 1;
                        }
                        // null = edge of slider
                        if ( position !== null ) {
                            setSliderHandle(handle, value + position);
                        }
                        break;

                    case 40:
                        position = step[0];
                        if ( position === false ) {
                            position = 1;
                        }
                        if ( position !== null ) {
                            setSliderHandle(handle, value - position);
                        }
                        break;
                }
            });
        });
    }
    
});