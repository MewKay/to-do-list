import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { Project } from "../../../app-logic/project";
import { createContainer } from "../../createContainer"
import { addProjectButton } from "./addProjectButton";
import { AddProjectInput } from "./addProjectInput";

const AddProject = () => {
  const _container = createContainer("div");
  const _button = addProjectButton();
  const _input = AddProjectInput();

  _container.classList.add("add-project-container");

  const renderAddProject = (container) => {
    _container.innerText = "";
    _container.appendChild(container);
  }

  _button.addEventListener("click", () => {
    renderAddProject(_input.container);
  });

  _input.container.addEventListener("submit", (event) => {
    event.preventDefault();
    pubSub.publish(Events.PROJECT_ADDED, Project(_input.text.value));
  })

  _input.cancelButton.addEventListener("click", () => {
    renderAddProject(_button);
  })

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