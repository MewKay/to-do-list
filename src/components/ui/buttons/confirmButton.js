import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";

const createConfirmButton = () => {
  const confirmButton = createContainer("button", createIcon("check"));
  confirmButton.classList.add("btn-confirm");
  return confirmButton;
}

export {
  createConfirmButton
};