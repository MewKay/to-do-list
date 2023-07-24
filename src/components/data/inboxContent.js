import { addDays, addWeeks } from "date-fns";
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
inboxProject.addToDo(ToDo("The seconde thing I have to do",addWeeks(new Date(),2),Priority.MEDIUM));
inboxProject.addToDo(ToDo("Here's my thing to do",addDays(new Date(),10),Priority.HIGH));

export {
  inboxContentData,
  inboxProject
}