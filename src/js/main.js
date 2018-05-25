Array.from(document.querySelectorAll('.section')).map(section => {
  const sectionControls = document.createElement('div');
  sectionControls.className = 'section-controls';
  const invertButton = document.createElement('button');
  invertButton.innerText = 'Invert block';
  invertButton.className = 'invert-button section-controls__button';


  sectionControls.appendChild(invertButton);

  if(section.getAttribute('data-reserve-bg')) {
    const changeBgButton = document.createElement('button');
    changeBgButton.innerText = 'Change bg';
    changeBgButton.className = 'change-bg-button section-controls__button';
    sectionControls.appendChild(changeBgButton)
  }

  section.insertBefore(sectionControls, section.firstChild)
})

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