export default (controlsGroup, innerText, action) => {
  const control = document.createElement('button');
  control.className = 'controls__button';
  control.innerText = innerText;
  control.setAttribute('data-action', action)

  controlsGroup.append(control)

  return control;
}