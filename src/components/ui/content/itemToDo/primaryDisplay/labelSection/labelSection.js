import { createContainer } from "../../../../createContainer";
import { createCheckBox } from "./checkbox"
import { createToDoLabel } from "./toDoLabel";

const createLabelSection = (toDo) => {
  const container = createContainer("div",
    createCheckBox(toDo),
    createToDoLabel(toDo));
  container.classList.add("label-section");
  return container;
}

export {
  createLabelSection
}