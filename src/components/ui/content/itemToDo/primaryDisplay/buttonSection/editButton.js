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
    document.body.appendChild(modal.container);
    modal.container.showModal();
    modal.container.addEventListener("close", () => {
      pubSub.publish(Events.TO_DO_UPDATED, {toDoToUpdate: toDo, newToDo: modal.toDo});
      pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
    });
  })
  return editButton;
}

const addEditButton = (container,toDo) => {
  container.appendChild(createEditButton(toDo));
  return container;
}

export {
  addEditButton
};

