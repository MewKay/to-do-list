import { createContainer } from "../createContainer";
import { format } from "date-fns";

const createLabel = () => {
  const label = createContainer("label")
  label.setAttribute("for","priority-input");
  label.innerText = "Due Date :";
  return label;
}

const createDateInput = () => {
  const date = createContainer("input");
  const todayDate = new Date();
  date.type = "date";
  date.valueAsDate = todayDate;
  date.min = format(todayDate,"yyyy-MM-dd");
  return date;
}

const createDueDateInput = () => {
  const label = createLabel();
  const date = createDateInput();
  const container = createContainer("div",label,date);
  container.classList.add("form-due-date");
  return container;
}

export {
  createDueDateInput
}