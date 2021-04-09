const swiper = new Swiper('.channel-slider ', {
  // Optional parameters
  loop: true,
  slidesPerView:1,
  spaceBetween: 20,
  breakpoints: {
    1900:{
      slidesPerView:6,
    },
    1600:{
      slidesPerView:5,
    },
    1300:{
      slidesPerView:4,
    },
    1100:{
      slidesPerView:3,
    },
    800:{
      slidesPerView:2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const swiper2 = new Swiper('.channel-slider-2 ', {
  // Optional parameters
  loop: true,
  slidesPerView:1,
  spaceBetween: 20,
  breakpoints:{
    1600:{
      slidesPerView:3,
    },
    1100:{
      slidesPerView:2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-2',
    prevEl: '.channel-button-prev-2',
  },
});
const swiper3 = new Swiper('.channel-slider-3 ', {
  // Optional parameters
  loop: true,
  slidesPerView:1,
  spaceBetween: 20,
  breakpoints:{
    1900:{
      slidesPerView:6,
    },
    1600:{
      slidesPerView:5,
    },
    1300:{
      slidesPerView:4,
    },
    1100:{
      slidesPerView:3,
    },
    800:{
      slidesPerView:2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-3',
    prevEl: '.channel-button-prev-3',
  },
});
const searchBtn = document .querySelector('.mobail-search');
const mobailSearch = document .querySelector('.input-group');
searchBtn .addEventListener('click', () => {
  mobailSearch .classList .toggle('is-open')
});

if(document.documentElement.scrollWidth <= 640){
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
};