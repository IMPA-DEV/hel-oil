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


    // Navigation
  var navBtn = $('.nav__btn');
  var navBlock = $('.nav');
  var openNav = 'open';

  navBtn.on('click', function () {
    navBlock.addClass(openNav);
    $('.header__nav').css('opacity', '0')
  });

  $('.nav__close, .nav__list li a, .nav__link, .nav__icon').on('click', function () {
    navBlock.removeClass(openNav);
    $('.header__nav').css('opacity', '1')
  });

  $(window).scroll(function () {
    navBlock.removeClass(openNav);
    $('.header__nav').css('opacity', '1')
  });

  // card

  var cardBtn = $('.card-pack__images-link');
  var cardImg = $('.card-pack__images-img');
  var cardPack = $('.card-pack__package');
  var cardProd = $('.card-pack__product');
  var cardAct = 'card-active';

  for (var i = 0; i < cardBtn.length; i++) {
    $(cardBtn[i]).on('click', function (e) {
      for (var j = 0; j < cardBtn.length; j++) {
        if (cardBtn[j] == e.currentTarget) {
          $(cardBtn[j]).addClass(cardAct);
          for (var n = 0; n < cardImg.length; n++) {
            if (j == n) {
              $(cardImg[n]).addClass(cardAct);
            } else {
              $(cardImg[n]).removeClass(cardAct);
            }
          }
          for (var m = 0; m < cardPack.length; m++) {
            if (j == m) {
              $(cardPack[m]).addClass(cardAct);
            } else {
              $(cardPack[m]).removeClass(cardAct);
            }
          }
          for (var l = 0; l < cardProd.length; l++) {
            if (j == l) {
              $(cardProd[l]).addClass(cardAct);
            } else {
              $(cardProd[l]).removeClass(cardAct);
            }
          }
        } else {
          $(cardBtn[j]).removeClass(cardAct);
        }
      }
    });
  }

  // news-slider
  var windowW = $(window).width();
  if(windowW < 767){
    $('.news-slider__row').slick({
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
    });
  }
});


