import { Priority } from "../../priority";
import { createContainer } from "../createContainer";

const createLabel = () => {
  const label = createContainer("label")
  label.setAttribute("for","priority-input");
  label.innerText = "Priority :";
  return label;
}

const createSelection = () => {
  const priorities = [];  
  for(const key in Priority) {
    const option = createContainer("option");
    option.innerText = Priority[key];
    if(key === "LOW") option.selected = true;
    priorities.push(option);
  }
  const select = createContainer("select",...priorities);
  select.id = "priority-input";
  return select;
}

const createPriorityInput = () => {
  const label = createLabel();
  const selection = createSelection();
  const container = createContainer("div",label,selection);
  container.classList.add("form-priority");
  return container;
}

export {
  createPriorityInput
}