import { createContainer } from "../../../../createContainer";
import { createCheckBox } from "./checkbox"
import { createToDoLabel } from "./toDoLabel";

const createLabelSection = (toDo) => {
  const container = createContainer("div",
    createCheckBox(toDo),
    createToDoLabel(toDo.title));
  container.classList.add("label-section");
  return container;
}

export {
  createLabelSection
}