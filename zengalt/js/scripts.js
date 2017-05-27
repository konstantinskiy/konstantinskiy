$(document).ready(function(){

    $('.projects-slider').owlCarousel({
        items: 1,
        loop:true,
        nav: false,
        margin: 0,
        dots: true
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > $('.header').height()){
            $('.hidden-header').fadeIn();
        }
        else{
            $('.hidden-header').fadeOut();
        }
    });

    $('.scroll-trigger').on('click', function(e){
        e.preventDefault();
        var scrollTarget = $(this).attr('href');
        $('html, body').animate({scrollTop: $(scrollTarget).offset().top}, 600);
    });

    $('.fixed-header-center-btn').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });

    $(".submit-form-btn").on('click', function(e) {
        e.preventDefault();
        var text = $(this).parents('.static-form').find("[name='text']").val();
        var textLenght = text.length;
        var name = $(this).parents('.static-form').find("input[name='name']").val();
        var nameLenght = name.length;
        var email = $(this).parents('.static-form').find("input[name='email']").val();
        
        if(textLenght=='' || textLenght <= 6){
            $(this).parents('.static-form').find('.error-text').fadeIn('slow',function(){
                setTimeout(function(){$('.error-text').fadeOut()},1000);
            });
            return false;
        }
        if(name=='' || nameLenght <= 1){
            $(this).parents('.static-form').find('.error-name').fadeIn('slow',function(){
                setTimeout(function(){$('.error-name').fadeOut()},1000);
            });
            return false;
        }        
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }
        if(!isValidEmailAddress(email)){
            $(this).parents('.static-form').find('.error-email').fadeIn('slow',function(){
                setTimeout(function(){$('.error-email').fadeOut()},1000);
            });
            return false;
        }

        if (nameLenght > 1 && textLenght > 6){
            $.ajax({
            type: "POST",
            url: "order.php",
            data: $(this).parents('.static-form').serialize(),
            beforeSend: function(data) {
                $('.submit-form-btn').attr('disabled','disabled');
                $('.submit-form-btn').attr('value', 'Sending...');
            },
            success: function(data){
                $(".modal-shadow").fadeIn();
                $(".thx-modal").fadeIn();
                setTimeout(function(){
                    if($(".thx-modal").is(":visible")){
                        $(".thx-modal").fadeOut();
                        $(".modal-shadow").fadeOut();
                    }
                    $('.submit-form-btn').removeAttr('disabled');
                    $('.submit-form-btn').attr('value', 'Get in touch');
                }, 3000);
                $('.static-form').trigger('reset');
            },
            error: function(){
                alert ("Error connection to server! Try again!");
                $('.static-form').trigger('reset');
            }
            });
        }
        return false;
    });

});