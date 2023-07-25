import { createContainer } from "../../../createContainer";

const createDetailsButton = () => {
  const detailsButton = createContainer("button");
  detailsButton.innerText = "Details";
  detailsButton.classList.add("btn-details");
  return detailsButton;
}

const addDetailsButton = (container) => {
  container.appendChild(createDetailsButton());
  return container;
}

export {
  addDetailsButton
};