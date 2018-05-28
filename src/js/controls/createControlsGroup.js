export default (block) => {
  const controlsGroup = document.createElement('div');
  controlsGroup.className = 'controls'
  block.insertBefore(controlsGroup, block.firstChild)
  block.classList.add('has-controls');

  return controlsGroup
}