import createControlsGroup from './createControlsGroup.js';
import createControl from './createControl.js';
import isExistAdditional from './isExistAdditional.js';

export default () => Array.from(document.querySelectorAll('[data-component="background"]')).map(block => {
  const controls = createControlsGroup(block);

  createControl(controls, 'Change bg', 'change-bg')
  createControl(controls, 'Invert block', 'invert-block')
})