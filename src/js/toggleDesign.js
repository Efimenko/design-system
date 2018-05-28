document.querySelector('[data-action="toggle-design"]').addEventListener('click', () => {
  const listStyles = document.head.querySelectorAll('link');
  const isExistDesign = listStyles[listStyles.length - 1].href.match(/design/)

  if(isExistDesign !== null) {
    document.head.removeChild(listStyles[listStyles.length - 1])
  }else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './design.css';

    document.head.append(link)
  }
})
