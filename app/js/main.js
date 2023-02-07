$(function () {
  $('.header__inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.news__item-date--slider').slick({
    prevArrow: '<button type = "button" class = "slick-prev" ><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 "/></g></svg></button>',
    nextArrow: '<button type = "button" class = "slick-next" ><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094 10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></g></svg></button>',
    infinite: false,
  });

  $('.footer__top-title').on('click', function () {
    $('.footer').slideToggle();
  });

  $('.header-nav__menu-btn').on('click',()=> {
    $('.header-nav__list').toggleClass('header-nav__list--active');
  });
});