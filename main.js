
$(document).ready(function () {
    if ($(window).scrollTop() < 50) {
        $('.navbar').stop(true, false).animate({backgroundColor: 'transparent'}, 100);
        $('.navbar .logo').fadeOut(100);
    } else {
        $('.navbar').animate({backgroundColor: '#100026'}, 100);
        $('.navbar .logo').fadeIn(100);
    }
    $(window).scroll(function(){
        if ($(window).scrollTop() == 0) {
            $('.navbar').stop(true, false).animate({backgroundColor: 'transparent'}, 100);
            $('.navbar .logo').fadeOut(100);
        } else {
            $('.navbar').animate({backgroundColor: '#100026'}, 100);
            $('.navbar .logo').fadeIn(100);
        }
    })
    $("#who").click(function(){
        $.scrollify.move("#2");
    })
    $("#home").click(function(){
        $.scrollify.move("#1");
    })
    $("#work").click(function(){
        $.scrollify.move("#3");
    })
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });

    $.scrollify({
        section : "section",
        sectionName : "1, 2, 3",
        touchScroll:true,
        scrollbars: true
    });



    var $item = $('.carousel-item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight); 
    $item.addClass('full-screen');

    $('.carousel .bg').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    $('.carousel').carousel({
        keyboard: true
    })
});
