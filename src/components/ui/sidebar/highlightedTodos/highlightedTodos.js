import { itemImportant } from "./important";
import { itemThisWeek } from "./thisWeek";
import { itemToday } from "./today";

const createList = () => {
  const list = document.createElement("ul");
  list.id = "list";

  list.appendChild(itemToday);
  list.appendChild(itemThisWeek);
  list.appendChild(itemImportant);

  return list;
}

const createhighlightedTodoContainer = () => {
  const container = document.createElement("div");
  container.id = "highlighted-todos";

  container.appendChild(createList());

  return container;
} 

const highlightedTodos = createhighlightedTodoContainer();

export {
  highlightedTodos
};