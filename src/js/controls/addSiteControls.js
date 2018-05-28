import createControlsGroup from './createControlsGroup.js';
import createControl from './createControl.js';

export default () => {
  const controls = createControlsGroup(document.body)
  createControl(controls, 'Toggle design', 'toggle-design')
}