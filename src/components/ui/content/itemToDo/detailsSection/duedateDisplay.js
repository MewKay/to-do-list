import { format } from "date-fns";
import { createContainer } from "../../../createContainer";

const createDueDateDisplay = (toDo) => {
  const text = createContainer("p");
  text.innerText = "Due Date :";
  text.classList.add("due-date-prefix");
  
  const dueDateText = createContainer("p");
  dueDateText.innerText = format(toDo.dueDate,"EEEE, MMMM do");
  dueDateText.classList.add("due-date-suffix");
  
  const container = createContainer("div",text,dueDateText);
  container.classList.add("due-date-display");
  return container; 
}

export {
  createDueDateDisplay
};