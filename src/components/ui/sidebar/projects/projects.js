import { projectList } from "../../../app-logic/projectList";
import { createContainer } from "../../createContainer";

const createProjectsContainer = () => {
  const container = createContainer("div");

  container.id = "projects";

  return container;
}

const projects = createProjectsContainer();

const renderProjectList = () => {
  projects.innerText = "";

  projectList.list.forEach( element => {
    const projectTitle = createContainer("h4");
    projectTitle.innerText = element.name;

    const toDoList = createContainer("div");
    toDoList.classList.add("to-do-list");
    
    const div = createContainer("div", projectTitle, toDoList);
    div.classList.add("project");

    projects.appendChild(div);
  })
}


export {
  projects,
  renderProjectList
};