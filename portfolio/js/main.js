(function($) {

    // scrollspy
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Закрыть меню, когда нажата ссылка
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Уменьшение навбара при скролле
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Спрять кнопку up
    $(window).scroll(function() {
        if ($("#mainNav").offset().top < 300) {
            $(".scroll-top").addClass("hidden-xs-up");
        } else {
            $(".scroll-top").removeClass("hidden-xs-up");
        }
    });

})(jQuery); // End of use strict
