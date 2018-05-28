Array.from(document.querySelectorAll('[data-action="change-layout"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;

    const activeSection = block.querySelector('.section[data-active="true"]')
    const inactiveSection = block.querySelector('.section:not([data-active="true"])')

    activeSection.setAttribute('data-active', false);
    inactiveSection.setAttribute('data-active', true);
  })
})