$(document).ready(function(){
	$('.gallery-modal').fancybox();
	// Gallery grid
	if($('.gallery-grid').length){
		 $(window).on('load', function() {
            $('.gallery-grid').imagesLoaded( function(){
            	$('.gallery-grid').isotope({ filter: '.yoga' });
				$('.gallery-grid').isotope({
					itemSelector: '.gallery-item',
					layoutMode: 'fitRows'
				});
		    });
        });
	}
	$('.gallery-filter-wrap ul li a').on('click', function(e) {
		e.preventDefault();
		$('.gallery-filter-wrap ul li a').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$('.gallery-grid').isotope({ filter: filterValue });
	});
	$('.reviews-slider').owlCarousel({
		items: 1,
	    loop: true,
	    nav: true,
	    dots: false
	});
	/*--------------------------------------------------------------
    Animate blocks
    --------------------------------------------------------------*/
    function animateItems(itemIdent, animation, timer, interval) {
        var imagePos = itemIdent.offset().top,
            windowHeight = $(window).height() * 0.85,
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
            animateItems($('.benefit-item-animate'), 'visible animated zoomIn', 150, 250);
            animateItems($('.howitworks-item-animate'), 'visible animated fadeInDown', 150, 250);
        });
    }
    $('form[name="SR_form_360825_92"]').find('div#sr-preload_').prop('id', 'sr-preload_360825_92');
    $('#sr-preload_360825_92').css({'width':parseInt($('form[name="SR_form_360825_92"]').width() + 'px'), 'height':parseInt($('form[name="SR_form_360825_92"]').height()) + 'px', 'line-height':parseInt($('form[name="SR_form_360825_92"]').height()) + 'px'}).show();
    if($('form[name="SR_form_360825_92"]').find('input[name="script_url_360825_92"]').length) {
        $.ajax({
            url: $('input[name="script_url_360825_92"]').val() + '/' + (typeof document.charset !== 'undefined' ? document.charset : document.characterSet),
            dataType: "script",
            success: function() {
                $('#sr-preload_360825_92').hide();
            }
        });
    }
});