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

projectList.list.forEach( project => {
  pubSub.subscribe(Events.TO_DO_DELETED, project.removeToDoWithTitle);
});

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);

addDummyContent();

pubSub.publish(Events.CONTENT_UPDATE, inboxContentData);