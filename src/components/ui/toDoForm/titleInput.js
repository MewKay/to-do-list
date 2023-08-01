import { createContainer } from "../createContainer"

const createTextfield = () => {
  const text = createContainer("input");
  
  text.id = "title-input";
  text.required = true;
  text.type = "text";
  text.name = "title";
  text.maxLength = 100;
  
  return text;
}

const createLabel = () => {
  const label = createContainer("label");
  label.setAttribute("for","title-input");
  label.innerText = "Title :";
  return label;
}

const createTitleInput = () => {
  const text = createTextfield();
  const label = createLabel();
  
  const container = createContainer("div",label,text);
  container.classList.add("form-title");
  return container;
}

export {
  createTitleInput
}