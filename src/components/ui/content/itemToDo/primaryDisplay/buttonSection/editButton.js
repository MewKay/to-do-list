import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";
import { createModal } from "../../../../toDoForm/toDoForm";

const createEditButton = (toDo) => {
  const editButton = createContainer("button", createIcon("edit"));
  editButton.classList.add("btn-edit");
  editButton.addEventListener("click", () => {
    const modal = createModal(toDo);
    document.body.appendChild(modal);
    modal.showModal();
  })
  return editButton;
}

const addEditButton = (container,toDo) => {
  container.appendChild(createEditButton(toDo));
  return container;
}

export {
  addEditButton
};

