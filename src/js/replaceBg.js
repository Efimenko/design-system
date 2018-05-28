Array.from(document.querySelectorAll('[data-action="change-bg"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;
    const attrName = 'data-reserve-bg';

    Array.from(block.querySelectorAll('.section')).map(section => {
      const reserveBg = section.getAttribute(attrName);
      const initialBg = section.style.background;

      section.style.background = reserveBg;
      section.setAttribute(attrName, initialBg)
    })
  })
})