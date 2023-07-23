import { Project } from "../app-logic/project";
import { ContentData } from "./contentData";

const inboxProject = Project("Inbox");
const inboxContentData = ContentData(inboxProject.name,inboxProject.list);

export {
  inboxContentData
}