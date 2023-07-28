import { createContainer } from "../../../../createContainer";

const createToDoLabel = (title) => {
  const label = createContainer("label");
  label.innerText = title;
  return label;
}

export {
  createToDoLabel
};