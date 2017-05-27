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


    // Owl carousels

    $('.main-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true, 
        dots: true,   
        responsive:{            
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
        }   
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

    $('.faq-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,        
    }); 

    $('.best-proposal-slider').owlCarousel({
        loop: true,
        items: 1,
    });


    // Basket toggler

    $('.header-basket-ico').on('click', function(e){
        e.preventDefault();
        $('.header-basket-content').toggleClass('active');
    });

      
    // Yandex map

    if($('#contacts-map').length > 0){
        var myMap;
        function init_map(){
            var myMap = new ymaps.Map('contacts-map', {
                center: [55.76, 37.64],         
                zoom: 14,
            });
            myMap.behaviors.disable("scrollZoom");
        };
        ymaps.ready(init_map);    
    }
    
});