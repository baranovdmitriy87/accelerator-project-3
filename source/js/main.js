// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { initBurgerMenu } from './modules/init-burger-menu';



window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initBurgerMenu();
  });
});

// ================================== \\

document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('[data-toggle]');

  togglers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selector = e.currentTarget.dataset.toggle
      const block = document.querySelector(`${selector}`);
      if (e.currentTarget.classList.contains('is-active')) {
        block.style.maxHeight = '';
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
      }

      e.currentTarget.classList.toggle('is-active')
    })
  })
})



