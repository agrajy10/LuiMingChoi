$(function() {

    var menuToggle = $('#menuToggle');
    var menuClose = $('.menu-close');
    var siteMainNav = $('.site-main-nav');
    var dropdownItem = $('.site-main-nav .has-dropdown > a');
    var overlay = $('.overlay');

    $(menuToggle).click(function() {

        $(siteMainNav).addClass('show');
        $('body').addClass('menu-active');

    });

    $(menuClose).click(function() {

        $(siteMainNav).removeClass('show');
        $('body').removeClass('menu-active');

    });

    $(dropdownItem).click(function(e) {
        e.preventDefault();
        if ($(window).width() < 1200) {

            $(this).toggleClass('active');
            $(this).next('.dropdown').slideToggle();
        }

    });

    $(overlay).click(function() {
        if ($(siteMainNav).hasClass('show')) {
            $(siteMainNav).removeClass('show');
            $('body').removeClass('menu-active');
        }
    });

    $(window).resize(function() {
      
        if($(this).width() >= 1200) {
            $(siteMainNav).removeClass('show');
            $('body').removeClass('menu-active');
        }

    });

});