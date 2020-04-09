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



    // Header slide trigger
    
    $('.js-header-trigger').on('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('header-hamburger--active')) {
            $(this).removeClass('header-hamburger--active');
            $('.header').removeClass('header--open');
            $('.shade').removeClass('shade--show');
            $(this).find('.header-hamburger__text').text('Открыть меню');
        } else {
            $(this).addClass('header-hamburger--active');
            $('.header').addClass('header--open');
            $('.shade').addClass('shade--show');
            $(this).find('.header-hamburger__text').text('Закрыть меню');
        }
    });



    // Scroll to target

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        var scrollTarget = $(this).data('scroll-target');
        if(scrollTarget) {
            $('body, html').animate({scrollTop: $('.' + scrollTarget).offset().top}, 600);
        }
    });



    // Hero slider init    
    
    if($('.hero-slider').length) {
        $('.hero-slider').on('init', function(e, slick) {
            var slideIndex = $(this).find('.slick-active').data('slick-index');
            var slideNext = slideIndex + 1;
            var slideNextTitle = $(this).find('[data-slick-index="' + slideNext + '"]').data('title');
            $('.js-hero-next span').text(slideNextTitle);
        });

        var heroSlider = $('.hero-slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
        });

        $('.hero-slider').on('afterChange', function(e, slick, currentSlide) {
            var slideNext = currentSlide + 1;
            var slideTitle = $(this).find('[data-slick-index="' + slideNext + '"]').data('title');
            $('.js-hero-next span').text(slideTitle);
        });

        $('.js-hero-next').on('click', function(e) {
            e.preventDefault();
            heroSlider.slick('next');
        });
    }



    // Catalog masonry slider init

    if($('.catalog-masonry-slider').length) {
        $('.catalog-masonry-slider').slick({
            slidesToShow: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]
        });
    }



    // Page hero slider init

    if($('.page-hero-slider').length) {
        $('.page-hero-slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
        });
    }



    // Category descrition slider init

    if($('.category-description-slider').length) {
        $('.category-description-slider').slick();
    }



    // Product sync slider

    $('.sgl-product-slider').slick({
        asNavFor: '.sgl-product-slider-nav'
    });

    $('.sgl-product-slider-nav').slick({
        slidesToShow: 6,
        asNavFor: '.sgl-product-slider',
        arrows: false,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });



    // Fancybox init gallery

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : true
        },
        loop: true,
        hash: false,
        beforeShow: function() {
            $('html').addClass('fancybox-scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('fancybox-scroll-disable');  
        }
    });



    // Equal height to blocks

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    if(window.innerWidth > 480) {
        setEqualHeight($('.products-grid__col'));
    }



    // Posts tabs

    $('.post-heading-nav__link').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).data('tab');
        if($(this).hasClass('post-heading-nav__link--active')) return;
        $('.post-heading-nav__link').removeClass('post-heading-nav__link--active');
        $(this).addClass('post-heading-nav__link--active');
        $('.s-posts-tab').removeClass('s-posts-tab--active');
        $('.s-posts-tab--' + tab).addClass('s-posts-tab--active');
    });

});