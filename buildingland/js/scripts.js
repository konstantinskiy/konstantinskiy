$(document).ready(function(){

	function setEqualHeight(columns){
		var tallestcolumn = 0;
		columns.each(function(){
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn){
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	if($(window).width() > 767 ){
		setEqualHeight($(".howitswork-item"));
	}

	$(".callback-tel-input").mask("8 (999) 999-9999");

	$('.circlestat1').circliful({
        animationStep: 5,
        dimension: 130,
        showPercent: 1,
        fontColor: '#ee7c00',
        start: 0,
        percent: 40,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: '#edb477',
        foregroundColor: '#ee7c00',
        animateInView: true,
    });
    $('.circlestat2').circliful({
        animationStep: 5,
        dimension: 130,
        showPercent: 1,
        fontColor: '#ee7c00',
        start: 0,
        percent: 40,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: '#edb477',
        foregroundColor: '#ee7c00',
        animateInView: true,
    });
    $('.circlestat3').circliful({
        animationStep: 5,
        dimension: 130,
        showPercent: 1,
        fontColor: '#ee7c00',
        start: 0,
        percent: 20,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        backgroundColor: '#edb477',
        foregroundColor: '#ee7c00',
        animateInView: true,
    });

    $(".callback-submit-btn").on('click', function(e) {
        e.preventDefault();

        if($('.callback-tel-input') > 0){
            $.ajax({
            type: "POST",
            url: "order.php",
            data:  $(".header-callback-form").serialize(),
            success: function(data){
                $(".modal-overlay").addClass('active');
                $(".success-modal").addClass('modal-open');
                setTimeout(function(){
                    if($(".success-modal").is(":visible")){
                        $(".modal-overlay").removeClass('active');
                        $(".success-modal").removeClass('modal-open');
                    }
                }, 3000);
                $('.header-callback-form').trigger('reset');
            },
            error: function(){
                alert ("Ошибка соединения с сервером! Попробуйте отправить заявку еще раз!");
                $('.header-callback-form').trigger('reset');
            }
            });
        }
        return false;
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 1200){
            $('.totop-btn').fadeIn();  
        }
        else{
            $('.totop-btn').fadeOut();
        }
    });
    $('.totop-btn').click(function(e){      
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 800);
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
            animateItems($('.contains-order-item'), 'visible animated zoomIn', 150, 250);
            animateItems($('.order-types-item'), 'visible animated fadeInDown', 150, 250);
            animateItems($('.warranty-item'), 'visible animated zoomIn', 150, 250);
        });
    }

    $('.modal-toggle').on('click', function(e){
        e.preventDefault();
        $('.modal-overlay').toggleClass('active');
        $('.modal').toggleClass('modal-open');
    });
      
    if($(window).width() > 767 ){
    	ymaps.ready(initMainMap);	
    }

	var myMap;
    function initMainMap(){ 
    	myMap = new ymaps.Map("contacts-map", {
            center: [55.743678, 37.505433],
            zoom: 14
        }); 	
		var myPlacemark = new ymaps.Placemark([55.743678, 37.505433]);
	    myMap.geoObjects.add(myPlacemark);
    }
   	    	
});