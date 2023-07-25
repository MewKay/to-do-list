import { createContainer } from "../../../createContainer";

const createDeleteButton = () => {
  const deleteButton = createContainer("button");
  deleteButton.innerText = "Delete";
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