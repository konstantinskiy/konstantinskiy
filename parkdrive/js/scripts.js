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

    $('.order-rend-modal-trigger').fancybox({
        padding: 0,
        wrapCSS : 'order-rend-wrap',
    });


    $('.modal-trigger').fancybox({
        
    });

    $('.modal-close').on('click', function(e){
        e.preventDefault();
        $.fancybox.close();
    });

    $('.extend-search-trigger').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('extend-search-trigger--active')){
            $(this).removeClass('extend-search-trigger--active').text('Расширенный поиск');
            $('.extend-search-container').slideUp();
        }
        else{
            $(this).addClass('extend-search-trigger--active').text('Обычный поиск');
            $('.extend-search-container').slideDown();
            $('.form-select').select2('destroy').select2({
                width: 'resolve',
                minimumResultsForSearch: Infinity,
            });
        }        
    });


    $('.form-select').select2({
        'width': 'resolve',
        minimumResultsForSearch: false,
    });


    $('.form-select-tags').select2({
        placeholder: "Select an option"
    });


    if($('.tooltip').length > 0){
        $('.tooltip').tooltipster({
            maxWidth: 240,
            delay: 100
        });    
    }    



    // Gallery modal 

    //$('.gallery-trigger').fancybox();


    // Tel mask

    $('.form-input-tel').mask("+7(999) 999-99-99");


    // Add bookmarks class

    $(document).on('click', '.car-bookmarks__link', function(e){
        e.preventDefault();
        $(this).toggleClass('car-bookmarks__link--active');
    });


    // Owl carousels

    $('.accessories-slider').owlCarousel({
        loop: true,
        items: 4,
        nav: true, 
        dots: false,
        margin: 45,
        responsive:{
            0:{
                items: 1,
            },
            480:{
                items: 2,
            },
            640:{        
                margin: 30,        
                items: 3,
            },
            960:{
                items:4,
            }
        }
    });


    $('.specaction-slider').owlCarousel({
        loop: true,
        items: 3,
        nav: true, 
        dots: false,
        margin: 30,
        responsive:{
            0:{
                items: 1,
                nav: false, 
                dots: true,
            },
            480:{
                items: 1,
                nav: true, 
                dots: false                
            },
            640:{
                items:2,
            },
            960:{
                items:3,
            }
        }
    });


  
    // Footer google map

    if($('#footer-map').length){
        function initMap(){
            var myLatlng = new google.maps.LatLng(55.7257597, 37.6813138);
            var mapOptions = {
                zoom: 17,
                center: myLatlng,
                scrollwheel: false,
            }
            var map = new google.maps.Map(document.getElementById('footer-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: 'images/i/map-marker-ico.png'
            });
        }
        google.maps.event.addDomListener(window, 'load', initMap);    
    }   
     
});