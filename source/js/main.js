// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


// const button = document.querySelector('.burger-menu__button');
// const menu = document.querySelector('.header__burger-menu');
// const overlay = document.querySelector('.overlay');
// const burgerNav = document.querySelector('.burger-menu__nav');

// menu.addEventListener('click', function () {
//   button.classList.toggle('open');
//   menu.classList.toggle('is-active');
//   burgerNav.classList.toggle('open');
//   // isOriginalColor = !isOriginalColor; // Меняем состояние
// });

const headerButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

headerButton.addEventListener('click', function () {
  // evt.preventDefault();
  headerMenu.classList.toggle('open');
  headerButton.classList.toggle('is-active');
  headerNav.classList.toggle('open');
});



// Переменная для отслеживания состояния

// Обработчик клика
// element.addEventListener('click', () => {
//   if (isOriginalColor) {
//     element.style.color = newColor; // Изменяем цвет
//   } else {
//     element.style.color = originalColor; // Возвращаем исходный цвет
//   }
//   isOriginalColor = !isOriginalColor; // Меняем состояние
// });

// const originalColor = menu.style.backgroundColor;
// const newColor = '#316DC2';
// let isOriginalColor = true;


// initBurgerMenu(updateContentColor);

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
