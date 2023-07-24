import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { Project } from "../app-logic/project";
import { projectList } from "../app-logic/projectList";
import { ToDo } from "../app-logic/todo";
import { Priority } from "../priority";
import { ContentData } from "./contentData";

const inboxProject = Project("Inbox");

const inboxContentData = ContentData(inboxProject.name,[]);

const inboxToDoList = () => {
  const listToDo = [];
  inboxProject.list.forEach( toDo => listToDo.push(toDo));
  inboxContentData.toDoList = listToDo;
}

pubSub.subscribe(Events.TO_DO_LIST_UPDATE,inboxToDoList);

projectList.addProject(inboxProject);
inboxProject.addToDo(ToDo("My default thing to do",new Date(),Priority.LOW));

export {
  inboxContentData,
  inboxProject
}