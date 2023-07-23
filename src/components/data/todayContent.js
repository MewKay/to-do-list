import { isToday } from "date-fns";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";
import { pubSub } from "../pubsub";

const todayContentData = ContentData("Today",[]);

const todayToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(isToday(toDo.dueDate))
        listToDo.push(toDo);
        console.log(toDo.dueDate);
    }));
  todayContentData.toDoList = listToDo;
}

pubSub.subscribe("projectListUpdated",todayToDoList);

export {
  todayContentData
}