import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";

const createCancelButton = () => {
  const noButton = createContainer("button", createIcon("close"));
  return noButton;  
}

export {
  createCancelButton
};