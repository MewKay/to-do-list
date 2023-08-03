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
      updateToDo(toDo,modal.toDo);
      pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
    });
  })
  return editButton;
}

const updateToDo = (initialToDo, newToDo) => {
  initialToDo.title = newToDo.title;
  initialToDo.description = newToDo.description;
  initialToDo.priority = newToDo.priority;
  initialToDo.dueDate = newToDo.dueDate;
  
  pubSub.publish(Events.TO_DO_LIST_UPDATE);
}

const addEditButton = (container,toDo) => {
  container.appendChild(createEditButton(toDo));
  return container;
}

export {
  addEditButton
};

