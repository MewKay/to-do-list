import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";

const Project = (name = "Default") => {
  let _toDoList = [];

  const addToDo = (...toDo) => {
    _toDoList.push(...toDo);
    pubSub.publish(Events.TO_DO_LIST_UPDATE,_toDoList);
  }
  
  const removeToDoWithTitle = (...toDoTitles) => {
    toDoTitles.forEach(toDoTitleToRemove => {
      _toDoList = _toDoList.filter(toDo => toDo.title !== toDoTitleToRemove);
    });
    pubSub.publish(Events.TO_DO_LIST_UPDATE,_toDoList);
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
  };
}

export {
  Project
};