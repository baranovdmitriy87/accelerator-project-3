import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { isMobileDevice } from '../utils/is-mobile-device';

const buttonNext = document.querySelector('.programs__next');
const buttonPrev = document.querySelector('.programs__prev');

Swiper.use([Navigation, Scrollbar]);
// Swiper.use([Scrollbar]);


const initProgramsSlider = () => {
  const setSwyperPrograms = new Swiper('.programs__slider', {
    direction: 'horizontal',
    allowTouchMove: isMobileDevice(),
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 300,

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

      },
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    scrollbar: {
      el: ".programs__scrollbar",
      draggable: true,
      dragClass: 'custom-scrollbar-drag', // Класс для ползунка
    },
  });
  return setSwyperPrograms;
};

export { initProgramsSlider };
