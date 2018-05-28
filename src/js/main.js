Array.from(document.querySelectorAll('.section')).map(section => {
  const sectionControls = document.createElement('div');
  sectionControls.className = 'controls controls--section';
  const invertButton = document.createElement('button');
  invertButton.innerText = 'Invert block';
  invertButton.className = 'invert-button controls__button';


  sectionControls.appendChild(invertButton);

  if(section.getAttribute('data-reserve-bg')) {
    const changeBgButton = document.createElement('button');
    changeBgButton.innerText = 'Change bg';
    changeBgButton.className = 'change-bg-button controls__button';
    sectionControls.appendChild(changeBgButton)
  }

  section.insertBefore(sectionControls, section.firstChild)
})

// Array.from(document.querySelectorAll('.block')).map(block => {
//   if (block.querySelectorAll('.section').length > 1) {
//     const changeLayoutButton = document.createElement('button');
//     changeBgButton.innerText = 'Change layout';
//     changeBgButton.className = 'change-layout-button controls__button';
//   }
// })

Array.from(document.querySelectorAll('.invert-button')).map(button => {
  button.addEventListener('click', () => {
    button.parentNode.parentNode.classList.toggle("dark-block")
  })
})

Array.from(document.querySelectorAll('.change-bg-button')).map(button => {
  button.addEventListener('click', () => {
    const section = button.parentNode.parentNode;
    const reserveBg = section.getAttribute('data-reserve-bg');
    const initialBg = section.style.background;

    section.style.background = reserveBg;

    section.setAttribute('data-reserve-bg', initialBg)
  })
})

document.querySelector('.toggle-design-button').addEventListener('click', () => {
  const lastStyleSheet = document.head.children[document.head.children.length - 1];

  if (lastStyleSheet.getAttribute('href') === 'design.css') {
    document.head.removeChild(lastStyleSheet)
  }else {
    const link = document.createElement('link');
    link.href = 'design.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link)
  }
})

Array.from(document.querySelectorAll('.picture[data-reserve-image]')).map(picture => {
  const imageControls = document.createElement('div');
  imageControls.className = 'controls controls--image';
  const changeImageButton = document.createElement('button');
  changeImageButton.innerText = 'Change image';
  changeImageButton.className = 'change-image-button controls__button';


  imageControls.appendChild(changeImageButton);

  picture.insertBefore(imageControls, picture.firstChild)
})

Array.from(document.querySelectorAll('.change-image-button')).map(button => {
  button.addEventListener('click', () => {
    const image = button.parentNode.parentNode;
    const reserveImage = image.getAttribute('data-reserve-image');
    const initialImage = image.querySelector('img').getAttribute('src');

    image.querySelector('img').setAttribute('src', reserveImage)
    image.querySelector('source').setAttribute('srcset', reserveImage)

    image.setAttribute('data-reserve-image', initialImage)
  })
})