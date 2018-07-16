$(document).ready(function(){

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

  // card - tabs

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


  /* form next */
    $('.next-form-2').on('click', function () {
        $('.cart-form').hide();
        $('.form-2').show();
        $('.links__item-opa').removeClass('active');
        $('.opa-2').addClass('active')
    })

    $('.next-form-3').on('click', function () {
        $('.cart-form').hide();
        $('.form-3').show();
        $('.links__item-opa').removeClass('active');
        $('.opa-3').addClass('active')
    })


    /* form prev */
    $('.prev-form-2').on('click', function () {
        $('.cart-form').hide();
        $('.form-2').show();
        $('.links__item-opa').removeClass('active');
        $('.opa-2').addClass('active')
    })

    $('.prev-form-1').on('click', function () {
        $('.cart-form').hide();
        $('.form-1').show();
        $('.links__item-opa').removeClass('active');
        $('.opa-1').addClass('active')
    })

    /* card - form */
    $('.card-pack__images-link').on('click', function (){
        $('.card-pack__images-link').removeClass('cart-sel');
        $(this).addClass('cart-sel')
    });


    var addCart = document.getElementById('addCart');

    $(addCart).on('click', function (e) {
        var cardActive = document.querySelector('.cart-sel');

        var dataQuantity = $('#select-quantity').val();
        var dataName = $(cardActive).data('name');
        var dataSum = $(cardActive).data('sum');
        var dataShipping = $(cardActive).data('shipping');
        var dataImage = $(cardActive).data('image');

        localStorage.setItem('image', dataImage);
        localStorage.setItem('name', dataName);
        localStorage.setItem('sum', dataSum);
        localStorage.setItem('shipping', dataShipping);
        localStorage.setItem('quantity', dataQuantity);
    });

    var packageImg = localStorage.setItem('image');
    var packageSum = localStorage.setItem('sum');
    var packageName = localStorage.setItem('name');
    var packageTotal = localStorage.setItem('shipping', dataShipping)*localStorage.setItem('quantity', dataQuantity);

    $('#package-name').innerText(packageName)
    $('#package-sum').innerText(packageSum)



});


