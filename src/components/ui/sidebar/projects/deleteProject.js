import { createContainer } from "../../createContainer"
import { createIcon } from "../../createIcon";

const deleteProject = () => {
  const button = createContainer("button", createIcon("close"));

  return button;
}

export {
  deleteProject
};