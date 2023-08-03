import { createCancelButton } from "../buttons/cancelButton";
import { createConfirmButton } from "../buttons/confirmButton"
import { createContainer } from "../createContainer";

const createFormButtons = () => {
  const confirmButton = createConfirmButton();
  confirmButton.type = "submit";
  const cancelButton = createCancelButton();
  cancelButton.type = "reset";
  const container = createContainer("div",confirmButton,cancelButton);
  container.classList.add("form-buttons");
  return {
    container,
    confirmButton,
    cancelButton
  };
}

export {
  createFormButtons
}