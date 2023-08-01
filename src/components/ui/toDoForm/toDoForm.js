import { createContainer } from "../createContainer"
import { createDescriptionInput } from "./descriptionInput";
import { createTitleInput } from "./titleInput";

const createFormContainer = (toDo) => {
  const titleInput = createTitleInput();
  const descriptionInput = createDescriptionInput();
/*  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput(); */ 
  
  const container = createContainer("div",
    titleInput ,
    descriptionInput /*,
    priorityInput,
    dueDateInput */);
  container.classList.add("modal-container");
  return container;
}

export {
  createFormContainer
}