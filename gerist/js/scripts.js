$(document).ready(function(){


	// Modal trigger by fancybox plugin
	
	$('.modal-trigger').fancybox({
        'padding': 0,
		'wrapCSS': 'callback-modal-wrap',
        'helpers':{
            'overlay':{
                'css': {
                    'background': 'rgba(58, 88, 97, 0.67)'
                }
            }    
        },
	});


    // Choic
    $('.choice-file-trigger').click(function(e){
        e.preventDefault();
        $('.form-attachment-input').trigger('click');
    });


    // Datepicker 
    
    if($('.datepicker-input').length){
        $('.datepicker-input').datepicker();
    }


    // Table check/uncheck all rows
    
    $('.table-checkall').on('click', function(e){
        if($(this).is(':checked')){
            $('.terms-checkbox').prop('checked', true);
        }
        else{
            $('.terms-checkbox').prop('checked', false);
        }
    });

    $('.pay-variant-item-trigger').on('click', function(e){
        e.preventDefault();
        $('.pay-variant-row').removeClass('active');
        $(this).parent().addClass('active');
        $('.default-form-select').select2('destroy').select2({
            width: 'resolve',
            minimumResultsForSearch: Infinity,
        });  
    });



    $('.candidate-table-mail-trigger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.candidate-table-row').find('.candidate-table-mail-content').slideToggle('600');
    });

    
    // Tel mask 

    if($('.default-form-input-tel').length){
        $('.default-form-input-tel').mask('+7 (999) 999-99-99');    
    }    


    // Header page swither

    $('.header-page-switcher-link').on('click', function(e){
        e.preventDefault();
        $('.header-page-switcher-link.active').removeClass('active');
        $(this).addClass('active');

        if($(this).data('switch') == 'right-switch'){
            $(this).parents('.header-page-switcher-row').addClass('right-switch');
        }
        else{
            $(this).parents('.header-page-switcher-row').removeClass('right-switch');
        }
    });


    // Header to scroll trigger

    $('.header-bid-form-scroll-trigger').on('click', function(e){
        e.preventDefault();
        var scroll_target = $(this).data('toscroll');
        $('html, body').animate({'scrollTop': $(scroll_target).offset().top}, 400);
    });


    // Sortable blocks

    if($('.connectedSortable').length){
        $("#unassigned, #recipients").sortable({
            connectWith: ".connectedSortable",
            items: "li",
            handle: ".profile-specialisation-item",
        }).disableSelection().on('click', '.profile-specialisation-item', function(){
            $(this).parent().appendTo($(".profile-specialisation-col__left, .profile-specialisation-col__right").not($(this).closest("ul")));
        });
    }


    // Add to bookmarks trigger

    $('.vacancy-vertical-bookmark-btn').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('in-bookmarks')){
            $(this).removeClass('in-bookmarks');
            $(this).html('<i class="bookmark-ico"></i>В избранное');
        }
        else{
            $(this).addClass('in-bookmarks');
            $(this).html('<i class="bookmark-ico"></i>В избранном');
        }
    });


    // Form button for display input

    $('.form-button-trigger').on('click', function(e){
        e.preventDefault();        
        $(this).hide().next().addClass('default-form-input-visible');
    });


    // Add form inputs
           
    var dinamic_form_row = $('.dinamic-form-row');
    var form_row_add_button = $('.form-row-add-trigger');
    var form_row_add_region_button = $('.form-row-add-trigger-region');
    
    $(form_row_add_button).on('click', function(e){
        e.preventDefault();
        $(dinamic_form_row).append(
            '<div class="registration-form-row">' + 
                '<div class="form-col-4 registration-form-col">' +
                    '<input type="text" class="default-form-input default-form-input-tel" placeholder="+7 (___) ___-__-__">' +
                '</div>' +
                '<div class="form-col-4 registration-form-col">' +
                    '<a href="#" class="form-row-delete-trigger">Удалить</a>' +
                '</div>' +
            '</div>'
        );
        $('.default-form-input-tel').mask('+7 (999) 999-99-99'); 
    });
    
    $(document).on('click', '.form-row-delete-trigger', function(e){
        e.preventDefault();
        $(this).parents('.registration-form-row').remove();
    });


    $(form_row_add_region_button).on('click', function(e){
        e.preventDefault();
        $(dinamic_form_row).append(
            '<div class="registration-form-row">' + 
                '<div class="form-col-12">' +
                    '<label for="" class="default-form-label">В каких регионах готовы работать?</label>' +
                '</div>' +
                '<div class="form-col-4">' +
                    '<input type="text" class="default-form-input">' +
                '</div>' +
                '<div class="form-col-4 registration-form-col">' +
                    '<a href="#" class="form-row-delete-trigger">Удалить</a>' +
                '</div>' +
            '</div>'
        );
    });    


    // Function for field count symbols

    function fieldCounter(inputField, maxLength, counterField){
        $(counterField).html(maxLength);
        $(inputField).on('keyup focus blur', function() {
            var fieldContent = $(this).val();

            // Получить значение через parents, чтобы не передавать 3-ий параметр в функцию
            // var counter_field = $(this).parents().find('.counter').val();
            var count = fieldContent.length;
            var number = maxLength - count;
            if(number > 0){
                $(counterField).html(number);
            }
            else{
                $(counterField).html(0);
                $(this).val(fieldContent.substr(0,maxLength));          
            }
        });    
    }
    
    fieldCounter('.textarea-10symbols', 10, '.form-symbols-counter-value');
    fieldCounter('.textarea-500symbols1', 500, '.form-symbols-counter-value1');
    fieldCounter('.textarea-500symbols2', 500, '.form-symbols-counter-value2');
    fieldCounter('.textarea-500symbols3', 500, '.form-symbols-counter-value3');


    // Search width trigger

    $('.header-search-trigger').on('click', function(){
        $('.header-bottom-search-col').addClass('active');
    });

    $(document).mouseup(function(e){
        var div = $(".header-bottom-search-col");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            $('.header-bottom-search-col.active').removeClass('active');
            $('.header-search-input').val('');
        }
    });


    // Init select2

    if($('.default-form-select').length){
        $('.default-form-select').select2({
            width: 'resolve',
            minimumResultsForSearch: Infinity,
        });    
    }   

    if($('.default-form-select-searchfield').length){
        $('.default-form-select-searchfield').select2({
            width: 'resolve',
            'language': {
               'noResults': function(){
                   return 'Ничего не найдено';
               }
           },
        });    
    }       

    
    $('.profile-settings-group').attr('data-value', 0);
    $('.default-form-empty-area').on('keyup', function() {
        var emptyArea = $(this).val().length;
        var thisBlock = $(this).parents('.profile-settings-group');

        if(emptyArea != 0 && thisBlock.attr('data-value') == 0){
            thisBlock.attr('data-value', 1).find('.registration-form-row-hidden').addClass('registration-form-row-visible');
        }

        if(emptyArea == 0 && thisBlock.attr('data-value') == 1){
            var childCount;
            var ch = $(thisBlock).find('.default-form-empty-area');
            ch.each(function(){
                if($(this).val().length == 0){
                    childCount = true;  
                }
                else{
                    childCount = false; 
                    return false;    
                }                
            });
            if(childCount == true){
                thisBlock.attr('data-value', 0);
                $(this).parents('.profile-settings-group').find('.registration-form-row-hidden').removeClass('registration-form-row-visible');
            }
        }
    });


	// Select location toggle

	$('.header-location-trigger').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.header-location-select-toggle').removeClass('active');		
			$('.location-form-input').val('');
			$('.header-location-clear-btn').removeClass('active');        
		}
		else{
			$(this).addClass('active');
			$('.header-location-select-toggle').addClass('active');	            
		}		
	});

	$(document).mouseup(function(e){
        var div = $(".header-location-select");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            $('.header-location-select-toggle.active, .header-location-select-btn.active').removeClass('active');
            $('.location-form-input').val('');
            $('.header-location-clear-btn').removeClass('active');
        }
    });
    

    //Header location clear input

    $('.header-location-clear-btn').on('click', function(e){
    	e.preventDefault();
    	$('.location-form-input').val('');    
    	$(this).removeClass('active');
    });


    // Show clear btn to the location input if entered more than 1 symbol

    $('.location-form-input').keyup(function(){
    	var count = $(this).val().length;
    	if(count > 0){
    		$('.header-location-clear-btn').addClass('active');
    	}
    	else{
    		$('.header-location-clear-btn').removeClass('active');
    	}
    });


    // Map toggle 
    
    $('.map-toggler-btn').on('click', function(e){
        e.preventDefault();
        $(this).parent().next().slideToggle();
        $(this).toggleClass('active');
    });


    // Categories accordeon 
    
    $('.categories-accordeon-toggler').on('click', function(e){
        e.preventDefault();
        $(this).parent().next().slideToggle();
        $(this).toggleClass('active');
    });

    $('.categories-accordeon-check').on('click', function(e){
        e.preventDefault();

        if($(this).hasClass('checked')){
            $(this).removeClass('checked');    
            $(this).parent().next().children().find('.categories-accordeon-check').removeClass('checked');
        }
        else{
            $(this).addClass('checked');
            $(this).parent().next().children().find('.categories-accordeon-check').addClass('checked');    
        }
    });


    // Add empty class for empty content col

    $('.balance-table-col').each(function(){
        if($(this).text() == "" || $(this).text() == "-"){
            $(this).addClass('balance-table-empty-col');    
        }
    });  


    // Header page employers links changes class

    $('.header-page-employers-filter__link').on('click', function(e){
        e.preventDefault();
        $('.header-page-employers-filter__link').removeClass('header-page-employers-filter__link-active');
        $(this).addClass('header-page-employers-filter__link-active');
    });


    // Format number and delimiter for numeric inputs

    function number_format(str){
        return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1  ');
    }

    $('.thousand-input').on('keyup', function(event){ 
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        $(this).val(number_format($(this).val()));    
    }); 


    // Scroll top button

    if($(window).width() > 1200){
        $(window).scroll(function(){
            if($(this).scrollTop() > 500){
                $('.totop-btn').addClass('active');
            }
            else{
                $('.totop-btn').removeClass('active');
            }        
        });    
    }    

    $('.totop-btn').on('click', function(e){
        e.preventDefault();
        $('body, html').animate({scrollTop:0}, 400);
    });


    // Adaptive menu toggle

    $('.header-menu-toggler').on('click', function(e){
        e.preventDefault();
        $('.header-adaptive-menu-wrap').addClass('open');
    });
    
    $('.header-adaptive-menu-close').on('click', function(e){
        e.preventDefault();
        $('.header-adaptive-menu-wrap').removeClass('open');
    });

    $('.profile-menu-toggler').on('click', function(e){
        e.preventDefault();
        $('.profile-menu').addClass('open');
    });
    $('.profile-adaptive-menu-close').on('click', function(e){
        e.preventDefault();
        $('.profile-menu').removeClass('open');
    });
    

    // Filter toggle

    $('.sort-select-trigger').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().removeClass('active');      
        }
        else{
            $('.sort-select-trigger, .sort-select-toggle-block').removeClass('active');
            $(this).addClass('active');
            $(this).next().addClass('active');             
        }       
    });

    $(document).mouseup(function(e){
        var div = $(".sort-col");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            $('.sort-select-toggle-block.active').removeClass('active');
            $('.sort-select-trigger').removeClass('active');
        }
    });


    // Profile vacancy actions toggle

    $('.profile-vacancy-actions-adaptive-trigger').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().removeClass('active');      
        }
        else{
            $('.profile-vacancy-actions-adaptive-trigger, .profile-vacancy-actions-list').removeClass('active');
            $(this).addClass('active');
            $(this).next().addClass('active');             
        }       
    });

    $(document).mouseup(function(e){
        var div = $(".profile-vacancy-actions-adaptive-container");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            $('.profile-vacancy-actions-list.active').removeClass('active');
            $('.profile-vacancy-actions-adaptive-trigger').removeClass('active');
        }
    });


    // Category accordeon

    if($(window).width() < 768){
        $('.category-item-parent-title').on('click', function(e){
            e.preventDefault();

            if($(this).hasClass('active')){
                $(this).removeClass('active').next().slideUp();
            }
            else{
                $('.category-item-parent-title.active').next().slideUp('400', function(){
                    $(this).prev().removeClass('active');
                });
                $(this).addClass('active').next().slideDown();         
            }

        });
    }


    // Fixed slide block

    if($('.fixed-slide-block').length && $(window).width() > 1000){
        var blockOffset = $('.entry-content').offset().top,
            newBlockOffset = blockOffset + $('.entry-content').height();     
        $(document).scroll(function(){
            if($(document).scrollTop() > blockOffset){
                $('.fixed-slide-block').addClass('visible');
            }
            else{
                $('.fixed-slide-block').removeClass('visible');   
            }
        });
    }
    
    
    // Yandex maps: vacancy map

    if($('#yandex-map').length > 0){
        var myMap,
            firstPlacemark;
        function vacancy_init_map(){
            var myMap = new ymaps.Map('yandex-map', {
                center: [55.76, 37.64],         
                zoom: 14,
            });
            myMap.behaviors.disable("scrollZoom");

            firstPlacemark = new ymaps.Placemark(myMap.getCenter(),{
                balloonContent: 'Кастомная метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/i/map-point-ico.png',
                iconImageSize: [41, 28],
                iconImageOffset: [-5, -38]
            });
            secondPlacemark = new ymaps.Placemark([55.75, 37.65],{
                balloonContent: 'Кастомная метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/i/map-point-ico.png',
                iconImageSize: [41, 28],
                iconImageOffset: [-5, -38]
            });
            myMap.geoObjects
                .add(firstPlacemark)
                .add(secondPlacemark);
        };
        ymaps.ready(vacancy_init_map);    
    }
    
});