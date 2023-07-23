import { isToday } from "date-fns";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";

const todayToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(isToday(toDo.dueDate))
        list.push(toDo);
    }));
  return listToDo;
}

const todayContentData = ContentData("Today",todayToDoList());

export {
  todayContentData
}