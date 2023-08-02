import { createCancelButton } from "../buttons/cancelButton";
import { createConfirmButton } from "../buttons/confirmButton"
import { createContainer } from "../createContainer";

const createFormButtons = () => {
  const confirm = createConfirmButton();
  const cancel = createCancelButton();
  const container = createContainer("div",confirm,cancel);
  container.classList.add("form-buttons");
  return container;
}

export {
  createFormButtons
}