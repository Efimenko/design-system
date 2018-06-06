import createControlsGroup from './createControlsGroup.js';
import { createSelectControl } from './createControl.js';

export default () => {
  const controls = createControlsGroup(document.body)
  createSelectControl(controls, [
    {text: 'default', value: 'default'},
    {text: 'design1', value: 'design1'},
    {text: 'design2', value: 'design2'},
    {text: 'design4', value: 'design4'}
  ],
  'toggle-design')
}