import { createContainer } from "../../../createContainer";

const createCancelButton = () => {
  const noButton = createContainer("button");
  noButton.innerText = "No";
  return noButton;  
}

const addCancelButton = (container) => {
  container.appendChild(createCancelButton());
  return container;
}

export {
  addCancelButton
};