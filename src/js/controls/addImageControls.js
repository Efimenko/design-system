import createControlsGroup from './createControlsGroup.js';
import createControl from './createControl.js';
import isExistAdditional from './isExistAdditional.js';

export default () => Array.from(document.querySelectorAll('.picture')).map(picture => {
  const controls = createControlsGroup(picture);

  if(isExistAdditional('image', picture)) {
    createControl(controls, 'Change image', 'change-image')
  }
})