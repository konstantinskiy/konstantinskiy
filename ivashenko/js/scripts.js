$(document).ready(function(){



    // Adaptive menu toggle
    // ===============================================

    $('.adaptive-menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');

    }); 



    // Fancybox config
    // ===============================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
    });



    // Tel mask
    // ===============================================

    $('.form-input--tel').mask("+7 (999) 999-99-99");



    // Related masters slider
    // ===============================================

    if($('.related-masters-slider').length > 0) {
        $('.related-masters-slider').owlCarousel({
            loop: true,
            items: 4,
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
            }
        }); 
    }



    // Validate modal form

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
                    url: '',
                    type: 'POST',
                    dataType: 'json',
                    data: $('.order-modal-form').serialize(),               
                    success: function(data){
                       console.log('success');
                    }
                });
            }
        });
    });



    // Animate blocks
    // ===============================================

    function animateItems(itemIdent, animation, timer, interval) {
        var imagePos = itemIdent.offset().top,
            windowHeight = $(window).height() * 1,
            topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + windowHeight) {
            itemIdent.each(function () {
                var anim_item = $(this);
                setTimeout(function () {
                    anim_item.addClass(animation);
                }, timer);
                timer = timer + interval;
            })
        }
    }
    
    if($(window).width() > 992){
        $(window).scroll(function () {
            animateItems($('.benefits-item--animate'), 'visible animated zoomIn', 30, 200);
        });
    }
    
});