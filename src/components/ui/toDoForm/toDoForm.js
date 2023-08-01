import { createContainer } from "../createContainer"
import { createDescriptionInput } from "./descriptionInput";
import { createDueDateInput } from "./duedateInput";
import { createFormButtons } from "./formButtons";
import { createPriorityInput } from "./priorityInput";
import { createTitleInput } from "./titleInput";

const createFormContainer = (toDo) => {
  const titleInput = createTitleInput();
  const descriptionInput = createDescriptionInput();
  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput(); 
  const buttons = createFormButtons();

  const leftSection = createContainer("div", titleInput, descriptionInput);
  const rightSection = createContainer("div", priorityInput, dueDateInput, buttons);

  leftSection.classList.add("left-section");
  rightSection.classList.add("right-section");
  
  const container = createContainer("div",
    leftSection,
    rightSection);
  container.classList.add("modal-container");
  return container;
}

const createModal = (toDo) => {
  const form = createFormContainer(toDo);
  const modal = createContainer("dialog", form);
  return modal;
}

export {
  createModal
}