import { createContainer } from "../../../createContainer";

const createConfirmButton = () => {
  const confirmButton = createContainer("button");
  yesButton.innerText = "Yes";
  return confirmButton;
}

const addConfirmButton = (container) => {
  container.appendChild(createConfirmButton());
  return container;
}

export {
  addConfirmButton
};