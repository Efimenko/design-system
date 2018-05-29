import createControlsGroup from './createControlsGroup.js';
import { createButtonControl, createSelectControl } from './createControl.js';
import isExistAdditional from './isExistAdditional.js';

export default () => Array.from(document.querySelectorAll('.block')).map(block => {
  const controls = createControlsGroup(block);

  if(isExistAdditional('layout', block)) {
    const layoutCounter = block.querySelectorAll('.section').length;
    const dataForControl = []

    for(let i = 1; i <= layoutCounter; i++) {
      dataForControl.push({text: `Layout ${i}`, value: i})
    }

    createSelectControl(controls, dataForControl, 'change-layout')
  }

  if(isExistAdditional('bg', block)) {
    createButtonControl(controls, 'Change bg', 'change-bg')
  }

  createButtonControl(controls, 'Invert block', 'invert-block')
})