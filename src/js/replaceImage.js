import isPicture from './utils/isPicture.js';
import replaceImage from './utils/replaceImage.js';

Array.from(document.querySelectorAll('[data-action="change-image"]')).map(button => {
  button.addEventListener('click', () => {
    const image = button.parentNode.parentNode;
    const block = image.closest('.block');
    const bind = image.getAttribute('data-bind')
    const pictureAttrName = 'data-reserve-image';
    const bgAttrName = 'data-reserve-bg';

    const reserveImage = image.getAttribute(pictureAttrName);
    const initialImage = image.querySelector('img').getAttribute('src');

    if(bind) {
      Array.from(block.querySelectorAll(`[data-bind="${bind}"]`)).map(image => {
        if (isPicture(image)) {
          replaceImage(image, reserveImage)

          image.setAttribute(pictureAttrName, initialImage)
        }else {
          image.style.backgroundImage = `url('${reserveImage}')`
          image.setAttribute(bgAttrName, initialImage)
        }
      })
    } else {
      replaceImage(image, reserveImage, initialImage)

      image.setAttribute(pictureAttrName, initialImage)
    }

  })
})