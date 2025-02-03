import { scrollUpload } from '../utils/scroll-upload.js';

const headerNav = document.querySelector('.header__nav');
const headerButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
const headerNavLinks = document.querySelectorAll(".header__nav-link");
const submenus = document.querySelectorAll('.header__nav-item[data-has-children]')
const dropdowns = document.querySelectorAll('.header__nav-item[data-has-children] > .header__nav-submenu-list')
const overlay = document.querySelector('.overlay');


const isEscapeKey = (evt) => evt.key === 'Escape';

// const hideMessage = () => {
//   document.querySelector('.message').remove();
//   document.removeEventListener('keydown', onDocumentKeydown);
// };

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlay.classList.remove('is-active');

  }
}

window.removeEventListener('keydown', onDocumentKeydown);

// Основная функция
const initBurgerMenu = () => {

  const burgerToggle = () => {
    const isClosed = headerMenu.classList.toggle('open');
    headerButton.classList.toggle('is-active');
    headerNav.classList.toggle('open');
    overlay.classList.toggle('is-active', isClosed);
    document.body.style.overflow = !isClosed ? 'auto' : 'hidden';
  };


  headerNavLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("open");
      }
    });
  });

  // Находим подменю, заменяем в нём span на кнопку
  submenus.forEach((item) => {
    const dropdown = item.querySelector(':scope > .header__nav-submenu-list')
    dropdown.setAttribute('hidden', '')

    const button = item.querySelector(':scope > .header__nav-link')


    button.addEventListener('click', function (e) {
      toggleDropdown(button, dropdown)
    })

    // Обрабатываем нажатие на Esc
    dropdown.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation()

      if (e.keyCode === 27 && focusIsInside(dropdown)) {
        toggleDropdown(button, dropdown)
        button.focus()
      }
    }, false)
  })

  function toggleDropdown(button, dropdown) {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false')
      dropdown.setAttribute('hidden', '')
    } else {
      button.setAttribute('aria-expanded', 'true')
      dropdown.removeAttribute('hidden')
    }
  }

  function focusIsInside(element) {
    return element.contains(document.activeElement)
  }

  function collapseDropdownsWhenTabbingOutsideNav(e) {
    if (e.keyCode === 9 && !focusIsInside(nav)) {
      dropdowns.forEach(function (dropdown) {
        dropdown.setAttribute('hidden', '')
        const btn = dropdown.parentNode.querySelector('header__nav-link')
        btn.setAttribute('aria-expanded', 'false')
      })
    }
  }

  function collapseDropdownsWhenClickingOutsideNav(e) {
    const target = e.target

    // dropdowns.forEach(function (dropdown) {
    //   if (!dropdown.parentNode.contains(target)) {
    //     dropdown.setAttribute('hidden', '')
    //     const btn = dropdown.parentNode.querySelector('header__nav-link')
    //     btn.setAttribute('aria-expanded', 'false')
    //   }
    // });
  }

  headerButton.addEventListener('click', burgerToggle);

  // Закрываем навигацию, если протапались за её пределы
  document.addEventListener('keyup', collapseDropdownsWhenTabbingOutsideNav)

  // Закрываем навигацию, если кликнули вне навигации
  window.addEventListener('click', collapseDropdownsWhenClickingOutsideNav)
}

scrollUpload();


export { initBurgerMenu }

// ============================== \\

// onDocumentKeyDown();

// const closeburgerToggle = () => {
//   overlay.classList.toggle('open');
// };

// const onDocumentKeyDown = () => {
//   document.addEventListener('keydown', function (evt) {
//     if (evt.key === 'Escape') {
//       closeburgerToggle();
//     }
//   });
// };



