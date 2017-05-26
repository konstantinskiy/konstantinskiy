$(document).ready(function(){


    // Adaptive menu toggle

    $('.header-menu-toggler').on('click', function(e){
        e.preventDefault();
        $('.header-adaptive-menu-wrap').addClass('open');
    });
    
    $('.header-adaptive-menu-close').on('click', function(e){
        e.preventDefault();
        $('.header-adaptive-menu-wrap').removeClass('open');
    });


    // Owl carousel

    $('.popular-slider').owlCarousel({
        loop: true,
        items: 4,
        nav: true,       
        //navText: ["<i class='slider-arrow-left-ico'></i>", "<i class='slider-arrow-right-ico'></i>"],
    }); 

    $('.faq-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,       
        //navText: ["<i class='slider-arrow-left-ico'></i>", "<i class='slider-arrow-right-ico'></i>"],
    }); 

      
    // Yandex maps: vacancy map

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