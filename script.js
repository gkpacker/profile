$(function(){
    $('#nav').hover(function(){
        $(this).animate({width:'100px'},500);
    },function(){
        $(this).animate({width:'0px'},500);
    }).trigger('mouseleave');
});
