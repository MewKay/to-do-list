import { Events } from "../../../../../../pubsub/eventsName";
import { pubSub } from "../../../../../../pubsub/pubsub";
import { currentContentData } from "../../../../../data/currentData";
import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";

const createDeleteButton = (toDo) => {
  const deleteButton = createContainer("button", createIcon("delete"));
  deleteButton.classList.add("btn-delete-to-do");
  deleteButton.addEventListener("click", () => {
    pubSub.publish(Events.TO_DO_DELETED, toDo.title);
    pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
  });
  return deleteButton;
}

const addDeleteButton = (container,toDo) => {
  container.appendChild(createDeleteButton(toDo));
  return container;
}

export {
  addDeleteButton
};