$(document).ready(function(){

// Scroll elementos del menu para

    var android = $('#titulo-android').offset().top,
        javascript = $('#titulo-javascript').offset().top,
        css = $('#titulo-css').offset().top,
        sql = $('#titulo-sql').offset().top;

    $('#card-android').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: android - 100
        }, 500)
    });

    $('#card-javascript').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: javascript - 100
        }, 500)
    });

    $('#card-css').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: css - 100
        }, 500)
    });

    $('#card-sql').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sql //+ 200
        }, 500)
    });

});