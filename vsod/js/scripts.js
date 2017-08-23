$(document).ready(function(){

    // Adaptive menu toggle

    $('.adaptive-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggler--active');
        $('.adaptive-menu-container').toggleClass('open');
    });


    // Toggle menu after Esc click

    $(document).keydown(function(e) {
        if(e.keyCode === 27) {
            $('.adaptive-menu-toggler').removeClass('adaptive-menu-toggler--active');
            $('.adaptive-menu-container').removeClass('open');
            return false;
        }
    });


    // Tel mask

    $('.form-input--tel').mask("+3(999) 999-99-99");

  
    // Tabs

    $('.single-tab__link').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('single-tab__link--active')) {
            return;
        } else {
            $('.single-tab__link').removeClass('single-tab__link--active');
            $(this).addClass('single-tab__link--active');
            var dataTab = $(this).data('tab');
            $('.single-content-tab.single-content-tab--active').removeClass('single-content-tab--active');
            $('#' + dataTab).addClass('single-content-tab--active');
            if($('.form-select').length) {    
                $('.form-select').select2({
                    'width': 'resolve',
                    minimumResultsForSearch: Infinity,
                });
            }
        }
    });


    // Accordeon 

    $('.accordeon-item__content:first').css('display', 'block');
    $('.accordeon-item__title').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('accordeon-item__title--active')) {
            $(this).removeClass('accordeon-item__title--active').next().slideUp();
        } else {
            $('.accordeon-item__title.accordeon-item__title--active').next().slideUp();
            $('.accordeon-item__title.accordeon-item__title--active').removeClass('accordeon-item__title--active');
            $(this).next().slideDown();
            $(this).addClass('accordeon-item__title--active');            
        }
    });


    // Collapse sidebar block

    $('.sidebar-block-toggle__btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('sidebar-block-toggle__btn--active').parent().next().slideToggle();
    });

});