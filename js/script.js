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

        /* Mobile navigation */
        $(".jq--nav-icon").click(function() {
            $(".")
        })

    });
})(jQuery);