import { createContainer } from "../../../createContainer";

const createEditButton = () => {
  const editButton = createContainer("button");
  editButton.innerText = "Edit";
  return editButton;
}

const addEditButton = (container) => {
  container.appendChild(createEditButton());
  return container;
}

export {
  addEditButton
};