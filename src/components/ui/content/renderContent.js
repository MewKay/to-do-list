import { createContainer } from "../createContainer";
import { createAddToDoButton } from "./addToDo";
import { content } from "./content"
import { isTitleHighLightedToDos } from "./isTitleHighlightedToDos";
import { ItemToDo } from "./itemToDo/itemToDo";

const createTitleContainer = (title) => {
  const contentTitle = createContainer("h1");

  contentTitle.innerText = title;
  contentTitle.classList.add("content-title");

  const titleContainer = createContainer("div", contentTitle);
  
  if(!isTitleHighLightedToDos(title)) 
    titleContainer.appendChild(createAddToDoButton());

  titleContainer.classList.add("content-head");
  return titleContainer;
}

const createListContainer = (list) => {
  const listContainer = createContainer("ul");
  listContainer.id = "content-list";

  list.forEach(element => listContainer.appendChild(ItemToDo(element).container));

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