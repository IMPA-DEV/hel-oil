$(document).ready(function(){
    /* parallax */
    $( '.parallax-layer' ).parallax({
        mouseport: $('#parallax')
    });

    //slick-slider
    $('#news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /* nav */
    $('.nav-btn').click(function () {
        $('.header__nav').fadeToggle();
        $('.nav-btn').toggle();
        $("html,body").toggleClass('hidden')
    });

    /* animate blocks */
    $(".header__parallax-viewport img, .package-how, .subscribe-img").animated("bounceIn");
    $(".header__parallax-layer.bg-1").animated("bounceInLeft");
    $(".header__parallax-layer.bg-2").animated("bounceInRight");
    $(".about-img img").animated("fadeInUp");
    $(".woop__right div").animated("fadeInRight");
    $(".woop__left > *").animated("fadeInLeft");
    $(".shopnow-descr h2, .risk-descr > *").animated("fadeInRight");
    $(".shopnow-descr-text").animated("fadeInLeft");


});


