import { createCancelButton } from "../../buttons/cancelButton";
import { createConfirmButton } from "../../buttons/confirmButton";
import { createContainer } from "../../createContainer"

const inputSection = () => {
  const input = createContainer("input");
  input.type = "text";
  input.size = "20"
  return input;
}

const buttonSection = () => {
  const confirmButton = createConfirmButton();
  const cancelButton = createCancelButton();

  const container = createContainer("div", confirmButton, cancelButton);
  return container;
}

const addProjectInput = () => {
  const container = createContainer("div", inputSection(), buttonSection());
  return container;
}

export {
  addProjectInput
}