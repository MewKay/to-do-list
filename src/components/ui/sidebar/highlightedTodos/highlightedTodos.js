import { createContainer } from "../../createContainer";
import { itemImportant } from "./important";
import { itemThisWeek } from "./thisWeek";
import { itemToday } from "./today";

const createList = () => {
  const list = createContainer("ul",
    itemToday,
    itemThisWeek,
    itemImportant);
    
  list.id = "list";
  
  return list;
}

const createhighlightedTodoContainer = () => {
  const container = createContainer("div", createList());

  container.id = "highlighted-todos";
  
  return container;
} 

const highlightedTodos = createhighlightedTodoContainer();

export {
  highlightedTodos
};