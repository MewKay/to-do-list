import { createContainer } from "../../../createContainer";
import { createIcon } from "../../../createIcon";

const createDetailsButton = () => {
  const detailsButton = createContainer("button", createIcon("description"));
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