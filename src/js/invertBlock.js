Array.from(document.querySelectorAll('[data-action="invert-block"]')).map(button => {
  button.addEventListener('click', () => {
    const block = button.parentNode.parentNode;

    if(block.classList.contains('block')) {
      Array.from(block.querySelectorAll('.section')).map(section => {
        section.classList.toggle('dark-block');
      })
    }else {
      block.classList.toggle('dark-block')
    }
  })
})