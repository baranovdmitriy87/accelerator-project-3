// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


const button = document.querySelector('.burger-menu__button');
const menu = document.querySelector('.header__burger-menu');
const overlay = document.querySelector('.overlay');
const burgerNav = document.querySelector('.burger-menu__nav');

  menu.addEventListener('click', function() {
     button.classList.toggle('open');
     menu.classList.toggle('is-active');
     burgerNav.classList.toggle('open');
})

    onDocumentKeyDown();
  const closeburgerToggle = () => {
    overlay.classList.toggle('open');
  };

    const onDocumentKeyDown = () => {
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeburgerToggle();
      }
    });
  };
