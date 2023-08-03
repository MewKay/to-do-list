import { ToDo } from "../../app-logic/todo";
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
    const tempToDo = ToDo();

    tempToDo.title = titleInput.text.value;
    tempToDo.description = descriptionInput.textArea.value;

    for( const option of priorityInput.selection.options ) {
      if(option.selected) 
        tempToDo.priority = option.value;
    }

    tempToDo.dueDate = dueDateInput.date.valueAsDate;

    return tempToDo;
  }
  
  const container = createContainer("form",
  leftSection,
    rightSection);

  container.classList.add("modal-container");
  container.method = "dialog";
  
  return {
    container,
    confirmButton,
    cancelButton,
    saveValues
  };
}

const Modal = (toDo) => {
  const _form = createFormContainer(toDo);
  const _container = createContainer("dialog", _form.container);
  let _toDo = toDo;

  const removeModal = () => {
    document.body.removeChild(_container);
  }

  _form.confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(_form.container.reportValidity()) {
      _toDo = _form.saveValues();
      _container.close();
      removeModal();
    }
  });
  
  _form.cancelButton.addEventListener("click", () => {
    _container.close();
    removeModal();
  })

  return {
    get container() {
      return _container;
    },
    get toDo() {
      return _toDo;
    }
  };
}

export {
  Modal
}