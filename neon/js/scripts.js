$(document).ready(function() {

    
    // Default for init

    const defaultsNeon = {
        'fontFamily': 'Arial',
        'textShadow': `#fff 0px 0px 5px,
                       #fff 0px 0px 10px,
                       #40b008 0px 0px 20px,
                       #40b008 0px 0px 30px,
                       #40b008 0px 0px 40px,
                       #40b008 0px 0px 55px,
                       #40b008 0px 0px 75px
                    `,
        'size': 55,
        'textAlign': 'left'
    }


    // Change background

    $('.js-neon-getbg').on('click', function(e) {
        e.preventDefault();
        const _this = $(this);
        if (_this.hasClass('neon-backgrounds__btn--active')) return;

        _this.closest('.neon-backgrounds').find('.neon-backgrounds__btn--active').removeClass('neon-backgrounds__btn--active');
        _this.addClass('neon-backgrounds__btn--active');

        const background = $(this).data('background');
        $('.js-neon-bg').css('background-image', `url(${background})`);
    });


    
    const characts = document.querySelectorAll('.neon-sidebox__btn[data-btn-type="size"]');
    const charactsObj = [];
    Array.from(characts).forEach(charact => {
        charactsObj.push(charact.getAttribute('data-size-chars'));
    });
    console.log(charactsObj);

    

    // Change textarea value

    $('.js-neon-textarea').on('input', function(e) {
        e.preventDefault();
        const value = $(this).val();

        const sizeValue = $('.neon-sidebox__btn--active[data-btn-type="size"]').data('size');

        const lengthWithoutSpaces = value.replace(/\s/g, '').length;
        console.log(lengthWithoutSpaces);

        $('.js-neon-text').text(value);
    });


    // Buttons

    $('.js-neon-btn').on('click', function(e) {
        e.preventDefault();

        const _this = $(this);
        if (_this.hasClass('neon-sidebox__btn--active')) return;

        _this.closest('.neon-sidebox').find('.neon-sidebox__btn--active').removeClass('neon-sidebox__btn--active');
        _this.addClass('neon-sidebox__btn--active');

        const buttonType = _this.data('btn-type');
        switch (buttonType) {
            case 'font':
                const font = _this.data('font');

                setFont(font);
            break;

            case 'color':
                const colorHex = _this.data('color-value');
                const colorName = _this.data('color-name');
                const textShadow = `
                    #fff 0px 0px 5px,
                    #fff 0px 0px 10px,
                    #${colorHex} 0px 0px 20px,
                    #${colorHex} 0px 0px 30px,
                    #${colorHex} 0px 0px 40px,
                    #${colorHex} 0px 0px 55px,
                    #${colorHex} 0px 0px 75px
                `;

                setNeon(textShadow);
                $('.js-color-name').text(colorName);
                break;

            case 'size':
                const sizeCm = _this.data('size-cm');
                const sizeChars = _this.data('size-chars');

                setSize(sizeCm, sizeChars);
                break;

            case 'textAlign':
                const textAlign = _this.data('text-align');

                setTextAlign(textAlign);
                break;

            case 'backboardcolor':
                const backboardcolorName = _this.data('backboardcolor-name');
                const backboardcolorImg = _this.data('backboardcolor-img');

                setBackboardColor(backboardcolorImg);
                $('.js-backboardcolor-name').text(backboardcolorName);
                break;

            case 'mountingtype':
                const mountingtypeName = _this.data('mountingtype-name');
                const mountingtypeImg = _this.data('mountingtype-img');

                setMountingType(mountingtypeImg);
                $('.js-mountingtype-name').text(mountingtypeName);
                break;

            case 'connectiontype':
                const connectiontypeName = _this.data('connectiontype-name');
                const connectiontypeImg = _this.data('connectiontype-img');

                setConnectionType(connectiontypeImg);
                $('.js-connectiontype-name').text(connectiontypeName);
                break;
                
            case 'dimmer':
                const dimmerName = _this.data('dimmer-name');
                const dimmerImg = _this.data('dimmer-img');
                const dimmerPrice = _this.data('dimmer-price');

                setDimmer(dimmerImg, dimmerPrice);
                $('.js-dimmer-name').text(dimmerName);
                break;

            default:
                break;
        }

    });


    // js-neon-imgbg-hidden
    // js-neon-textpos-hidden
    // js-neon-fontfamily-hidden
    // js-neon-color-hidden
    // js-neon-size-hidden
    // js-neon-backboard-hidden
    // js-neon-mountingtype-hidden
    // js-neon-connectiontype-hidden
    // js-neon-dimmer-hidden
    // js-neon-thickness-hidden
    // js-neon-waterproofing-hidden
    // js-neon-mockupconfirmation-hidden


    // Options setters

    const setFont = (font) => {
        $('.js-neon-text').css('font-family', font);
    };

    const setTextAlign = (position) => {
        $('.js-neon-text').css('text-align', position);
    };

    const setNeon = (textShadow) => {
        $('.js-neon-text').css('text-shadow', textShadow);
    };

    const setSize = (sizeCm, sizeChars) => {
        const price = 55;
        const recalcPrice = price * sizeCm;
        $('.js-neon-price').text(recalcPrice);


        const sizeH = sizeCm * 0.75;
        $('.neon-container-text__lineleft span').text(sizeH + 'cm');
        $('.neon-container-text__linebottom span').text(sizeCm + 'cm');
    };

    const setBackboardColor = (backboardcolor) => {
        console.log(backboardcolor);
    };

    const setMountingType = (mountingtype) => {
        console.log(mountingtype);
    };

    const setConnectionType = (connectiontype) => {
        console.log(connectiontype);
    };

    const setDimmer = (img, price) => {
        const currentPrice = $('.js-neon-price').text();
        const recalcPrice = Number(currentPrice) + Number(price);
        $('.js-neon-price').text(recalcPrice);
        console.log(img);
    };
    


   

    // fileUpload

    const imgLoad = document.querySelector('.js-neon-bg');
    const fileInput = document.querySelector('.js-neon-input-attachment');
    
    fileInput.addEventListener('change', function() {

        if (this.files) {
            const MAX_FILE_SIZE = 15;
            const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png'];
            const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

            const file = fileInput.files[0];
            const fileName = file.name;
            const fileExtension = fileName.split('.').pop();
            const fileType = file.type;
            const createObjectImage = URL.createObjectURL(file);
            
            if (ALLOWED_EXTENSIONS.includes(fileExtension) && ALLOWED_TYPES.includes(fileType)) {
                if (!fileSizeValidation(file.size, MAX_FILE_SIZE)) {
                    console.log('File size must be lower than 15Mb');
                    return;
                }

                imgLoad.style.backgroundImage = `url(${createObjectImage})`;
                document.querySelectorAll('.neon-backgrounds__btn').forEach((bg) => {
                    bg.classList.remove('neon-backgrounds__btn--active');
                });

                return;
            }

            console.log(`file extension ${fileExtension} not alowed`);
            return;
        }

        return;

    });


    function fileSizeValidation(size, max_size) {
        return (size / 1024 / 1024) < max_size;
    }

    



    // INIT

    const initNeon = () => {
        setFont(defaultsNeon.fontFamily);
        setTextAlign(defaultsNeon.textAlign);
        setNeon(defaultsNeon.textShadow);
        setSize(defaultsNeon.size);
    }

    initNeon();


    $('[data-fancybox]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });
    

});