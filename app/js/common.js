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

  /* Toggle dop form "Use a different billing address" */
    $('input[name=contact]').on('click', function () {
      if($('input[value=open]:checked')){
          $('.billing-cart').fadeToggle(300);
      }
    });


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
        if($('#select-quantity').val() == 0){
            e.preventDefault();
            $('#select-quantity').css('border-color','red');
            return false
        }

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

    var packageImg = localStorage.getItem('image');
    var packageSum = localStorage.getItem('sum');
    var packageName = localStorage.getItem('name');
    var packageShipping = localStorage.getItem('shipping');
    var packageQuantity = localStorage.getItem('quantity');

    if(packageImg == 1){
        $('#package-img').attr('src','img/package-1.png')
    } else if (packageImg == 2){
        $('#package-img').attr('src','img/package-2.png')
    } else {
        $('#package-img').attr('src','img/package-3.png')
    }

    var subtotal = packageSum*packageQuantity;
    var subtotal = subtotal.toFixed(2);

    if(packageShipping > 1){
        $('#shipping').html('$'+ packageShipping);
        $('#total').html('$' + subtotal + packageShipping);
    } else{
        $('#shipping').html(packageShipping);
        $('#total').html('$' + subtotal);
    }

    $('#package-name').html(packageName);
    $('#package-quantity').html(packageQuantity);
    $('#package-sum').html(packageSum);
    $('#subtotal').html(subtotal);

    /* Cart Form #1 */
    $('.next-form-2').on('click', function () {
        var cardEmail      = $('.formEmail').val();
        var cardFirstName  = $('.formFirstName').val();
        var cardLastName   = $('.formLastName').val();
        var cardCompany    = $('.formCompany').val();
        var cardAddress    = $('.formAddress').val();
        var cardApartment  = $('.formApartment').val();
        var cardCity       = $('.formCity').val();
        var cardCountry    = $('.formCountry').val();
        var cardState      = $('.formState').val();
        var cardZip        = $('.formZip').val();
        var cardPhone      = $('.formPhone').val();

        localStorage.setItem('subtotal', subtotal);
        localStorage.setItem('email', cardEmail);
        localStorage.setItem('firstName', cardFirstName);
        localStorage.setItem('lastName', cardLastName);
        localStorage.setItem('company', cardCompany);
        localStorage.setItem('address', cardAddress);
        localStorage.setItem('apartment', cardApartment);
        localStorage.setItem('city', cardCity);
        localStorage.setItem('country', cardCountry);
        localStorage.setItem('state', cardState);
        localStorage.setItem('zip', cardZip);
        localStorage.setItem('phone', cardPhone);

        /* Cart Form #2 Shipping Method */
        var formAddress  = localStorage.getItem('address');
        var formShipping = localStorage.getItem('shipping');
        var formCountry  = localStorage.getItem('country');


        $('.shipAddress').val(formAddress);
        $('.shipShipping').html(formShipping);

        /* Cart #3 Payment Method */
        var payAddress = formAddress + ', ' + formCountry;
        var payShipping = 'USPS First Class Shipping · ' + formShipping;

        $('.payAddress').val(payAddress);
        $('.payShipping').val(payShipping);
    });

    /* summery page */
    var sumProduct = localStorage.getItem('name');
    var sumPrice = localStorage.getItem('subtotal');
    var sumTotal = localStorage.getItem('subtotal');
    var sumFirstName = localStorage.getItem('firstName');
    var sumLastName = localStorage.getItem('lastName');
    var sumApartment = localStorage.getItem('apartment');
    var sumAddress = localStorage.getItem('address');
    var sumCountry = localStorage.getItem('country');
    var sumCity = localStorage.getItem('city');
    var sumState = localStorage.getItem('state');
    var sumZip = localStorage.getItem('zip');
    var sumPhone = localStorage.getItem('phone');
    var sumEmail = localStorage.getItem('email');

    $('#summ-product').html(sumProduct);
    $('#summ-price').html('$' + sumPrice);
    $('#summ-total').html('$' + sumTotal);
    $('#summ-FirstName').html(sumFirstName);
    $('#summ-LastName').html(sumLastName);
    $('#summ-Address').html(sumCountry +' ' + sumAddress);
    $('#summ-Apartment').html(sumApartment);
    $('#summ-City').html(sumCity);
    $('#summ-State').html(sumState);
    $('#summ-Zip').html(sumZip);
    $('#summ-Phone').html(sumPhone);
    $('#summ-Email').html(sumEmail);
});


