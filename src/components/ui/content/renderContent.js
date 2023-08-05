import { Events } from "../../../pubsub/eventsName";
import { pubSub } from "../../../pubsub/pubsub";
import { projectList } from "../../app-logic/projectList";
import { ToDo } from "../../app-logic/todo";
import { currentContentData } from "../../data/currentData";
import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";
import { Modal } from "../toDoForm/toDoForm";
import { content } from "./content"
import { ItemToDo } from "./itemToDo/itemToDo";

const createAddToDoButton = () => {
  const buttonText = createContainer("p");
  buttonText.innerText = "Add To Do";
  const addToDoContainer = createContainer("button", createIcon("add"), buttonText);
  addToDoContainer.classList.add("btn-add-to-do");
  addToDoContainer.addEventListener("click", () => {
    const modal = Modal(ToDo());
    document.body.appendChild(modal.container);
    modal.container.showModal();
    modal.container.addEventListener("close", () => {
    if (modal.container.returnValue === "confirmed"){ 
      let project = projectList.getProjectWithName(currentContentData.title);
      project.addToDo(modal.toDo);
      pubSub.publish(Events.CONTENT_UPDATE, currentContentData);
    }})
  }) 
  return addToDoContainer;
}

const createTitleContainer = (title) => {
  const contentTitle = createContainer("h1");

  contentTitle.innerText = title;
  contentTitle.classList.add("content-title");

  const titleContainer = createContainer("div", contentTitle);
  
  if( title !== "Today" &&
    title !== "This Week" &&
    title !== "Important") {
    const addButton = createAddToDoButton();
    titleContainer.appendChild(addButton);
  }

  titleContainer.classList.add("content-head");
  return titleContainer;
}

const createListContainer = (list) => {
  const listContainer = createContainer("ul");
  listContainer.id = "content-list";

  list.forEach(element => listContainer.appendChild(ItemToDo(element).item));

  return listContainer;
}

const renderContent = (contentData) => {
  content.innerText = "";
  content.appendChild(createTitleContainer(contentData.title));
  content.appendChild(createListContainer(contentData.toDoList));
}

export {
  renderContent
};