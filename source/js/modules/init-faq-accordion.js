const togglers = document.querySelectorAll('[data-toggle]');


const initAccordion = () => {
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
}

export { initAccordion }