import { createContainer } from "../createContainer";
import { content } from "./content"
import { createItemToDo } from "./itemToDo";

const createTitleContainer = (title) => {
  const titleContainer = createContainer("h1");
  titleContainer.innerText = title;
  titleContainer.classList.add("content-title");
  return titleContainer;
}

const createListContainer = (list) => {
  const listContainer = createContainer("ul");
  listContainer.id = "content-list";

  list.forEach(element => listContainer.appendChild(createItemToDo(element)));

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