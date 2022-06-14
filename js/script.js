(function($) {
    $(function() {
         /* Scroll to home */
        $(".jq--scroll-home").click(function() {
            $("html, body").animate({scrollTop: $(".jq--home").offset().top}, 1000);
        });

        /* Scroll to about me */
        $(".jq--scroll-about").click(function() {
            $("html, body").animate({scrollTop: $(".jq--about").offset().top}, 800);
        });

        /* Scroll to contact */
        $(".jq--scroll-contact").click(function() {
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 600);
        });

        /*******************************************************
        *** MOBILE NAVIGATION ***
        ********************************************************/

        /* Navigation bar resizing */
        $(".jq--nav-icon").click(function() {
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        /* Switching between hamburger menu and cross menu */
        $(".jq--img-hamburger").click(function() {
            if ($(".jq--img-hamburger").attr("src") === "img/hamburgerMenu.png") {
                $(".jq--img-hamburger").attr("src", "img/crossMenu.png");
            }
            else {
                $(".jq--img-hamburger").attr("src", "img/hamburgerMenu.png");
            }
        });
    });
})(jQuery);