export default (block) => {
  const controlsGroup = document.createElement('div');
  controlsGroup.className = 'controls'
  block.insertBefore(controlsGroup, block.firstChild)

  return controlsGroup
}