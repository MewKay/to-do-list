import { Project } from "../app-logic/project";
import { projectList } from "../app-logic/projectList";
import { ToDo } from "../app-logic/todo";
import { Priority } from "../priority";
import { ContentData } from "./contentData";

const inboxProject = Project("Inbox");

projectList.addProject(inboxProject);
inboxProject.addToDo(ToDo("My default thing to do",new Date(),Priority.LOW));

const inboxContentData = ContentData(inboxProject.name,inboxProject.list);

export {
  inboxContentData,
  inboxProject
}