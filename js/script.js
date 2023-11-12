// jquery для простоты написания эвентов и прочих действий с dom, которые вроде в этот модуль вообще не входят
$(document).ready(function () {
   // код для инициализации слайдера .slider
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 900,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });

   // код для инициализации слайдера .info__slider__container
   $('.info__slider__container').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 700,
      easing: 'ease-in',
      initialSlide: 2,
      infinite: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      appendArrows: $('.info__slider__container'),
   });

   // код для обработки кликов по кнопке .header__burger
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body, html').toggleClass('lock');
   });

   // код для обработки кликов по ссылке .header__link
   $('.header__link').click(function (event) {
      $('body, html').removeClass('lock');
      $('.header__burger, .header__menu').removeClass('active');
   });

   // код для добавления/удаления класса при касании .but
   $('.but').on("touchstart", function () {
      $('.but').addClass('Myhover');
   });

   // код для добавления/удаления класса при касании .but
   $('.but').on("touchend", function () {
      $('.but').removeClass('Myhover');
   });

   // код для добавления/удаления класса при касании .submit-send
   $('.submit-send').on("touchstart", function () {
      $('.submit-send').addClass('Myhover1');
   });

   // код для добавления/удаления класса при касании .submit-send
   $('.submit-send').on("touchend", function () {
      $('.submit-send').removeClass('Myhover1');
   });
});
