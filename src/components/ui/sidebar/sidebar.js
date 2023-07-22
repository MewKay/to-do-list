import { highlightedTodos } from "./highlightedTodos/highlightedTodos";
import { inbox } from "./inbox";

const createSidebar = () => {
  const container = document.createElement("div");
  container.id = "sidebar";

  container.appendChild(inbox);
  container.appendChild(highlightedTodos);
  return container;
}

const sidebar = createSidebar();

export {
  sidebar
};