$(document).ready(function(){
    $('.pull-link').click(function(e){
        $('html, body').animate({
                    scrollTop: $("#desc").offset().top
          
                }, {
    duration: 1200,
            easing:"swing"
        });
    });
})