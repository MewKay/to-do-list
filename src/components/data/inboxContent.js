import { Project } from "../app-logic/project";
import { projectList } from "../app-logic/projectList";
import { projectContentData } from "./projectContent";

const inboxProject = Project("Inbox");
projectList.addProject(inboxProject);

const inboxContentData = () => projectContentData(projectList.list[0]);

export {
  inboxContentData
}