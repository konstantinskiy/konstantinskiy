$(document).ready(function(){

	$('.gallery-trigger').fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
        wrapCSS: 'modal-gallery',
        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.79)'
                }
            },
            title: {
                type: 'outside',
                position: 'top',
            }
        },
        beforeLoad: function() {
            this.title = "<div class='clearfix'><span class='title'>" + $(this.element).attr('caption') + "</span>" + "<span class='counter'>" + (this.title ? '' + this.title + '' : '') + (this.index + 1) + ' из ' + this.group.length + "</span></div>";
        }
	});

    $('.sertificate-modal-gallery').fancybox({
        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.79)'
                }
            }
        },
    });

	$('.modal-trigger').fancybox({
		padding : 0,
    	wrapCSS: 'form-modal-wrap',
    	helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(0, 0, 0, 0.79)'
	            }
	        }
	    }
	});

	$('.callback-modal-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            }, 
            tel:{
                required: true,
            },
            email:{
                required:true,
                email:true,
            }
        },
        messages:{
            name:{
                required: 'Имя необходимо заполнить',
                minlength: 'Введите больше 2 символов'
            },
            tel:{
                required: 'Телефон необходимо заполнить'
            },
            email:{
                required: 'Введите email',
                email: 'Введите правильный email',
            }
        },
        submitHandler: function(form) {            
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.callback-modal-form').serialize(),
                beforeSend: function(data) {
                    $('.callback-modal-submit-btn').attr('disabled','disabled');
                    $('.callback-modal-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $(".modal-body").fadeOut("fast", function(){
                        $(".modal-success-container").html("Ваше сообщение отправлено!");
                        setTimeout("$.fancybox.close()", 4000);
                        }).delay(4500).fadeIn("fast",function(){$(".modal-success-container").empty()});
                        
                        $('.callback-modal-submit-btn').removeAttr('disabled');
                        $('.callback-modal-submit-btn').attr('value', 'Позвоните мне');                       
                        $('.callback-modal-form').trigger("reset");
                    }
                }
            });
        }
    });

    $('.question-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            }, 
            tel:{
                required: true,
            },
            email:{
                required:true,
                email:true,
            }
        },
        messages:{
            name:{
                required: 'Имя необходимо заполнить',
                minlength: 'Введите больше 2 символов'
            },
            tel:{
                required: 'Телефон необходимо заполнить'
            },
            email:{
                required: 'Введите email',
                email: 'Введите правильный email',
            }
        },
        submitHandler: function(form) {            
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.question-form').serialize(),
                beforeSend: function(data) {
                    $('.question-submit-btn').attr('disabled','disabled');
                    $('.question-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $('.modal-overlay').fadeIn();
                        $('.success-modal').fadeIn();

                        setTimeout(function(){
                            $(".success-modal").fadeOut();
                            $(".modal-overlay").fadeOut();
                            $('.question-submit-btn').removeAttr('disabled');
                            $('.question-submit-btn').attr('value', 'Отправить заявку');                       
                            $('.question-form').trigger("reset");
                        }, 3000);
                    }
                }
            });
        }
    });

    $('.action-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            }, 
            tel:{
                required: true,
            },
            email:{
                required:true,
                email:true,
            }
        },
        messages:{
            name:{
                required: 'Имя необходимо заполнить',
                minlength: 'Введите больше 2 символов'
            },
            tel:{
                required: 'Телефон необходимо заполнить'
            },
            email:{
                required: 'Введите email',
                email: 'Введите правильный email',
            }
        },
        submitHandler: function(form) {            
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.action-form').serialize(),
                beforeSend: function(data) {
                    $('.action-submit-btn').attr('disabled','disabled');
                    $('.action-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $('.modal-overlay').fadeIn();
                        $('.success-modal').fadeIn();

                        setTimeout(function(){
                            $(".success-modal").fadeOut();
                            $(".modal-overlay").fadeOut();
                            $('.action-submit-btn').removeAttr('disabled');
                            $('.action-submit-btn').attr('value', 'Отправить заявку');                       
                            $('.action-form').trigger("reset");
                        }, 3000);
                    }
                }
            });
        }
    });

    $('.question-bottom-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            }, 
            tel:{
                required: true,
            },
            email:{
                required:true,
                email:true,
            }
        },
        messages:{
            name:{
                required: '',
                minlength: '',
            },
            tel:{
                required: '',
            },
            email:{
                required: '',
                email: '',
            }
        },
        submitHandler: function(form) {            
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.question-bottom-form').serialize(),
                beforeSend: function(data) {
                    $('.question-bottom-submit-btn').attr('disabled','disabled');
                    $('.question-bottom-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $('.modal-overlay').fadeIn();
                        $('.success-modal').fadeIn();

                        setTimeout(function(){
                            $(".success-modal").fadeOut();
                            $(".modal-overlay").fadeOut();
                            $('.question-bottom-submit-btn').removeAttr('disabled');
                            $('.question-bottom-submit-btn').attr('value', 'Отправить заявку');                       
                            $('.question-bottom-form').trigger("reset");
                        }, 3000);
                    }
                }
            });
        }
    });

    $('.proposal-modal-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            }, 
            tel:{
                required: true,
            },
            email:{
                required:true,
                email:true,
            }
        },
        messages:{
            name:{
                required: 'Имя необходимо заполнить',
                minlength: 'Введите больше 2 символов'
            },
            tel:{
                required: 'Телефон необходимо заполнить'
            },
            email:{
                required: 'Введите email',
                email: 'Введите правильный email',
            }
        },
        submitHandler: function(form) {   
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.proposal-modal-form').serialize(),
                beforeSend: function(data) {
                    $('.proposal-modal-submit-btn').attr('disabled','disabled');
                    $('.proposal-modal-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $(".modal-body").fadeOut("fast", function(){
                        $(".modal-success-container").html("Ваше сообщение отправлено!");
                        setTimeout("$.fancybox.close()", 4000);
                        }).delay(4500).fadeIn("fast",function(){$(".modal-success-container").empty()});
                        
                        $('.proposal-modal-submit-btn').removeAttr('disabled');
                        $('.proposal-modal-submit-btn').attr('value', 'Сделать заказ');           
                        $('.proposal-modal-form').trigger("reset");
                    }
                }
            });
        }
    });

    $('.manager-modal-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
            },        
            email:{
                required:true,
                email:true,
            },
            text:{
                required: true,
                minlength: 15,
            },
        },
        messages:{
            name:{
                required: 'Имя необходимо заполнить',
                minlength: 'Введите больше 2 символов',
            },
            email:{
                required: 'Введите email',
                email: 'Введите правильный email',
            },
            text:{
                required: 'Вопрос необходимо заполнить',
                minlength: 'Введите больше 15 символов',
            },
        },
        submitHandler: function(form) {   
            $.ajax({
                url: 'order.php',
                type: 'POST',
                dataType: 'json',
                data: $('.manager-modal-form').serialize(),
                beforeSend: function(data) {
                    $('.manager-modal-submit-btn').attr('disabled','disabled');
                    $('.manager-modal-submit-btn').attr('value', 'Отправка...');
                },
                success: function(data){
                    if(data.status == 'success'){
                        $(".modal-body").fadeOut("fast", function(){
                        $(".modal-success-container").html("Ваше сообщение отправлено!");
                        setTimeout("$.fancybox.close()", 4000);
                        }).delay(4500).fadeIn("fast",function(){$(".modal-success-container").empty()});
                        
                        $('.manager-modal-submit-btn').removeAttr('disabled');
                        $('.manager-modal-submit-btn').attr('value', 'Сделать заказ');           
                        $('.manager-modal-form').trigger("reset");
                    }
                }
            });
        }
    });


    // Mask for tel

	$(".tel-input").mask("+7(999) 999-99-99");


    // Data for modal Proposal form
    $('.proposal-modal-btn').on('click', function(){
        var proposalType = $(this).data('tariff');
        var proposalPrice = $(this).parents('.proposal-item').find('.proposal-price span').text();
        $('.proposal-hidden-type').attr('value', proposalType);
        $('.proposal-hidden-price').attr('value', proposalPrice);
    });


    // Yandex maps

    // var myMap;
    // function initMap(){ 
    //     myMap = new ymaps.Map("map", {
    //         center: [55.72859056899627,37.43123499999996],
    //         zoom: 16
    //     });     
    //    var myPlacemark = new ymaps.Placemark([55.72859056899627,37.43123499999996], {
    //         balloonContent: 'г. Москва, ул. Коцубинского 4, офис 263'
    //     });
    //     myMap.geoObjects.add(myPlacemark);
    // }

    // ymaps.ready(initMap);


    // Counter
    $('#myCounter').mbComingsoon({
        expiryDate: new Date(2016, 9, 0, 25, 30),
        speed: 600,
        localization: {
            days: "дни",
            hours: "часы",
            minutes: "минуты",
            seconds: "секунды"
        },
    });
   	    	
});