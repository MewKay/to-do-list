import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";

const createCancelButton = () => {
  const cancelButton = createContainer("button", createIcon("close"));
  cancelButton.classList.add("btn-cancel");
  return cancelButton;  
}

export {
  createCancelButton
};