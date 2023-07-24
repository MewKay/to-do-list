import { isToday } from "date-fns";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";
import { pubSub } from "../../pubsub/pubsub";
import { Events } from "../../pubsub/eventsName";

const todayContentData = ContentData("Today",[]);

const todayToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(isToday(toDo.dueDate))
        listToDo.push(toDo);
    }));
  todayContentData.toDoList = listToDo;
}

pubSub.subscribe(Events.PROJECT_LIST_UPDATE,todayToDoList);

export {
  todayContentData
}