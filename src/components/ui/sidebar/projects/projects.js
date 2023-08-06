import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { projectContentData } from "../../../data/projectContent";
import { Events } from "../../../../pubsub/eventsName";
import { createIcon } from "../../createIcon";
import { AddProject } from "./addProject";
import { deleteProject } from "./deleteProject";

const createProjectsContainer = () => {
  const container = createContainer("div");

  container.id = "projects";

  return container;
}

const renderProjectList = (list) => {
  projects.innerText = "";

  list.forEach( element => {
    if(element.name !== "Inbox"){
      const projectTitle = createContainer("p");
      projectTitle.innerText = element.name;

      const div = createContainer("div", createIcon("lists"), projectTitle, deleteProject());
      div.classList.add("nav-item");

      div.addEventListener("click", () => {
        pubSub.publish(Events.CONTENT_UPDATE, projectContentData(element));
      })

      projects.appendChild(div);
    }
  });

  const addProject = AddProject();
  projects.appendChild(addProject.container);
}

pubSub.subscribe(Events.PROJECT_LIST_UPDATE, renderProjectList);

const projects = createProjectsContainer();

export {
  projects
};