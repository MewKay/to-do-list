import { isThisWeek } from "date-fns";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";

const thisWeekToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(isThisWeek(toDo.dueDate))
        list.push(toDo);
    }));
  return listToDo;
}

const thisWeekContentData = ContentData("This Week",thisWeekToDoList());

export {
  thisWeekContentData
}