import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { projectContentData } from "../../../data/projectContent";
import { createContainer } from "../../createContainer";
import { createIcon } from "../../createIcon";
import { deleteProject } from "./deleteProject";

const createProjectTitle = (project) => {
  const projectTitle = createContainer("p");
  projectTitle.innerText = project.name;
  return projectTitle;
}

const createProjectItem = (project) => {
  const container = createContainer("div", 
    createIcon("lists"), 
    createProjectTitle(project), 
    deleteProject());
  container.classList.add("nav-item");
  container.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, projectContentData(project));
  });

  return container;
}

export {
  createProjectItem
}