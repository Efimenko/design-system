Array.from(document.querySelectorAll('[data-action="invert-block"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;

    Array.from(block.querySelectorAll('.section')).map(section => {
      section.classList.toggle('dark-block');
    })
  })
})