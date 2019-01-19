$(document).ready(function(){


    // Accordion

    $('.solution-accordion .accordion-item:first-child').find('.accordion-item__title').addClass('accordion-item__title--active');
    $('.solution-accordion .accordion-item:first-child').find('.accordion-item__body').css('display', 'block');

    $('.js-accordion-trigger').on('click', function(e) {
    	e.preventDefault();
    	if($(this).hasClass('accordion-item__title--active')) {
    		$(this).toggleClass('accordion-item__title--active').next().slideToggle();
    	} else {
    		$(this).parents('.accordion').find('.accordion-item__title--active').next().slideUp();
    		$(this).parents('.accordion').find('.accordion-item__title--active').removeClass('accordion-item__title--active');
    		$(this).toggleClass('accordion-item__title--active');
    		$(this).next().slideDown();
    	}
    });



    // related blog slider init

    if($('.related-blog-slider').length) {
        $('.related-blog-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 4,
            margin: 30,
            navText: [
                "<i class='fa fa-angle-left' aria-hidden='true'></i>",
                "<i class='fa fa-angle-right' aria-hidden='true'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dots: true,
                    nav: false,
                },
                640: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1080: {
                    items: 4,
                },
            }
        });
    }


    // compilation blog slider init

    if($('.compilation-slider').length) {
        $('.compilation-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 3,
            margin: 10,
            navText: [
                "<i class='fa fa-angle-left' aria-hidden='true'></i>",
                "<i class='fa fa-angle-right' aria-hidden='true'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: true,
                },
                640: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1080: {
                    items: 3,
                },
            }
        });
    }


});