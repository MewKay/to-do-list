import { createContainer } from "../createContainer"
import { createTitleInput } from "./titleInput";

const createFormContainer = (toDo) => {
  const titleInput = createTitleInput();
  const descriptionInput = createdescriptionInput();
  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput();
  
  const container = createContainer("div",
    titleInput,
    descriptionInput,
    priorityInput,
    dueDateInput);
  return container;
}