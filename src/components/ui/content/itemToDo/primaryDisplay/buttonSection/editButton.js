import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";
import { createModal } from "../../../../toDoForm/toDoForm";

const createEditButton = () => {
  const editButton = createContainer("button", createIcon("edit"));
  editButton.classList.add("btn-edit");
  editButton.addEventListener("click", () => {
    const modal = createModal();
    document.body.appendChild(modal);
    modal.showModal();
  })
  return editButton;
}

const addEditButton = (container) => {
  container.appendChild(createEditButton());
  return container;
}

export {
  addEditButton
};

