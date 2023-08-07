import { Events } from "../pubsub/eventsName";
import { pubSub } from "../pubsub/pubsub";

const loadLocalStorage = (projectList) => {
  if(localStorage.length <= 0) 
    return;
  projectList.importData(JSON.parse(localStorage.getItem("project_list")));
  pubSub.publish(Events.PROJECT_LIST_UPDATE, projectList.list);
}

export {
  loadLocalStorage
}