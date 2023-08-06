import { createContainer } from "../../createContainer"
import { addProjectButton } from "./addProjectButton";
import { AddProjectInput } from "./addProjectInput";

const AddProject = () => {
  const _container = createContainer("div");
  const _button = addProjectButton();
  const _input = AddProjectInput();

  const renderAddProject = (container) => {
    _container.innerText = "";
    _container.appendChild(container);
  }

  _button.addEventListener("click", () => {
    renderAddProject(_input.container);
  });

  renderAddProject(_button);

  return {
    get container() {
      return _container;
    },
    renderAddProject
  };
}


export {
  AddProject
};