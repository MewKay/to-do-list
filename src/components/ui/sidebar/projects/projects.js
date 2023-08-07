import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { Events } from "../../../../pubsub/eventsName";
import { AddProject } from "./addProject/addProject";
import { createProjectItem } from "./projectItem";
import { projectList } from "../../../app-logic/projectList";

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

const projects = createProjectsContainer();

pubSub.subscribe(Events.PROJECT_LIST_UPDATE, renderProjectList);

export {
  projects
};