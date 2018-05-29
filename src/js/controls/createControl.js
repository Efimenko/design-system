export const createButtonControl = (controlsGroup, innerText, action) => {
  const control = document.createElement('button');
  control.className = 'controls__button';
  control.innerText = innerText;
  control.setAttribute('data-action', action)

  controlsGroup.append(control)
  return control;
}

export const createSelectControl = (controlsGroup, options, action) => {
  const control = document.createElement('select');
  control.setAttribute('data-action', action)

  options.forEach(({text, value}) => {
    const option = document.createElement('option');
    option.innerText = text;
    option.value = value;
    control.append(option)
  })

  controlsGroup.append(control)
  return control
}