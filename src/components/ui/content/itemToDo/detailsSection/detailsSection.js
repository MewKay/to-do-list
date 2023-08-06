import { createContainer } from "../../../createContainer"
import { createDescriptionDisplay } from "./descriptionDisplay";
import { createDueDateDisplay } from "./duedateDisplay";
import { createPriorityDisplay } from "./priorityDisplay";

const createDetailsSection = (toDo) => {
  const container = createContainer("div",
    createPriorityDisplay(toDo),
    createDueDateDisplay(toDo),
    createDescriptionDisplay(toDo));
    container.classList.add("details");
    container.classList.add("hidden");
  return container;
}

export {
  createDetailsSection
};