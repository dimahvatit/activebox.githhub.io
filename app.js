$(function () {

    // fixed header \\
    let header = $("#header"),
        intro = $("#intro");

    let nav = $("#navjs");
    let navToggle = $("#navToggle");

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // smooth scroll \\
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll'),
            elementOffset = $(elementId).offset().top;

        nav.removeClass("navShow");

        $("html, body").animate({
            scrollTop: elementOffset - 75
        }, 1300);
    });


    // nav toggle \\
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("navShow");
        nav.slideToggle(duration, easing, complete)
    });


    // reviews https://kenwheeler.github.io/slick/ \\

    let slider = $("#reviewsSlider");

    slider.slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        fade: true
    });




});