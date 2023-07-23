import { createContainer } from "../../createContainer";
import { pubSub } from "../../../pubsub";
import { projectContentData } from "../../../data/projectContent";

const createProjectsContainer = () => {
  const container = createContainer("div");

  container.id = "projects";

  return container;
}

const renderProjectList = (list) => {
  projects.innerText = "";

  list.forEach( element => {
    const projectTitle = createContainer("p");
    projectTitle.innerText = element.name;

    const div = createContainer("div", projectTitle);
    div.classList.add("project");
    div.classList.add("nav-item");

    div.addEventListener("click", () => {
      pubSub.publish("contentUpdated", projectContentData(element));
    })

    projects.appendChild(div);
  })
}

pubSub.subscribe("projectListUpdated", renderProjectList);

const projects = createProjectsContainer();

export {
  projects
};