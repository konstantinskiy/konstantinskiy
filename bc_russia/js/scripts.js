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


    // Gallery modal 

    $('.gallery-trigger').fancybox();


    // Tel mask

    $('.form-input-tel').mask("+7(999) 999-99-99");


    // Owl carousels

    $('.main-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false, 
        dots: true 
    });

    $('.arenda-slider').owlCarousel({
        loop: true,
        items: 4,
        nav: true,  
        dots: false,
        margin: 16,     
        responsive: {
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


    
});