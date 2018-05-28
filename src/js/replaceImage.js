Array.from(document.querySelectorAll('[data-action="change-image"]')).map(button => {
  button.addEventListener('click', () => {
    const image = button.parentNode.parentNode;
    const block = image.closest('.block');
    const bind = image.getAttribute('data-bind')
    const attrName = 'data-reserve-image';

    const reserveImage = image.getAttribute(attrName);
    const initialImage = image.querySelector('img').getAttribute('src');

    if(bind) {
      Array.from(block.querySelectorAll(`[data-bind="${bind}"]`)).map(image => {
        if (image.tagName.toLowerCase() !== 'picture') {
          image.style.background = `url("${reserveImage}")`
          image.setAttribute('data-reserve-bg', `url(${initialImage})`)
        }else {
          image.querySelector('img').setAttribute('src', reserveImage);
          image.querySelector('source').setAttribute('srcset', reserveImage);

          image.setAttribute(attrName, initialImage)
        }
      })
    } else {
      image.querySelector('img').setAttribute('src', reserveImage);
      image.querySelector('source').setAttribute('srcset', reserveImage);

      image.setAttribute(attrName, initialImage)
    }

  })
})