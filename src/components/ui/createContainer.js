const createContainer = (elementType,...childsToAppend) => {
  const container = document.createElement(element);

  childsToAppend.forEach( child => container.appendChild(child));

  return container;
}

export {
  createContainer
};