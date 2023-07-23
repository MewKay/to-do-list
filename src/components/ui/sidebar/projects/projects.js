import { createContainer } from "../../createContainer";
import { pubSub } from "../../../pubsub";

const createProjectsContainer = () => {
  const container = createContainer("div");

  container.id = "projects";

  return container;
}

const renderProjectList = (list) => {
  projects.innerText = "";

  list.forEach( element => {
    const projectTitle = createContainer("h4");
    projectTitle.innerText = element.name;

    const toDoList = createContainer("div");
    toDoList.classList.add("to-do-list");
    
    const div = createContainer("div", projectTitle, toDoList);
    div.classList.add("project");

    projects.appendChild(div);
  })
}

pubSub.subscribe("projectListUpdated", renderProjectList);

const projects = createProjectsContainer();

export {
  projects
};