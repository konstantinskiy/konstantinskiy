$(document).ready(function() {

    let randomBtn = document.getElementById('random');
    //randomBtn.addEventListener('click', getRandomBeer);

    function getRandomBeer() {

        var gridContainer = $('.beer-grid');

        fetch('https://api.punkapi.com/v2/beers/random')  
            .then(function(response) {
                if(response.status !== 200) {
                    console.log('Error: ' + response.status);  
                    return;  
                }

                response.json().then(function(data) {  
                    console.log(data);  
                    var dataRandomItem = `<div class="beer-grid__col">
                            <div class="beer-item">
                                <div class="beer-item__img">
                                    <a href="${data[0].image_url}" data-fancybox><img src="${data[0].image_url}"></a>
                                </div>
                                <div class="beer-item__title">${data[0].name}</div>
                                <div class="beer-item__tagline">${data[0].tagline}</div>
                                <div class="beer-item__description">${data[0].description}</div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Сварено в:</div>
                                    <div class="beer-item__linevalue">${data[id].first_brewed}</div>
                                </div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Количество алкоголя:</div>
                                    <div class="beer-item__linevalue">${data[id].abv} %</div>
                                </div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Хорошо сочетается с:</div>
                                    <div class="beer-item__linevalue">${beerItemPairingList}</div>
                                </div>
                                <div class="beer-item__footer">
                                    <div class="beer-item__footercol">
                                        <a href="#beer-modal" class="beer-item__details">Детали</a>
                                    </div>
                                    <div class="beer-item__footercol">
                                        <a href="#order-modal" class="beer-item__order">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    gridContainer.append(dataRandomItem);
                });  
            });
    }

    //getRandomBeer();    


    function getBeers(page = 1, per_page = 10) {

        let gridContainer = document.getElementsByClassName('beer-grid')[0];
        gridContainer.innerHTML = '';
        let beerItem = '';

        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`)  
            .then(function(response) {
                if(response.status !== 200) {
                    console.log('Error: ' +  response.status);
                    return;
                }

                response.json().then(function(data) {
                    data.forEach(function(item, id) {
                        let beerItemDescription = data[id].description.slice(0,120) + '...';
                        let beerItemPairingArr = item.food_pairing;
                        let beerItemPairingList = '';

                        beerItemPairingArr.forEach(function(item, id) {
                            beerItemPairingList += item + ', ';
                        });
                        beerItemPairingList = beerItemPairingList.slice(0, -2);

                        beerItem = `<div class="beer-grid__col">
                            <div class="beer-item">
                                <div class="beer-item__inner">
                                    <div class="beer-item__head">
                                        <div class="beer-item__img">
                                            <a href="${item.image_url}" data-fancybox><img src="${item.image_url}"></a>
                                        </div>
                                        <div class="beer-item__title"><span>${data[id].name}</span></div>
                                        <div class="beer-item__tagline">${data[id].tagline}</div>
                                        <div class="beer-item__description">${beerItemDescription}</div>
                                    </div>
                                    <div class="beer-item__line">
                                        <div class="beer-item__linekey">Сварено в:</div>
                                        <div class="beer-item__linevalue">${data[id].first_brewed}</div>
                                    </div>
                                    <div class="beer-item__line">
                                        <div class="beer-item__linekey">Количество алкоголя:</div>
                                        <div class="beer-item__linevalue">${data[id].abv} %</div>
                                    </div>
                                    <div class="beer-item__line">
                                        <div class="beer-item__linekey">Хорошо сочетается с:</div>
                                        <div class="beer-item__linevalue">${beerItemPairingList}</div>
                                    </div>
                                    <div class="beer-item__footer">
                                        <div class="beer-item__footercol">
                                            <a
                                                href="#"
                                                data-modal-id="beer-modal"
                                                data-beer-id="${data[id].id}"
                                                class="beer-item__details js-beer-modal"
                                                data-fancybox-modal>Детали
                                            </a>
                                        </div>
                                        <div class="beer-item__footercol">
                                            <a
                                                href="#"
                                                data-modal-id="order-modal"
                                                data-beer-id="${data[id].id}"
                                                class="beer-item__order js-beer-modal"
                                                data-fancybox-modal>Заказать
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                        gridContainer.innerHTML += beerItem;
                    });
                });
            });
    }

    getBeers(1, 10);



    // Sort beer

    $('.js-sort-items').on('change', function(e) {
        e.preventDefault();
        let selectItems = $(this).val();
        let selectPage = $('.js-sort-page').val();
        getBeers(selectPage, selectItems);
    });

    $('.js-sort-page').on('change', function(e) {
        e.preventDefault();
        let selectItems = $('.js-sort-items').val();
        let selectPage = $(this).val();
        getBeers(selectPage, selectItems);
    });



    // Modal init

    $(document).on('click', '.js-beer-modal', function(e) {
        e.preventDefault();
        var modalId = $(this).data('modal-id');
        var beerId = $(this).data('beer-id');
        getBeerById(beerId);
        $.fancybox.open({
            src: '#' + modalId,
            opts: {
                beforeShow: function() {
                    $('#beer-modal').empty();
                    $('html').addClass('scroll-disable');
                },
                afterClose: function() {
                    $('html').removeClass('scroll-disable');
                }
            }
        });
    });


    function getBeerById(id) {

        if(!id) {
            return;
        }

        fetch(`https://api.punkapi.com/v2/beers/${id}`)  
            .then(function(response) {
                if(response.status !== 200) {
                    console.log('Error: ' +  response.status);
                    return;
                }

                response.json().then(function(data) {
                    console.log(data);
                    data.forEach(function(item, id) {
                        let beerItemPairingArr = data[id].food_pairing;
                        let beerItemPairingList = '';

                        beerItemPairingArr.forEach(function(item, id) {
                            beerItemPairingList += item + ', ';
                        });
                        beerItemPairingList = beerItemPairingList.slice(0, -2);

                        let beerItem = `<div class="beer-item">
                            <div class="beer-item__inner">
                                <div class="beer-item__head">
                                    <div class="beer-item__img">
                                        <a href="${data[id].image_url}" data-fancybox><img src="${data[id].image_url}"></a>
                                    </div>
                                    <div class="beer-item__title"><span>${data[id].name}</span></div>
                                    <div class="beer-item__tagline">${data[id].tagline}</div>
                                    <div class="beer-item__description">${data[id].description}</div>
                                </div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Сварено в:</div>
                                    <div class="beer-item__linevalue">${data[id].first_brewed}</div>
                                </div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Количество алкоголя:</div>
                                    <div class="beer-item__linevalue">${data[id].abv} %</div>
                                </div>
                                <div class="beer-item__line">
                                    <div class="beer-item__linekey">Хорошо сочетается с:</div>
                                    <div class="beer-item__linevalue">${beerItemPairingList}</div>
                                </div>
                            </div>
                        </div>`;
                        // $('#beer-modal').empty();
                        $('#beer-modal').append(beerItem);
                    });
                });
            });
    }

    //getBeers(1, 10);



    // $('[data-fancybox-modal]').fancybox({
    //     selector: '.js-beer-modal',
    //     trapFocus: true,
    //     autoFocus: false,
    //     touch: false,
    //     beforeShow: function() {
    //         $('html').addClass('scroll-disable');
    //     },
    //     afterClose: function() {
    //         $('html').removeClass('scroll-disable');
    //     }
    // });





});