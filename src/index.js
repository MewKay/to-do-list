import "./components/styles/reset.css";
import "./components/styles/style.css";
import { header } from "./components/ui//header/header";
import { sidebar } from "./components/ui/sidebar/sidebar";
import { content } from "./components/ui/content/content";
import { pubSub } from "./pubsub/pubsub";
import { Events } from "./pubsub/eventsName";
import { inboxContentData } from "./components/data/inboxContent";
import { subscribeCRUD, subscribeSaveToLocalStorage } from "./pubSubEventHandler";
import { projectList } from "./components/app-logic/projectList";

document.addEventListener("DOMContentLoaded", () => {
  projectList.importData(JSON.parse(localStorage.getItem("project_list")));
  pubSub.publish(Events.PROJECT_LIST_UPDATE, projectList.list);
  pubSub.publish(Events.CONTENT_UPDATE, inboxContentData);
})

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);

subscribeCRUD();
subscribeSaveToLocalStorage();