import createControlsGroup from './createControlsGroup.js';
import { createButtonControl } from './createControl.js';
import isExistAdditional from './isExistAdditional.js';

export default () => Array.from(document.querySelectorAll('[data-component="background"]')).map(block => {
  const controls = createControlsGroup(block);

  createButtonControl(controls, 'Change bg', 'change-bg')
  createButtonControl(controls, 'Invert block', 'invert-block')
})