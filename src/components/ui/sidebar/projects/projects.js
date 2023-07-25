import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { projectContentData } from "../../../data/projectContent";
import { inbox } from "../inbox";
import { Events } from "../../../../pubsub/eventsName";
import { createIcon } from "../../createIcon";

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

      const div = createContainer("div", createIcon("lists"), projectTitle);
      div.classList.add("nav-item");

      div.addEventListener("click", () => {
        pubSub.publish(Events.CONTENT_UPDATE, projectContentData(element));
      })

      projects.appendChild(div);
    }
  })
}

pubSub.subscribe(Events.PROJECT_LIST_UPDATE, renderProjectList);

const projects = createProjectsContainer();

export {
  projects
};