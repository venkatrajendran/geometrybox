$(document).ready(function(){
    $('.arrow').hide();
    $('.prod').mouseenter(function(){
        $(this).find('.arrow').show();
    });
    $('.prod').mouseleave(function(){
        $(this).find('.arrow').hide();
    });
    $('.pull-link').click(function(e){
        $('html, body').animate({
                    scrollTop: $("#desc").offset().top
          
                }, {
    duration: 1200,
            easing:"swing"
        });
    });
})