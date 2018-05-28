import createControlsGroup from './createControlsGroup.js';
import createControl from './createControl.js';
import isExistAdditional from './isExistAdditional.js';

export default () => Array.from(document.querySelectorAll('.block')).map(block => {
  const controls = createControlsGroup(block);

  if(isExistAdditional('layout', block)) {
    createControl(controls, 'Change layout', 'change-layout')
  }

  if(isExistAdditional('bg', block)) {
    createControl(controls, 'Change bg', 'change-bg')
  }

  createControl(controls, 'Invert block', 'invert-block')
})