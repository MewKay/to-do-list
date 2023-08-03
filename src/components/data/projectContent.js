import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { ContentData } from "./contentData";

const projectContentData = (project) => {
  const contentData = ContentData(project.name,[]);

  const updateProjectList = () => {
    const listToDo = [];
    project.list.forEach( toDo => listToDo.push(toDo) );
    contentData.toDoList = listToDo;
  }

  updateProjectList();

  pubSub.subscribe(Events.TO_DO_LIST_UPDATE, updateProjectList);

  return contentData;
}

export {
  projectContentData
}