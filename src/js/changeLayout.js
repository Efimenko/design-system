Array.from(document.querySelectorAll('[data-action="change-layout"]')).map(select => {
  select.addEventListener('change', (e) => {
    const block = select.parentNode.parentNode;

    const activeSection = block.querySelector('.section[data-active="true"]')
    const willBeActiveSection =  block.querySelector(`.section[data-layout="${select.value}"]`)

    activeSection.setAttribute('data-active', false);
    willBeActiveSection.setAttribute('data-active', true);
  })
})