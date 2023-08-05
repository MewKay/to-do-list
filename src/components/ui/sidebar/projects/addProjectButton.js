import { createContainer } from "../../createContainer"
import { createIcon } from "../../createIcon";

const addProjectText = () => {
  const text = createContainer("p");
  text.innerText = "Add Project";
  return text;
}

const addProjectButton = () => {
  const button = createContainer("button", createIcon("add"), addProjectText());
  button.classList.add("btn-add-project");
  return button;
}

export {
  addProjectButton
};