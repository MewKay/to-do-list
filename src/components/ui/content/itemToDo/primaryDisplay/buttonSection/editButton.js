import { Events } from "../../../../../../pubsub/eventsName";
import { pubSub } from "../../../../../../pubsub/pubsub";
import { currentContentData } from "../../../../../data/currentData";
import { createContainer } from "../../../../createContainer";
import { createIcon } from "../../../../createIcon";
import { Modal } from "../../../../toDoForm/toDoForm";

const createEditButton = (toDo) => {
  const editButton = createContainer("button", createIcon("edit"));
  editButton.classList.add("btn-edit");
  editButton.addEventListener("click", () => {
    const modal = Modal(toDo);
    modal.show();
    modal.container.addEventListener("close", () => {
      updateToDo(toDo, modal.toDo);
    });
  });
  return editButton;
}

const updateToDo = (oldToDo, newToDo) => {
  pubSub.publish(Events.TO_DO_UPDATED, {toDoToUpdate: oldToDo, newToDo: newToDo});
  pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
}

const addEditButton = (container,toDo) => {
  container.appendChild(createEditButton(toDo));
  return container;
}

export {
  addEditButton
};

