Array.from(document.querySelectorAll('.section')).map(section => {
  const invertButton = document.createElement('button');
  invertButton.innerText = 'Invert block';
  invertButton.className = 'invert-button';

  section.insertBefore(invertButton, section.firstChild)
})

Array.from(document.querySelectorAll('.invert-button')).map(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle("dark-block")
  })
})