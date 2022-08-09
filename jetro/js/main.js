
const swiper = new Swiper('.swiper', {

  slidesToShow: 1,
  slidesToSwipe: 5,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });

});



