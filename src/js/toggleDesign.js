const designSelect = document.querySelector('[data-action="toggle-design"]');

designSelect.addEventListener('change', () => {
  const listStyles = document.head.querySelectorAll('link');

  if(designSelect.value !== 'default') {
    const isExistDesign = listStyles[listStyles.length - 1].href.match(/design/)

    if(isExistDesign) document.head.removeChild(listStyles[listStyles.length - 1])

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./${designSelect.value}.css`;

    document.head.append(link)
  }else {
    document.head.removeChild(listStyles[listStyles.length - 1])
  }
})
