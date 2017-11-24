$(document).ready(function(){


    // Adaptive menu toggle
    // ===============================================

    $('.adaptive-menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('html').toggleClass('header-menu--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');
    });



    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
    });



    // Validate order form

    $('.order-form').each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                }, 
                tel: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: '',
                    minlength: ''
                },
                tel: {
                    required: ''
                },
            },
            submitHandler: function() {            
                $.ajax({
                    url: 'order.php',
                    type: 'POST',
                    dataType: 'json',
                    data: $('.order-form').serialize(),
                    beforeSend: function(data) {
                        $('.form-submit').attr('disabled','disabled');
                        $('.form-submit').addClass('form-submit--disabled');
                        $('.form-submit').attr('value', 'Отправка...');
                    },
                    success: function(data){
                        if(data.status == 'success') {
                            //$(".modal-shadow").fadeIn();
                            //$(".thx-modal").fadeIn();
                            setTimeout(function(){
                                alert('Форма отправлена');
                                // if($(".thx-modal").is(":visible")) {
                                //     $(".thx-modal").fadeOut();
                                //     $(".modal-shadow").fadeOut();
                                // }
                                // clear blocks
                                $('.form-submit').removeAttr('disabled');
                                $('.form-submit').removeClass('form-submit--disabled');
                                $('.form-submit').attr('value', 'Оформить заявку');                       
                                $('.order-form').trigger("reset");
                            }, 3000);   
                        }
                    }
                });
            }
        });
    });


    // Validate order modal form

    $('.order-modal-form').each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                }, 
                tel: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: '',
                    minlength: ''
                },
                tel: {
                    required: ''
                },
            },
            submitHandler: function() {            
                $.ajax({
                    url: 'order.php',
                    type: 'POST',
                    dataType: 'json',
                    data: $('.order-modal-form').serialize(),
                    beforeSend: function(data) {
                        $('.form-submit').attr('disabled','disabled');
                        $('.form-submit').addClass('form-submit--disabled');
                        $('.form-submit').attr('value', 'Отправка...');
                    },
                    success: function(data){
                        if(data.status == 'success') {
                            //$(".modal-shadow").fadeIn();
                            //$(".thx-modal").fadeIn();
                            setTimeout(function(){
                                alert('Форма отправлена');
                                // if($(".thx-modal").is(":visible")) {
                                //     $(".thx-modal").fadeOut();
                                //     $(".modal-shadow").fadeOut();
                                // }
                                // clear blocks
                                $('.form-submit').removeAttr('disabled');
                                $('.form-submit').removeClass('form-submit--disabled');
                                $('.form-submit').attr('value', 'Оформить заявку');                       
                                $('.order-modal-form').trigger("reset");
                            }, 3000);   
                        }
                    }
                });
            }
        });
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

    $('.form-input--tel').mask("+7 (999) 999-99-99");

    

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



    // Reviews slider init
    // ===============================================

    if($('.reviews-slider').length) {
        $('.reviews-slider').owlCarousel({
            loop: true,
            items: 3,
            nav: true, 
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2,
                },
                768: {
                    items: 3,
                }
            },
        });
    }


  
    // Contacts google map
    // ===============================================

    if($('#map').length) {
        function initContactsPageMap(){
            var myLatlng = new google.maps.LatLng(55.75222, 37.61556);
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
                scrollwheel: false,
                styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#181818"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1b1b1b"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#2c2c2c"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8a8a8a"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#373737"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3c3c3c"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#4e4e4e"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#000000"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3d3d3d"
                      }
                    ]
                  }
                ],
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var image = 'images/i/i-map-marker.png';
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: image,
            }); 

            var contentString = '<div class="content">г. Москва</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            infowindow.open(map,marker);
        }
        google.maps.event.addDomListener(window, 'load', initContactsPageMap);    
    }  
    
});