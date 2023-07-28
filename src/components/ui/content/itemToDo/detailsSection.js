import { Priority } from "../../../priority";
import { createContainer } from "../../createContainer"

const createPriorityDisplay = (toDo) => {
  const text = createContainer("p");
  text.innerText = "Priority :";
  text.classList.add("priority-prefix");

  const priorityText = createContainer("p");
  priorityText.innerText = toDo.priority;
  priorityText.classList.add("priority-suffix");

  switch(priorityText.innerText) {
    case Priority.HIGH:
      priorityText.style.color = "red";
      break;
    case Priority.MEDIUM:
      priorityText.style.color = "orange";
      break;
    case Priority.LOW:
      priorityText.style.color = "lightblue";
      break;
  }
  
  const container = createContainer("div",text,priorityText);
  container.classList.add("priority-display");
  return container;
}


const createDetailsSection = (toDo) => {
  const container = createContainer("div",
    createPriorityDisplay(toDo));
  container.classList.add("details");
  return container;
}

export {
  createDetailsSection
}