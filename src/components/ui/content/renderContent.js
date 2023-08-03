import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";
import { content } from "./content"
import { ItemToDo } from "./itemToDo/itemToDo";

const createAddToDoButton = () => {
  const buttonText = createContainer("p");
  buttonText.innerText = "Add To Do";
  const addToDoContainer = createContainer("button", createIcon("add"), buttonText);
  addToDoContainer.classList.add("btn-add-to-do");

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