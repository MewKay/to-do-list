import { createContainer } from "../createContainer"

const createLabel = () => {
  const label = createContainer("label");
  label.setAttribute("for","title-input");
  label.innerText = "Title :";
  return label;
}

const createTextfield = () => {
  const text = createContainer("input");
  text.id = "title-input";
  text.required = true;
  text.type = "text";
  text.name = "title";
  text.maxLength = 30;
  text.size = 25;
  return text;
}

const createTitleInput = () => {
  const text = createTextfield();
  const label = createLabel();
  
  const container = createContainer("div",label,text);
  container.classList.add("form-title");
  return {
    container,
    text
  };
}

export {
  createTitleInput
}