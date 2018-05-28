export default (data, block) => {
  switch (data) {
    case 'layout':
      return block.querySelectorAll('.section').length > 1;
      break;
    case 'bg':
      if (block.classList.contains('block')) return block.querySelector('.section[data-active="true"]').getAttribute('data-reserve-bg');
      else return block.getAttribute('data-reserve-bg');
      break;
    case 'image':
      return block.getAttribute('data-reserve-image');
      break;
  }
}