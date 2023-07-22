import { highlightedTodos } from "./highlightedTodos/highlightedTodos";
import { inbox } from "./inbox";
import { projects } from "./projects/projects";

const createSidebar = () => {
  const container = document.createElement("div");
  container.id = "sidebar";

  container.appendChild(inbox);
  container.appendChild(highlightedTodos);
  container.appendChild(projects);

  return container;
}

const sidebar = createSidebar();

export {
  sidebar
};