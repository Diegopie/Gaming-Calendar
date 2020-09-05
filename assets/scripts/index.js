// * JS Code for Carousel
bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    navigationKeys: true,
    navigation: true,
});

// * Code for Carousel Images

// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added

$.ajax({
    url: 'https://api.rawg.io/api/games?dates=2010-01-01,2020-09-01&ordering=-added',
    method: 'GET',
}).then(function (response) {

    i = Math.floor(Math.random() * 20);
    console.log(response)
    //function(response)
    $('#randomPic1').html('<img src=' + response.results[i].background_image + ' />').attr('alt', response.results[i].name).attr('value', response.results[i].name);
    $('.item__title1').html(response.results[i].name);
})

$.ajax({
    url: 'https://api.rawg.io/api/games?dates=2010-01-01,2020-09-01&ordering=-added',
    method: 'GET',
}).then(function (response) {
    i = Math.floor(Math.random() * 20);
    console.log(response)
    //function(response)
    $('#randomPic2').html('<img src=' + response.results[i].background_image + ' />').attr('alt', response.results[i].name).attr('value', response.results[i].name);
    $('.item__title2').html(response.results[i].name);
})

$.ajax({
    url: 'https://api.rawg.io/api/games?dates=2010-01-01,2020-09-01&ordering=-added',
    method: 'GET',
}).then(function (response) {
    i = Math.floor(Math.random() * 20);
    console.log(response)
    //function(response)
    $('#randomPic3').html('<img src=' + response.results[i].background_image + ' />').attr('alt', response.results[i].name).attr('value', response.results[i].name);
    $('.item__title3').html(response.results[i].name);
})

$.ajax({
    url: 'https://api.rawg.io/api/games?dates=2010-01-01,2020-09-01&ordering=-added',
    method: 'GET',
}).then(function (response) {
    i = Math.floor(Math.random() * 20);
    console.log(response)
    //function(response)
    $('#randomPic4').html('<img src=' + response.results[i].background_image + ' />').attr('alt', response.results[i].name).attr('value', response.results[i].name);
    $('.item__title4').html(response.results[i].name);
})

$.ajax({
    url: 'https://api.rawg.io/api/games?dates=2010-01-01,2020-09-01&ordering=-added',
    method: 'GET',
}).then(function (response) {
    i = Math.floor(Math.random() * 20);
    console.log(response)
    //function(response)
    $('#randomPic5').html('<img src=' + response.results[i].background_image + ' />').attr('alt', response.results[i].name).attr('value', response.results[i].name);
    $('.item__title5').html(response.results[i].name);
})