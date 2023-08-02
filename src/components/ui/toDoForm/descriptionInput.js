import { createContainer } from "../createContainer"

const createLabel = () => {
  const label = createContainer("label");
  label.setAttribute("for","desc-input");
  label.innerText = "Description (Optional) :";
  return label;
}

const createTextArea = () => {
  const textArea = createContainer("textarea");
  textArea.id = "desc-input";
  textArea.name = "description";
  return textArea;
}

const createDescriptionInput = () => {
  const label = createLabel();
  const textArea = createTextArea();
  const container = createContainer("div",label,textArea);
  container.classList.add("form-desc");
  return {
    container,
    textArea
  };
}

export {
  createDescriptionInput
}