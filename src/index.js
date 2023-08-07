import "./components/styles/reset.css";
import "./components/styles/style.css";
import { header } from "./components/ui//header/header";
import { sidebar } from "./components/ui/sidebar/sidebar";
import { content } from "./components/ui/content/content";
import { inboxContentData } from "./components/data/inboxContent";
import { subscribeCRUD, subscribeSaveToLocalStorage } from "./pubSubEventHandler";
import { projectList } from "./components/app-logic/projectList";
import { loadLocalStorage } from "./localStorage/loadLocalStorage";
import { pubSub } from "./pubsub/pubsub";
import { Events } from "./pubsub/eventsName";
import { addClassSelected } from "./components/ui/sidebar/addClassSelected";

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);

loadLocalStorage(projectList);
subscribeCRUD();
subscribeSaveToLocalStorage();

addClassSelected();

pubSub.publish(Events.CONTENT_UPDATE, inboxContentData());