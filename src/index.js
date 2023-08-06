import "./components/styles/reset.css";
import "./components/styles/style.css";
import { header } from "./components/ui//header/header";
import { sidebar } from "./components/ui/sidebar/sidebar";
import { content } from "./components/ui/content/content";
import { addDummyContent } from "./dummyContent";
import { pubSub } from "./pubsub/pubsub";
import { Events } from "./pubsub/eventsName";
import { inboxContentData } from "./components/data/inboxContent";
import { projectList } from "./components/app-logic/projectList";

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);

addDummyContent();

pubSub.subscribe(Events.PROJECT_ADDED, projectList.addProject);

pubSub.subscribe(Events.PROJECT_DELETED, projectList.removeProjectWithName);

pubSub.subscribe(Events.TO_DO_DELETED, data => {
  let project = projectList.getProjectWithName(data.projectName);
  project.removeToDoWithTitle(data.toDoTitle);
});


pubSub.publish(Events.CONTENT_UPDATE, inboxContentData);