Array.from(document.querySelectorAll('[data-action="change-bg"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;
    const attrName = 'data-reserve-bg';
    const bind = block.getAttribute('data-bind');

    if(block.classList.contains('block')) {
      Array.from(block.querySelectorAll('.section')).map(section => {
        const reserveBg = section.getAttribute(attrName);
        const initialBg = section.style.background;

        section.style.background = reserveBg;
        section.setAttribute(attrName, initialBg)
      })
    }else {

      const mainBlock = block.closest('.block');

      const reserveBg = block.getAttribute(attrName);
      const initialBg = block.style.background;



      Array.from(mainBlock.querySelectorAll(`[data-bind="${bind}"]`)).map(item => {
        if(item.tagName.toLowerCase() === 'picture') {
          const newReserveUrl = reserveBg.slice(5).slice(0, -2);
          const newInitialUrl = initialBg.slice(5).slice(0, -2);
          item.querySelector('img').setAttribute('src', newReserveUrl);
          item.querySelector('source').setAttribute('srcset', newReserveUrl);

          item.setAttribute('data-reserve-image', newInitialUrl)

        }else {
          item.style.background = reserveBg;
          item.setAttribute(attrName, initialBg)
        }
      })
    }
  })
})