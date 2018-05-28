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