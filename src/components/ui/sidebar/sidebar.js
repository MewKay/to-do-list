import { createContainer } from "../createContainer";
import { highlightedTodos } from "./highlightedTodos/highlightedTodos";
import { inbox } from "./inbox";
import { projects } from "./projects/projects";

const createSidebar = () => {
  const container = createContainer("div",
    inbox,
    highlightedTodos,
    projects);

  container.id = "sidebar";

  return container;
}

const sidebar = createSidebar();

export {
  sidebar
};