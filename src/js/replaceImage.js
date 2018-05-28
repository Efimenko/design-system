Array.from(document.querySelectorAll('[data-action="change-image"]')).map(button => {
  button.addEventListener('click', () => {
    const image = button.parentNode.parentNode;
    const attrName = 'data-reserve-image';

    const reserveImage = image.getAttribute(attrName);
    const initialImage = image.querySelector('img').getAttribute('src');

    image.querySelector('img').setAttribute('src', reserveImage);
    image.querySelector('source').setAttribute('srcset', reserveImage);

    image.setAttribute(attrName, initialImage)
  })
})