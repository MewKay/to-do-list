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

  const leftSection = createContainer("div", titleInput.container, descriptionInput.container);
  const rightSection = createContainer("div", priorityInput.container, dueDateInput.container, buttons);

  leftSection.classList.add("left-section");
  rightSection.classList.add("right-section");

  titleInput.text.value = toDo.title;
  descriptionInput.textArea.value = toDo.description;
  
  for( const option of priorityInput.selection.options) {
    if(option.value === toDo.priority)
      option.selected = true;
  }

  dueDateInput.date.valueAsDate = toDo.dueDate;
  
  const container = createContainer("form",
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