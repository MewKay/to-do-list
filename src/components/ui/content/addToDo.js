import { Events } from "../../../pubsub/eventsName";
import { pubSub } from "../../../pubsub/pubsub";
import { ToDo } from "../../app-logic/todo";
import { currentContentData } from "../../data/currentData";
import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";
import { Modal } from "../toDoForm/toDoForm";

const createAddToDoButton = () => {
  const buttonText = createContainer("p");
  buttonText.innerText = "Add To Do";
  const addToDoContainer = createContainer("button", createIcon("add"), buttonText);
  addToDoContainer.classList.add("btn-add-to-do");

  addToDoContainer.addEventListener("click", () => {
    const modal = Modal(ToDo());
    modal.show();
    modal.container.addEventListener("close", () => {
      addToDo(modal);
    })
  });

  return addToDoContainer;
}

const addToDo = (modal) => {
  if (modal.container.returnValue === "confirmed"){ 
    pubSub.publish(Events.TO_DO_ADDED, modal.toDo);
    pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
  }
}

export {
  createAddToDoButton
};