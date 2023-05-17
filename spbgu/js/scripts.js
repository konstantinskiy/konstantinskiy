$(document).ready(function() {


    // Show/hide adaptive container after click

    function toggleAdaptiveMenu() {
        $('html').toggleClass('overflow-hidden');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.shade').toggleClass('shade--show');
    }

    $('.adaptive-menu-toggle').on('click', function(e) {
        e.preventDefault();
        toggleAdaptiveMenu();
    });



	// Fancybox config

	$('[data-fancybox-modal]').fancybox({
		trapFocus : true,
		autoFocus : false,
		touch: false,
		beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        }
	});



    // Hero slider init    
    
    if($('.hero-slider').length) {
        $('.hero-slider').slick({
            arrows: false,
            dots: true,
        });
    }


});