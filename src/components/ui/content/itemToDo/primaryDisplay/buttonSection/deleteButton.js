import { Events } from "../../../../../../pubsub/eventsName";
import { pubSub } from "../../../../../../pubsub/pubsub";
import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";

const createDeleteButton = (toDo) => {
  const deleteButton = createContainer("button", createIcon("delete"));
  deleteButton.classList.add("btn-delete-to-do");
  deleteButton.addEventListener("click", (event) => {
    pubSub.publish(Events.TO_DO_DELETED,toDo.title);
    
    const list = document.querySelector("#content-list");
    const item = event.target.closest(".todo-item");

    list.removeChild(item);
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