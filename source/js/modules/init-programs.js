import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { isMobileDevice } from '../utils/is-mobile-device';

const buttonNext = document.querySelector('.programs__next');
const buttonPrev = document.querySelector('.programs__prev');

Swiper.use([Navigation]);


const initProgramsSlider = () => {
  const setSwyperReview = new Swiper('.programs__slider', {
    direction: 'horizontal',
    allowTouchMove: isMobileDevice(),
    // slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 300,

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 32,
        // pagination: {
        //   el: '.hero__swiper-pagination',
        //   clickable: true,
        // },
      },
    },



    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
  return setSwyperReview;
};

export { initProgramsSlider };
