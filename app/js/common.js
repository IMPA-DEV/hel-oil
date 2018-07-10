$(document).ready(function () {

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
});