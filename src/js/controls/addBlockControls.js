import createControlsGroup from './createControlsGroup.js';

Array.from(document.querySelectorAll('.block')).map(block => {
  createControlsGroup(block)
})