import { createCancelButton } from "../../buttons/cancelButton";
import { createConfirmButton } from "../../buttons/confirmButton";
import { createContainer } from "../../createContainer"

const inputSection = () => {
  const input = createContainer("input");
  input.type = "text";
  input.required = true;
  input.size = "20";
  input.maxLength = "20";
  return input;
}

const ButtonSection = () => {
  const confirmButton = createConfirmButton();
  const cancelButton = createCancelButton();

  const container = createContainer("div", confirmButton, cancelButton);

  cancelButton.type = "reset";
  
  return {
    get container() {
      return container;
    },
    get confirm() {
      return confirmButton;
    },
    get cancel() {
      return cancelButton;
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