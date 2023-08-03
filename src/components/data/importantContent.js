import { Priority } from "../priority";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";
import { pubSub } from "../../pubsub/pubsub";
import { Events } from "../../pubsub/eventsName";

const importantContentData = ContentData("Important",[]);

const importantToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => {
    project.list.forEach( toDo => {
      if(toDo.priority === Priority.HIGH)
        listToDo.push(toDo);
      })
    });
  importantContentData.toDoList = listToDo;
}

pubSub.subscribe(Events.TO_DO_LIST_UPDATE,importantToDoList);
pubSub.subscribe(Events.PROJECT_LIST_UPDATE,importantToDoList);

export {
  importantContentData
}