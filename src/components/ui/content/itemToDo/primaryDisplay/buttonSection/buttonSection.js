import { createContainer } from "../../../../createContainer"
import { addDeleteButton } from "./deleteButton";
import { addDetailsButton } from "./detailsButton";
import { addEditButton } from "./editButton";

const ButtonSection = (toDo) => {
  const _container = createContainer("div");
  _container.classList.add("btn-section");

  const render = () => {
    _container.innerText = "";
    if(!toDo.completionCheck) {
      addDetailsButton(_container);
      addEditButton(_container,toDo);
      addDeleteButton(_container,toDo);
    }
    else {
      addDetailsButton(_container);
      addDeleteButton(_container,toDo);
    }
  }

  return {
    get container() {
      return _container;
    },
    render
  }
}

export {
  ButtonSection
};