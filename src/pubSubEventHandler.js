import { pubSub } from "./pubsub/pubsub";
import { Events } from "./pubsub/eventsName";
import { projectList } from "./components/app-logic/projectList";
import { currentContentData } from "./components/data/currentData";
import { saveToLocalStorage } from "./localStorage/saveToLocalStorage";

const subscribeCRUD = () => {
  pubSub.subscribe(Events.PROJECT_ADDED, projectList.addProject);

  pubSub.subscribe(Events.PROJECT_DELETED, projectList.removeProjectWithName);

  pubSub.subscribe(Events.TO_DO_DELETED, data => {
    let project = projectList.getProjectWithName(data.projectName);
    project.removeToDoWithTitle(data.toDoTitle);
  });

  pubSub.subscribe(Events.TO_DO_ADDED, (data) => {
    let project = projectList.getProjectWithName(currentContentData.title);
    project.addToDo(data);
  });

  pubSub.subscribe(Events.TO_DO_UPDATED, (data) => {
    data.toDoToUpdate.update(data.newToDo);
  });
}

const subscribeSaveToLocalStorage = () => {
  pubSub.subscribe(Events.PROJECT_LIST_UPDATE, saveToLocalStorage);
  pubSub.subscribe(Events.TO_DO_LIST_UPDATE, saveToLocalStorage);
  pubSub.subscribe(Events.TO_DO_UPDATED, saveToLocalStorage);
}

export {
  subscribeCRUD,
  subscribeSaveToLocalStorage
}