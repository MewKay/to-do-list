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

const defaultToDo = ToDo("My default thing to do",new Date(),Priority.LOW);
defaultToDo.description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse consectetur illo excepturi minus, distinctio voluptate delectus dignissimos atque, nemo possimus, eligendi tenetur temporibus molestiae. Sequi magni adipisci doloribus nobis vitae!";
inboxProject.addToDo(defaultToDo);
inboxProject.addToDo(ToDo("The second thing I have to do",addWeeks(new Date(),2),Priority.MEDIUM));
inboxProject.addToDo(ToDo("Here's my thing to do",addDays(new Date(),10),Priority.HIGH));

export {
  inboxContentData,
  inboxProject
}