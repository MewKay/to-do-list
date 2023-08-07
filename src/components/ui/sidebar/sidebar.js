import { createContainer } from "../createContainer";
import { highlightedTodos } from "./highlightedTodos/highlightedTodos";
import { inbox } from "./inbox/inbox";
import { projects } from "./projects/projects";
import { pubSub } from "../../../pubsub/pubsub";
import { addClassSelected } from "./addClassSelected";
import { Events } from "../../../pubsub/eventsName";

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