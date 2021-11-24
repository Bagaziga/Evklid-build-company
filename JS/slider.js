const swiper = new Swiper('.swiper', {
  a11y:{
    paginationBulletMessage: 'Перейти на слайд {{index}}'
  },
  // Optional parameters
  slidesPerView: 1,
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
