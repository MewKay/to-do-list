import { createContainer } from "../createContainer"

const createTextfield = () => {
  const text = createContainer("input");

  text.setAttribute("for","form-title");

  text.required = true;
  text.type = "text";
  text.name = "title";
  text.maxLength = 100;

  return text;
}

const createLabel = () => {
  const label = createContainer("label");
  label.id = "form-title";
  label.innerText = "Title :";
  return label;
}

const createTitleInput = () => {
  const text = createTextfield();
  const label = createLabel();
  
  const container = createContainer("div",text,label);
  return container;
}

export {
  createTitleInput
}