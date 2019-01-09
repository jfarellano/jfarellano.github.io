
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
    $.scrollify({
        section : "section",
        sectionName : ".home, .who, .work"
    });
});
