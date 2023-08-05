import { createContainer } from "../../createContainer"
import { addProjectButton } from "./addProjectButton";

const AddProject = () => {
  const _container = createContainer("div");

  const renderAddProject = (container) => {
    _container.innerText = "";
    _container.appendChild(container);
  }

  renderAddProject(addProjectButton());

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