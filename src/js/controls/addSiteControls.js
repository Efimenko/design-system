import createControlsGroup from './createControlsGroup.js';
import { createButtonControl } from './createControl.js';

export default () => {
  const controls = createControlsGroup(document.body)
  createButtonControl(controls, 'Toggle design', 'toggle-design')
}