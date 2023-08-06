import "./components/styles/reset.css";
import "./components/styles/style.css";
import { header } from "./components/ui//header/header";
import { sidebar } from "./components/ui/sidebar/sidebar";
import { content } from "./components/ui/content/content";
import { pubSub } from "./pubsub/pubsub";
import { Events } from "./pubsub/eventsName";
import { inboxContentData } from "./components/data/inboxContent";
import { subscribeAll } from "./pubSubEventHandler";
import { projectList } from "./components/app-logic/projectList";
import { addDummyContent } from "./dummyContent";

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);

addDummyContent();

subscribeAll();

pubSub.publish(Events.CONTENT_UPDATE, inboxContentData);

pubSub.subscribe(Events.PROJECT_LIST_UPDATE, () => {
  localStorage.setItem("project_list", JSON.stringify(projectList.exportData()));
  console.log("Data saved!!");
  console.log(localStorage.getItem("project_list"));
  console.log(JSON.parse(localStorage.getItem("project_list")));
})