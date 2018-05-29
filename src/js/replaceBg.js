import isPicture from './utils/isPicture.js';
import replaceImage from './utils/replaceImage.js';

Array.from(document.querySelectorAll('[data-action="change-bg"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;
    const bgAttrName = 'data-reserve-bg';
    const pictureAttrName = 'data-reserve-image';
    const bind = block.getAttribute('data-bind');

    if(block.classList.contains('block')) {
      Array.from(block.querySelectorAll('.section')).map(section => {
        const reserveBg = section.getAttribute(bgAttrName);
        let initialBg = ''
        if (section.style.backgroundImage) {
          initialBg = section.style.backgroundImage === 'none'
          ? section.style.backgroundImage
          : section.style.backgroundImage.match(/(\'|\")(?<link>.+)(\'|\")/).groups.link;
        }else if(section.style.backgroundColor) {
          initialBg = 'none';
        }

        section.style.backgroundImage = reserveBg === 'none' ? reserveBg : `url('${reserveBg}')`;
        section.setAttribute(bgAttrName, initialBg)
      })
    }else {
      const mainBlock = block.closest('.block');
      const reserveBg = block.getAttribute(bgAttrName);
      const initialBg = block.style.backgroundImage.match(/(\'|\")(?<link>.+)(\'|\")/).groups.link;

      Array.from(mainBlock.querySelectorAll(`[data-bind="${bind}"]`)).map(item => {
        if(isPicture(item)) {
          replaceImage(item, reserveBg)

          item.setAttribute(pictureAttrName, initialBg)

        }else {
          item.style.backgroundImage = `url('${reserveBg}')`;
          item.setAttribute(bgAttrName, initialBg)
        }
      })
    }
  })
})