import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";

const createConfirmButton = () => {
  const confirmButton = createContainer("button", createIcon("check"));
  return confirmButton;
}

export {
  createConfirmButton
};