import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { Project } from "./project";
import { ToDo } from "./todo";

const createProjectList = () => {
  let _list = [];
  
  const addProject = (...Project) => {
    _list.push(...Project);
    pubSub.publish(Events.PROJECT_LIST_UPDATE,_list);
  }

  const removeProjectWithName = (...ProjectName) => {
    ProjectName.forEach( name => {
      _list = _list.filter( project => project.name !== name);
    });
    pubSub.publish(Events.PROJECT_LIST_UPDATE,_list);
  } 

  const getProjectWithName = (ProjectName) => {
    let projectToFind;
    _list.forEach( project => {
      if(project.name === ProjectName) 
        projectToFind = project;
    });
    return projectToFind;
  }

  const exportData = () => {
    let listToExport = [];
    _list.forEach( project => listToExport.push(project.exportData()) );
    return listToExport;
  }

  return {
    get list() {
      return _list;
    },
    set list(value) {
      _list = value;
    },
    addProject,
    removeProjectWithName,
    getProjectWithName,
    exportData
  };
}

const projectList = createProjectList();

export {
  projectList
};