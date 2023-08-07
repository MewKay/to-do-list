import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { Project } from "../app-logic/project";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";

const inboxProject = Project("Inbox");

const inboxContentData = ContentData(inboxProject.name,[]);

const inboxToDoList = () => {
  const listToDo = [];
  inboxProject.list.forEach( toDo => listToDo.push(toDo));
  inboxContentData.toDoList = listToDo;
}

pubSub.subscribe(Events.TO_DO_LIST_UPDATE, inboxToDoList);

projectList.addProject(inboxProject);

export {
  inboxContentData,
  inboxProject
}