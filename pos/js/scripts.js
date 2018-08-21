$(document).ready(function(){


    // Scroll to block

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();
        var scrollTarget = $(this).data('scroll-target');
        if(scrollTarget) {
            $('html, body').animate({scrollTop: $('.' + scrollTarget).offset().top}, 400);
        }
    });



    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
    });



    // Modal tabs

    $('.service-modal-tabs__link').on('click', function(e) {
        e.preventDefault();
        var dataModalTab = $(this).data('modal-tab');
        var dataModalBg = $(this).data('modal-bg');
        $('.modal--service-white, .modal--service-blue').removeClass('modal--service-white').removeClass('modal--service-blue');
        $('.modal--service').addClass('modal--service-' + dataModalBg);

        $('.service-modal__col').removeClass('service-modal__col--active');
        $('.service-modal__col--' + dataModalTab).addClass('service-modal__col--active');

        $('.service-modal-tabs__link').removeClass('service-modal-tabs__link--active');
        $('.service-modal-tabs__item').removeClass('service-modal-tabs__item--active');
        $(this).addClass('service-modal-tabs__link--active');
        $(this).parents('.service-modal-tabs__item').addClass('service-modal-tabs__item--active');
    });



    // Hero slider init
    // ===============================================

    if($('.hero-slider').length) {
        var heroOwl = $('.hero-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            dotsContainer: '.hero-dots-container',
        });

        $('.hero-slider-arr--left').on('click', function(e) {
            e.preventDefault();
            heroOwl.trigger('prev.owl.carousel');
        });

        $('.hero-slider-arr--right').on('click', function(e) {
            e.preventDefault();
            heroOwl.trigger('next.owl.carousel');
        });
    }



    // Custom form validate

    $('.js-form-validate').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this).parents('.js-form-validate');
        var el_arr = [];
        var el_arr_length;

        $(this).find('.js-form-input--required').each(function() {
            var $elem = $(this);
            
            if($elem.val() <= 0) {
                $elem.addClass('error');
                el_arr.push($elem);
            } else {
                $elem.removeClass('error');
            }

        });

        el_arr_length = el_arr.length;
        if(el_arr_length >= 2) {
            $('.js-form-input--required').addClass('error');
        }
        else {
            $('.js-form-input--required').removeClass('error');
            console.log('sending...');
        }

    });


     
    // Contacts google map
    // ===============================================

    if($('#contacts-map').length) {
        function initContactsMap(){
            var myLatlng = new google.maps.LatLng(49.991773, 36.224265);
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
            }
            var map = new google.maps.Map(document.getElementById('contacts-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: {
                    url: 'images/i/i-map-marker.png',
                    size: new google.maps.Size(111, 82),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(55, 41),
                },                
            }); 
        }
        google.maps.event.addDomListener(window, 'load', initContactsMap);    
    }


});