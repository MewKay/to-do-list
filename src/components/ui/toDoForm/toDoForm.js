import { Events } from "../../../pubsub/eventsName";
import { pubSub } from "../../../pubsub/pubsub";
import { currentContentData } from "../../data/currentData";
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
  const confirmButton = buttons.confirmButton;
  const cancelButton = buttons.cancelButton;

  const leftSection = createContainer("div", titleInput.container, descriptionInput.container);
  const rightSection = createContainer("div", priorityInput.container, dueDateInput.container, buttons.container);

  leftSection.classList.add("left-section");
  rightSection.classList.add("right-section");

  const renderItemValues = (() => {
    titleInput.text.value = toDo.title;
    descriptionInput.textArea.value = toDo.description;
  
    for( const option of priorityInput.selection.options) {
      if(option.value === toDo.priority)
        option.selected = true;
    }

    dueDateInput.date.valueAsDate = toDo.dueDate;
  })();

  const saveValues = () => {
    toDo.title = titleInput.text.value;
    toDo.description = descriptionInput.textArea.value;

    for( const option of priorityInput.selection.options ) {
      if(option.selected) 
        toDo.priority = option.value;
    }

    toDo.dueDate = dueDateInput.date.valueAsDate;

  }
  
  const container = createContainer("form",
  leftSection,
    rightSection);
  container.classList.add("modal-container");
  return {
    container,
    confirmButton,
    cancelButton,
    saveValues
  };
}

const createModal = (toDo) => {
  const form = createFormContainer(toDo);
  const modal = createContainer("dialog", form.container);

  form.confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.saveValues();
    pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
    modal.close();
  });
  
  form.cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.close();
  })
  return modal;
}

export {
  createModal
}