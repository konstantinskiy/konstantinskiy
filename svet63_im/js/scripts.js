$(document).ready(function(){


    // Adaptive menu toggle

    $('.adaptive-menu-toggler').on('click', function(e){
        e.preventDefault();
        $('.adaptive-menu-container').addClass('open');
    });
    
    $('.adaptive-menu-close').on('click', function(e){
        e.preventDefault();
        $('.adaptive-menu-container').removeClass('open');
    });


    // Modal

    $('.modal-trigger').fancybox();


    // Tel mask

    $('.form-input-tel').mask("+7(999) 999-99-99");


    // $('.main-menu__item-link').hover(function(){  
    //     if($(this).hasClass('main-menu__item-link--active')){
    //         $(this).find('.main-menu-start-ico').hide();
    //         $(this).find('.main-menu-end-ico').show();    
    //     }        
    // }, function(){
    //     $(this).find('.main-menu-start-ico').show();
    //     $(this).find('.main-menu-end-ico').hide();
    // });


    $('.header-city-toggler').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('header-city-toggler--active');
        $(this).next().toggleClass('header-city-select-dropdown--active');
    });


    // Owl carousels

    $('.action-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true, 
        dots: true,   
        responsive:{            
            0: {
                nav: true,
            },
            768: {
                nav: true,
            },
        }   
    });

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


    // Basket toggler

    $('.header-basket-ico').on('click', function(e){
        e.preventDefault();
        $('.header-basket-content').toggleClass('active');
    });


    // Change big product image 

    $('.product-slider-thumb-trigger').click(function(e){
        e.preventDefault();
        var bigImgPath = $(this).attr('href');
        $('.product-slider-thumb-trigger.active').removeClass('active');
        $(this).addClass('active');
        $('.product-slider-big-img').attr('src', bigImgPath);
    });


    // Add complect item

    $(document).on('click', '.product-complect-add-btn', function(e){
        e.preventDefault();
        var dataAddVal = $(this).data('addCounterValue'),
            complectCount = $('.product-complect-item').length + 1;

        var html = '<div class="product-complect-item">' +
                        '<div class="product-complect-item__title">Комплект ' + complectCount + '</div>' +
                        '<div class="product-complect-row">' +
                            '<div class="product-complect-col">' +
                                '<div class="product-complect-select-block">' +
                                    '<div class="product-select-title">' +
                                        '<div class="product-complect-select-left">' +
                                            '<div class="product-complect-select-color" style="background-color: #fff"></div>' +
                                        '</div>' +
                                        '<div class="product-complect-select-value">' +
                                            '<div class="select-value-color-name">Цвет белый</div>' +
                                        '</div>' +
                                        '<div class="product-complect-select-arrow">' +
                                            '<span class="product-complect-select-arrow__ico"></span>' +
                                        '</div>' +
                                    '</div>' +

                                    '<div class="product-select-options">' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-complect-select-left">' +
                                                '<div class="product-select-options__value-color" style="background-color: #12498a"></div>' +
                                            '</div>' +
                                            '<div class="product-complect-select-value">' +
                                                '<div class="product-select-options__value-name">Цвет синий</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-complect-select-left">' +
                                                '<div class="product-select-options__value-color" style="background-color: #fff"></div>' +
                                            '</div>' +
                                            '<div class="product-complect-select-value">' +
                                                '<div class="product-select-options__value-name">Цвет белый</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="product-complect-col">' +                                    
                                '<div class="product-complect-select-block">' +
                                    '<div class="product-select-title">' +
                                        '<div class="product-complect-select-left">' +
                                            '<div class="product-complect-select-size">S</div>' +
                                        '</div>' +
                                        '<div class="product-complect-select-value">' +
                                            '<div class="product-complect-select-value-size">Размер</div>' +
                                        '</div>' +
                                        '<div class="product-complect-select-arrow">' +
                                            '<span class="product-complect-select-arrow__ico"></span>' +
                                        '</div>' +
                                    '</div>' +

                                    '<div class="product-select-options">' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-select-options__value-size">S</div>' +
                                        '</div>' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-select-options__value-size">M</div>' +
                                        '</div>' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-select-options__value-size">L</div>' +
                                        '</div>' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-select-options__value-size">XL</div>' +
                                        '</div>' +
                                        '<div class="product-select-options__value">' +
                                            '<div class="product-select-options__value-size">XXL</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="product-complect-col product-complect-counter-col">' +
                                '<div class="product-complect-counter-block" data-counter-value="' + dataAddVal + '">' +
                                    '<span class="product-complect-counter-btn product-complect-counter-btn__minus"></span>' +
                                    '<input type="text" class="product-complect-counter-input" value="' + dataAddVal + '" readonly>' +
                                    '<span class="product-complect-counter-btn product-complect-counter-btn__plus"></span>' +
                                '</div>' +
                                '<div class="product-complect-delete-block">' +
                                    '<a href="#" class="product-complect-detete-btn"></a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        $(html).appendTo($('.product-complect-list'));
    });


    // Delete complect item

    $(document).on('click', '.product-complect-detete-btn', function(e){
        e.preventDefault();
        $(this).parents('.product-complect-item').remove();
    });


    // Open this select and close all opened selects

    $(document).on('click', '.product-complect-select-block', function(e){
        e.preventDefault();
        $('.product-complect-select-block').not(this).removeClass('active').find('.product-select-options').slideUp(100);
        $(this).toggleClass('active');
        $(this).find('.product-select-options').slideToggle(100);
    });


    // Change select value

    $(document).on('click', '.product-select-options__value', function(e){
        e.preventDefault();

        var selectColorName = $(this).find('.product-select-options__value-name').text(),
            selectColorImg = $(this).find('.product-select-options__value-color').attr('style');
            selectSize = $(this).find('.product-select-options__value-size').text();

        $(this).parents('.product-complect-select-block').find('.select-value-color-name').text(selectColorName);    
        $(this).parents('.product-complect-select-block').find('.product-complect-select-color').attr('style', selectColorImg);
        $(this).parents('.product-complect-select-block').find('.product-complect-select-size').html(selectSize);
    });
    

    // Close all opened select after click on the empty place

    $(document).on('click', function(e) {
        if (!$(e.target).is(".product-complect-select-block *")) {
            $('.product-complect-select-block').removeClass('active');
            $('.product-select-options').slideUp(100);
        };
    });   


    // Input increment value

    $(document).on('click', '.product-complect-counter-btn__minus', function(e){
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.product-complect-counter-input'),
            inputValue = $(this).parent().find('.product-complect-counter-input').val();
        
        if(!(inputValue - counterValue) <= 0){        
            input.val(parseInt(inputValue) - counterValue);
        }
        return false;
    });


    // Input decrement value

    $(document).on('click', '.product-complect-counter-btn__plus', function(e){
        e.preventDefault();
        var counterValue = $(this).parent().data('counterValue'),
            input = $(this).parent().find('.product-complect-counter-input'),
            inputValue = $(this).parent().find('.product-complect-counter-input').val();
        input.val(parseInt(inputValue) + counterValue);
    });

      
    // Yandex map

    // if($('#contacts-map').length > 0){
    //     var myMap;
    //     function init_map(){
    //         var myMap = new ymaps.Map('contacts-map', {
    //             center: [55.76, 37.64],         
    //             zoom: 14,
    //         });
    //         myMap.behaviors.disable("scrollZoom");
    //     };
    //     ymaps.ready(init_map);    
    // }
    
});