import { Priority } from "../priority";
import { projectList } from "../app-logic/projectList";
import { ContentData } from "./contentData";

const importantToDoList = () => {
  let listToDo = [];
  projectList.list.forEach( project => 
    project.list.forEach( toDo => {
      if(toDo.priority === Priority.HIGH)
        list.push(toDo);
    }));
  return listToDo;
}

const importantContentData = ContentData("Important",importantToDoList());

export {
  importantContentData
}