$(function(){
    $('#nav').hover(function(){
        $(this).animate({left:'0px'},500);
    },function(){
        $(this).animate({left:'-100px'},500);
    }).trigger('mouseleave');
});
