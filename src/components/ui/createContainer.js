const createContainer = (elementType,...childsToAppend) => {
  const container = document.createElement(elementType);

  childsToAppend.forEach( child => container.appendChild(child));

  return container;
}

export {
  createContainer
};