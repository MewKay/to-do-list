import { createContainer } from "../../createContainer"

const inputSection = () => {
  const input = createContainer("input");
  input.type = "text";
  return input;
}

const addProjectInput = () => {
  const container = createContainer("div",inputSection());
  return container;
}

export {
  addProjectInput
}