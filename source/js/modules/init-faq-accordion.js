const togglers = document.querySelectorAll('[data-toggle]');
const content = document.querySelector('.open')


const initAccordion = () => {

  // document.querySelectorAll('.faq-accordion__button').forEach(header => {
  //   header.addEventListener('click', function () {
  //     // Закрываем все открытые элементы
  //     document.querySelectorAll('.faq-accordion__content').forEach(content => {
  //       if (content !== this.nextElementSibling) {
  //         content.classList.remove('is-active');
  //       }
  //     });

  //     // Переключаем текущий элемент
  //     this.nextElementSibling.classList.toggle('is-active');
  //   });
  // });

  togglers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selector = e.currentTarget.dataset.toggle
      const block = document.querySelector(`${selector}`);
      if (e.currentTarget.classList.contains('is-active')) {
        block.style.maxHeight = '';
        // content.style.display = 'none';
      } else {
        // content.style.display = 'block';
        block.style.maxHeight = block.scrollHeight + 'px';
      }

      e.currentTarget.classList.toggle('is-active')
      // content.classList.remove('open')
    })
  })
}

export { initAccordion }
