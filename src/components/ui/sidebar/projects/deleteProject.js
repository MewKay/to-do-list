import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { createContainer } from "../../createContainer"
import { createIcon } from "../../createIcon";

const deleteProject = () => {
  const button = createContainer("button", createIcon("close"));
  button.classList.add("btn-delete");

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteClosestProjectToButton(button);
    returnContentToInbox();
  });

  return button;
}

const deleteClosestProjectToButton = (button) => {
  const projectNameToDelete = button.closest(".nav-item").children[1].innerText;
  pubSub.publish(Events.PROJECT_DELETED, projectNameToDelete);
}

const returnContentToInbox = () => {
  const inboxElement = document.querySelector("#inbox");
  inboxElement.dispatchEvent(new Event("click"));
}

export {
  deleteProject
};