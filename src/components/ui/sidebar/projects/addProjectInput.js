import { createCancelButton } from "../../buttons/cancelButton";
import { createConfirmButton } from "../../buttons/confirmButton";
import { createContainer } from "../../createContainer"

const inputSection = () => {
  const input = createContainer("input");
  input.type = "text";
  input.size = "20"
  return input;
}

const ButtonSection = () => {
  const confirmButton = createConfirmButton();
  const cancelButton = createCancelButton();

  const container = createContainer("div", confirmButton, cancelButton);
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
    }
  };
}

export {
  AddProjectInput
}