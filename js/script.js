(function($) {
    $(function() {

        /* Scroll to ABOUT */
        $(".jq--scroll-about").on('click', function() {
            $("html, body").animate({scrollTop: $(".jq--about").offset().top}, 700);
        });

         /* Scroll to PROJECTS */
         $(".jq--scroll-projects").on('click', function() {
            $("html, body").animate({scrollTop: $(".jq--projects").offset().top}, 700);
        });

        /* Scroll to CONTACT */
        $(".jq--scroll-contact").on('click', function() {
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 700);
        });

        /******************************************************************
        ******************* MOBILE NAVIGATION *****************************
        ******************************************************************/

        /* Navigation bar resizing */
        $(".jq--nav-icon").on('click', function() {
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        /* Switching between hamburger menu and cross menu */
        $(".jq--img-hamburger").on('click', function() {
            if ($(".jq--img-hamburger").attr("src") === "img/hamburgerMenu.png") {
                $(".jq--img-hamburger").attr("src", "img/crossMenu.png");
            }
            else {
                $(".jq--img-hamburger").attr("src", "img/hamburgerMenu.png");
            }
        });
    });
})(jQuery);