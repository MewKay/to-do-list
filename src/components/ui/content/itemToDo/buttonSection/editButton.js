import { createContainer } from "../../../createContainer";
import { createIcon } from "../../../createIcon";

const createEditButton = () => {
  const editButton = createContainer("button", createIcon("edit"));
  return editButton;
}

const addEditButton = (container) => {
  container.appendChild(createEditButton());
  return container;
}

export {
  addEditButton
};