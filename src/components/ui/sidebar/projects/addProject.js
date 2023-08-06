import { createContainer } from "../../createContainer"
import { addProjectButton } from "./addProjectButton";
import { addProjectInput } from "./addProjectInput";

const AddProject = () => {
  const _container = createContainer("div");
  const _button = addProjectButton();
  const _input = addProjectInput();

  const renderAddProject = (container) => {
    _container.innerText = "";
    _container.appendChild(container);
  }

  _button.addEventListener("click", () => {
    renderAddProject(_input);
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