$(document).ready(function(){
    let alturaDelViewport = window.innerHeight;

    

    
    let android = $('#titulo-android').offset().top,
        javascript = $('#titulo-javascript').offset().top,
        css = $('#titulo-css').offset().top,
        sql = $('#titulo-sql').offset().top;

    $('#card-android').on('click', function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: android - 50
        }, 500)
    });

    $('#card-javascript').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: javascript - 50
        }, 500)
    });

    $('#card-css').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: css - 50
        }, 500)
    });

    $('#card-sql').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sql - 50
        }, 500)
    });

});