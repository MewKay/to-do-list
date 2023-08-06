import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { Events } from "../../../../pubsub/eventsName";
import { AddProject } from "./addProject/addProject";
import { createProjectItem } from "./projectItem";

const createProjectsContainer = () => {
  const container = createContainer("div");
  container.id = "projects";
  return container;
}

const renderProjectList = (list) => {
  projects.innerText = "";

  list.forEach( project => {
    if(project.name !== "Inbox") 
      projects.appendChild(createProjectItem(project));
  });

  projects.appendChild(AddProject().container);
}

pubSub.subscribe(Events.PROJECT_LIST_UPDATE, renderProjectList);

const projects = createProjectsContainer();

export {
  projects
};