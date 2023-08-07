import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { ToDo } from "./todo";

const Project = (name = "Default") => {
  let _toDoList = [];

  const addToDo = (...toDos) => {
    toDos.forEach( toDo => {
      if(_toDoList.includes(toDo)) 
        return alert("A task with the same name has already been added.");
      toDo.parentProject = name;
      _toDoList.push(toDo);
    });
    pubSub.publish(Events.TO_DO_LIST_UPDATE,_toDoList);
  }
  
  const removeToDoWithTitle = (...toDoTitles) => {
    toDoTitles.forEach(toDoTitleToRemove => {
      _toDoList = _toDoList.filter(toDo => toDo.title !== toDoTitleToRemove);
    });
    pubSub.publish(Events.TO_DO_LIST_UPDATE,_toDoList);
  }

  const exportData = () => {
    let list = [];

    _toDoList.forEach( toDo => list.push(toDo.exportData()));

    return {
      name,
      list 
    }
  }

  const importData = (projectData) => {
    name = projectData.name;
    _toDoList = [];
    projectData.list.forEach( toDoData => {
      const toDo = ToDo();
      toDo.importData(toDoData);
      _toDoList.push(toDo);
    });
  }

  return {
    get list() {
      return _toDoList;
    },
    get name() {
      return name;
    },
    addToDo,
    removeToDoWithTitle,
    exportData,
    importData
  };
}

export {
  Project
};