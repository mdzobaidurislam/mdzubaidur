(function ($) {
    "use strict";

    $(".owl-carousel").owlCarousel({
        items:1,
        dots:true,
        autoplay:true
    });
    $(window).on("load", function () {
        var e = $(".work-filter"),
            a = $("#menu-filter");
        e.isotope({ filter: "*", layoutMode: "masonry", animationOptions: { duration: 750, easing: "linear" } }),
            a.find("a").on("click", function () {
                var o = $(this).attr("data-filter");
                return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({ filter: o, animationOptions: { animationDuration: 750, easing: "linear", queue: !1 } }), !1;
            });
    });


  // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".menuarea").removeClass("stikyadded");
        } else {
            $(".menuarea").addClass("stikyadded");
        }
    });

    var typed = new Typed('.typer', {
        strings: [
            'A Web developer', 
            'A Web Designer',
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop:true
      });

})(jQuery);

