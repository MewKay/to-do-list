import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";

const createDeleteButton = () => {
  const deleteButton = createContainer("button", createIcon("delete"));
  deleteButton.classList.add("delete-to-do");
  return deleteButton;
}

const addDeleteButton = (container) => {
  container.appendChild(createDeleteButton());
  return container;
}

export {
  addDeleteButton
};