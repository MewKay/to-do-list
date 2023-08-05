import { createContainer } from "../../createContainer"
import { addProjectButton } from "./addProjectButton";

const addProjectContainer = () => {
  const container = createContainer("div", addProjectButton());
  return container;
}

export {
  addProjectContainer
};