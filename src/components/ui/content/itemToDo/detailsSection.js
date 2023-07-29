import { format } from "date-fns";
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

const createDueDateDisplay = (toDo) => {
  const text = createContainer("p");
  text.innerText = "Due Date :";
  text.classList.add("due-date-prefix");
  
  const dueDateText = createContainer("p");
  dueDateText.innerText = format(toDo.dueDate,"MMMM do");
  dueDateText.classList.add("due-date-suffix");
  
  const container = createContainer("div",text,dueDateText);
  container.classList.add("due-date-display");
  return container; 
}

const createDescriptionDisplay = (toDo) => {
  
  const text = createContainer("p");
  text.innerText = "Description :";
  text.classList.add("description-prefix");
  
  const descriptionText = createContainer("p");
  descriptionText.innerText = toDo.description;
  descriptionText.classList.add("description-content");
  
  const container = createContainer("div",text,descriptionText);
  container.classList.add("description-display");

  if(toDo.description === "") {
    container.innerText = "";
    container.style.height = "0";
  }

  return container; 
}

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