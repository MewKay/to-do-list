import { isThisWeek } from "date-fns";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";
import { pubSub } from "../../pubsub/pubsub";
import { Events } from "../../pubsub/eventsName";

const thisWeekContentData = ContentData("This Week",[]);

const thisWeekToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(isThisWeek(toDo.dueDate, { weekStartsOn: 1}))
        listToDo.push(toDo);
    }));
  thisWeekContentData.toDoList = listToDo;
}

pubSub.subscribe(Events.TO_DO_LIST_UPDATE,thisWeekToDoList);
pubSub.subscribe(Events.PROJECT_LIST_UPDATE,thisWeekToDoList);

export {
  thisWeekContentData
}