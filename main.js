
$(document).ready(function () {
    if ($(".snappy").scrollTop() == 0) {
        $('.navbar').stop(true, false).animate({backgroundColor: 'transparent'}, 100);
        $('.navbar .logo').fadeOut(100);
    } else {
        $('.navbar').animate({backgroundColor: '#100026'}, 100);
        $('.navbar .logo').fadeIn(100);
    }
    $(".snappy").scroll(function(){
        if ($(".snappy").scrollTop() == 0) {
            $('.navbar').stop(true, false).animate({backgroundColor: 'transparent'}, 100);
            $('.navbar .logo').fadeOut(100);
        } else {
            $('.navbar').animate({backgroundColor: '#100026'}, 100);
            $('.navbar .logo').fadeIn(100);
        }
    })
});
