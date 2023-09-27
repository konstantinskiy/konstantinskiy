(function() {

    
    // Default for init

    const defaultsNeon = {
        'fontFamily': 'AA Neon',
        'textShadow': `#fff 0px 0px 5px,
                       #fff 0px 0px 10px,
                       #40b008 0px 0px 20px,
                       #40b008 0px 0px 30px,
                       #40b008 0px 0px 40px,
                       #40b008 0px 0px 55px,
                       #40b008 0px 0px 75px
                    `,
        'sizeHeightCm': 10,
        'textAlign': 'left',
    };


    const jsNeonText = document.querySelector('.js-neon-text');
    const jsNeonTextarea = document.querySelector('.js-neon-textarea');
    const jsNeonBtn = document.querySelectorAll('.js-neon-btn');
    const jsNeonChangebg = document.querySelectorAll('.js-neon-changebg');
    const jsNeonBg = document.querySelector('.js-neon-bg');
    const jsNeonNumberboxInput = document.querySelector('.js-neon-numberbox-input');
    const jsNeonNumberboxBtn = document.querySelector('.js-neon-numberbox-btn');
    const jsNeonPrice = document.querySelector('.js-neon-price');
    const fileInput = document.querySelector('.js-neon-input-attachment');


    // Change background

    jsNeonChangebg.forEach(function(btnChangeBg) {
        btnChangeBg.addEventListener('click', function(e) {
            e.preventDefault();
            if (btnChangeBg.classList.contains('neon-backgrounds__btn--active')) return;

            btnChangeBg.closest('.neon-backgrounds').querySelector('.neon-backgrounds__btn--active').classList.remove('neon-backgrounds__btn--active');
            btnChangeBg.classList.add('neon-backgrounds__btn--active');

            const background = btnChangeBg.dataset.background;
            jsNeonBg.style.backgroundImage = `url(${background})`;
        });
    });


    // Change textarea value

    jsNeonTextarea.addEventListener('input', function(e) {
        
        let text = this.value.replaceAll('<br><br>', '<br>');
        const matches = text.match(/\n/g);
        let resLines = (matches) ? text.match(/\n/g).length : 0;
        if (text.length) {
            resLines++;
        }

        // если несколько строк, то умножаем на коэффициент, его тоже гдето скрытым инпутом спрятать
        // а, и коэффициент зашить, на который будет умножаться цена буквы при увеличении высоты на 1 пх
        
        if (resLines > 1) {
            const valueArrBr = text.split('\n');
            const valueArrMaxString = getMaxLineLength(valueArrBr);

            const stringLength = text.length;
            const letterHeight = jsNeonNumberboxInput.value;
            const letterRatio = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontHeightRatio;
            
            let returnText = '';
            let linesCount = 0;
            for(let i = 0; i < valueArrBr.length; i++) {
                const splittedData = splitStringByChunks(valueArrBr[i], letterHeight, letterRatio);
                linesCount += splittedData.countLoops;    
                returnText += splittedData.finalString + '<br>';
            }
            returnText = returnText.replaceAll('<br><br>', '<br>');
            returnText = returnText.substring(0, returnText.length - 4);

            jsNeonText.innerHTML = nl2br(returnText); // jsNeonText.html(nl2br(returnText));
            calculateSizesRules(text, letterHeight, letterRatio, linesCount);
            calculateTotalPrice(stringLength, linesCount);
            calculateSizesRules(valueArrMaxString, letterHeight, letterRatio, linesCount, true);
        } else {
            setText(text);
        }

    });


    // Count value max lenght in lines

    const getMaxLineLength = (arr) => {
        let currentLength = 0;
        let string = '';
        for (let i = 0; i < arr.length; i++) {
            if (currentLength < arr[i].length) {
                currentLength = arr[i].length;
                string = arr[i];
            }
        }

        return string;
    };


    // Buttons

    jsNeonChangebg.forEach(function(btnChangeBg) {
        btnChangeBg.addEventListener('click', function(e) {
            e.preventDefault();
            if (btnChangeBg.classList.contains('neon-backgrounds__btn--active')) return;

            btnChangeBg.closest('.neon-backgrounds').querySelector('.neon-backgrounds__btn--active').classList.remove('neon-backgrounds__btn--active');
            btnChangeBg.classList.add('neon-backgrounds__btn--active');

            const background = btnChangeBg.dataset.background;
            jsNeonBg.style.backgroundImage = `url(${background})`;
        });
    });


    // Click button

    jsNeonBtn.forEach(function(neonButton) {
        neonButton.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('neon-sidebox__btn--active')) return;

            console.log(this);

            this.closest('.neon-sidebox').querySelector('.neon-sidebox__btn--active').classList.remove('neon-sidebox__btn--active');
            this.classList.add('neon-sidebox__btn--active');

            const buttonType = this.dataset.btnType;
            switch (buttonType) {
                case 'font':
                    const font = this.dataset.font;
                    console.log(font);

                    setFont(font);
                break;

                case 'color':
                    const colorHex = this.dataset.colorValue;
                    const colorName = this.dataset.colorName;
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
                    document.querySelector('.js-color-name').innerHTML = colorName;
                    break;

                case 'textAlign':
                    const textAlign = this.dataset.textAlign;

                    setTextAlign(textAlign);
                    break;

                case 'backboardcolor':
                    const backboardcolorName = this.dataset.backboardcolorName;
                    const backboardcolorImg = this.dataset.backboardcolorImg;

                    setBackboardColor(backboardcolorImg);
                    document.querySelector('.js-backboardcolor-name').innerHTML = backboardcolorName;
                    break;

                case 'mountingtype':
                    const mountingtypeName = this.dataset.mountingtypeName;
                    const mountingtypeImg = this.dataset.mountingtypeImg;

                    setMountingType(mountingtypeImg);
                    document.querySelector('.js-mountingtype-name').innerHTML = mountingtypeName;
                    break;

                case 'connectiontype':
                    const connectiontypeName = this.dataset.connectiontypeName;
                    const connectiontypeImg = this.dataset.connectiontypeImg;

                    setConnectionType(connectiontypeImg);
                    document.querySelector('.js-connectiontype-name').innerHTML = connectiontypeName;
                    break;
                    
                case 'dimmer':
                    const dimmerName = this.dataset.dimmerName;
                    const dimmerImg = this.dataset.dimmerImg;
                    const dimmerPrice = this.dataset.dimmerPrice;

                    setDimmer(dimmerImg, dimmerPrice);
                    document.querySelector('.js-dimmer-name').innerHTML = dimmerName;
                    break;

                default:
                    break;
            }
        });
    });


    jsNeonNumberboxBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const neonNumberboxInput = this.closest('.neon-numbersbox').querySelector('.js-neon-numberbox-input');
        let neonNumberboxInputValue = neonNumberboxInput.value;

        if ( this.classList.contains('neon-numbersbox__button--minus') ) {
            if (neonNumberboxInputValue <= 10) return;
            neonNumberboxInput.value = parseInt(neonNumberboxInputValue) - 1;
            setFontSizeRatio('minus');
        } else {
            if (neonNumberboxInputValue >= 30) return;
            neonNumberboxInput.value = parseInt(neonNumberboxInputValue) + 1;
            setFontSizeRatio('plus');
        }


        const text = jsNeonText.textContent;
        const stringLength = text.length;
        const letterHeight = jsNeonNumberboxInput.value;
        const letterRatio = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontHeightRatio;
        const stringAfterSplitting = splitStringByChunks(text, letterHeight, letterRatio);
        const linesCount = stringAfterSplitting.countLoops;

        jsNeonText.innerHTML = nl2br(stringAfterSplitting.finalString);

        calculateSizesRules(text, letterHeight, letterRatio, linesCount);
        calculateTotalPrice(stringLength, stringAfterSplitting.countLoops);
        
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
        jsNeonText.style.fontFamily = font;
    };

    const setTextAlign = (position) => {
        jsNeonText.style.textAlign = position;
    };

    const setNeon = (textShadow) => {
        jsNeonText.style.textShadow = textShadow;
    };


    const setText = (text) => {
        setTimeout(() => {

            const stringLength = text.length;
            const letterHeight = jsNeonNumberboxInput.value;
            const letterRatio = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontHeightRatio;
            
            const stringAfterSplitting = splitStringByChunks(text, letterHeight, letterRatio);
            const linesCount = stringAfterSplitting.countLoops;
            
            jsNeonText.innerHTML = nl2br(stringAfterSplitting.finalString);
            calculateSizesRules(text, letterHeight, letterRatio, linesCount);
            calculateTotalPrice(stringLength, linesCount);

        }, 100);
    };
    

    const calculateSizesRules = (text, letterHeight, letterRatio, linesCount, isOneLine = false) => {
        if (isOneLine) {
            linesCount = 1;
        }
        letterHeight = linesCount > 1 ? letterHeight * linesCount : letterHeight;
        const letterWidth =  Math.round(letterHeight * letterRatio);
        const stringLength = text.length;
        const ruleWidth = (stringLength * letterWidth >= 200) ? 200 : stringLength * letterWidth;

        if (!isOneLine) {
            document.querySelector('.neon-container-text__lineleft span').textContent = letterHeight + 'cm';
        }
        document.querySelector('.neon-container-text__linebottom span').textContent = ruleWidth + 'cm';
    };
    
    
    const calculateTotalPrice = (lenght, linesCount) => {

        // Значение первой колонки (название Неон) * коэффициент (задается в админке - я его назвал fontRatio1)
        // + стоимость подложки (прямоугольной (S пр) или фигурной (S фиг) какая выбрана) * количество букв * коэффициент (задается в админке - я его назвал fontRatio2)
        // + (количество резов * число букв) округленное до верхнего целого * стоимость реза (задается в админке)

        // Да, 2 кэффициента, один это число строк умноженное на коэфф, прибавляем к итоговой стоимости

        // Второй это при инкременте высоты буквы на 1см, на него умножаем
        // типо считаем для базовой высоты , а далее каждый инкремент на 1с высоты - это будет умножении цены на кожфф

        const neonValue = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontNeonValue;
        const fontRatio1 = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontRatio1;
        const fontRatio2 = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontRatio2;
        const fontSpr = document.querySelector('.neon-sidebox__btn[data-btn-type="font"]').dataset.fontSpr;
        const fontSfig = document.querySelector('.neon-sidebox__btn[data-btn-type="font"]').dataset.fontSfig;
        const fontSprOrSfig = document.querySelector('.neon-sidebox__btn[data-btn-typebg-name="shape"]').classList.contains('neon-sidebox__btn--active') ? fontSfig : fontSpr;

        const fontRezNum = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontReznum;
        const fontRezCost = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontRezcost;

        const fontLinesCountRatio = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontLinescountRatio;
        const linesCountRatioResult = Math.ceil(linesCount * fontLinesCountRatio);

        const fontHeight1cmRatio = document.querySelector('.neon-sidebox__btn--active[data-btn-type="font"]').dataset.fontHeightRatio;
        const fontHeightValue = jsNeonNumberboxInput.value;
        const fontHeightRatioPrice = fontHeight1cmRatio * fontHeightValue;
    
        const totalPrice = Math.ceil(Math.ceil(neonValue * fontRatio1) + Math.ceil(fontSprOrSfig * lenght * fontRatio2) + Math.ceil(fontRezNum * lenght) * fontRezCost + linesCountRatioResult + fontHeightRatioPrice);

        jsNeonPrice.innerText = totalPrice;
    };


    const calculatePrice = (price) => {

        const currentPrice = jsNeonPrice.innerText;
        const recalcPrice = Number(currentPrice) + Number(price);
        jsNeonPrice.innerText = recalcPrice;

    };

 
    const splitStringByChunks = (str, letterHeight, letterRatio) => {
        let finalString = '';
        const maxWidthCm = 200;

        let stringLength = str.length;
        let letterWidth = Math.round(letterHeight * letterRatio);
        let chunk = Math.round(maxWidthCm / letterWidth);
        const countLoops = Math.ceil(stringLength / chunk);

        for (var i = 0; i < countLoops; i++) {
            let countStart = chunk * i;
            let countEnd = countStart + chunk;
            let substringData = str.substring(countStart, countEnd);

            substringData = substringData.replace(/\n/g, '<br>');
            if (substringData.length % chunk === 0) {
                substringData += '<br>';
            }
            finalString += substringData;
        }

        return {
            finalString,
            countLoops
        };
    };


    const nl2br = (str, is_xhtml) => {
        let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
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
        calculatePrice(price);
        console.log(img);
    };
    

    const setFontSizeRatio = (type) => {
        const fontSizeRatio = 1.02;
        const currentFontSize = parseFloat(getComputedStyle(jsNeonText).fontSize);
        const recalcFontSize = type === 'minus' ? (currentFontSize / fontSizeRatio) : (currentFontSize * fontSizeRatio);

        jsNeonText.style.fontSize = recalcFontSize;
    };


    // fileUpload
    
    fileInput.addEventListener('change', function() {

        if (this.files) {
            const MAX_FILE_SIZE = 15;
            const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png'];
            const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

            const file = fileInput.files[0];
            const fileName = file.name;
            const fileExtension = fileName.split('.').pop();
            const fileType = file.type;
            
            if (ALLOWED_EXTENSIONS.includes(fileExtension) && ALLOWED_TYPES.includes(fileType)) {
                if (!fileSizeValidation(file.size, MAX_FILE_SIZE)) {
                    console.log('File size must be lower than 15Mb');
                    return;
                }

                const createObjectImage = URL.createObjectURL(file);
                jsNeonBg.style.backgroundImage = `url(${createObjectImage})`;
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
        setText(jsNeonTextarea.value);
    };

    initNeon();


    $('[data-fancybox]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });


})();