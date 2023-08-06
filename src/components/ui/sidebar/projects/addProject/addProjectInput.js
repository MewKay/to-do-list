import { createCancelButton } from "../../../buttons/cancelButton";
import { createConfirmButton } from "../../../buttons/confirmButton";
import { createContainer } from "../../../createContainer"

const inputSection = () => {
  const input = createContainer("input");
  input.type = "text";
  input.required = true;
  input.size = "15";
  input.maxLength = "20";
  input.classList.add("add-project-input");
  return input;
}

const ButtonSection = () => {
  const _confirmButton = createConfirmButton();
  const _cancelButton = createCancelButton();

  const _container = createContainer("div", _confirmButton, _cancelButton);
  _container.classList.add("add-project-buttons");

  _cancelButton.type = "reset";
  
  return {
    get container() {
      return _container;
    },
    get confirm() {
      return _confirmButton;
    },
    get cancel() {
      return _cancelButton;
    }
  };
}

const AddProjectInput = () => {
  const _input = inputSection();
  const _buttons = ButtonSection(); 
  const _container = createContainer("form", _input, _buttons.container);

  return {
    get container() {
      return _container;
    },
    get text() {
      return _input;
    },
    get confirmButton() {
      return _buttons.confirm;
    },
    get cancelButton() {
      return _buttons.cancel;
    }
  };
}

export {
  AddProjectInput
}