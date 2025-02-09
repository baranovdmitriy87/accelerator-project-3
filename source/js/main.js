// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { initBurgerMenu } from './modules/init-burger-menu';
import { initAccordion } from './modules/init-faq-accordion';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordion()
  });
});

