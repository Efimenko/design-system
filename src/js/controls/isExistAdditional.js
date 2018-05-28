export default (data, block) => {
  switch (data) {
    case 'layout':
      return block.querySelectorAll('.section').length > 1;
      break;
    case 'bg':
      return block.querySelector('.section[data-active="true"]').getAttribute('data-reserve-bg');
      break;
    case 'image':
      return block.getAttribute('data-reserve-image');
      break;
  }
}