import { createContainer } from "../createContainer";
import { highlightedTodos } from "./highlightedTodos/highlightedTodos";
import { inbox } from "./inbox";
import { projects } from "./projects/projects";
import { pubSub } from "../../pubsub";
import { addClassSelected } from "./addClassSelected";

const createSidebar = () => {
  const container = createContainer("div",
    inbox,
    highlightedTodos,
    projects);

  container.id = "sidebar";

  return container;
}

const sidebar = createSidebar();

pubSub.subscribe("projectListUpdated", addClassSelected); 

export {
  sidebar
};