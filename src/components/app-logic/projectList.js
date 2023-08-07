import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { Project } from "./project";

const createProjectList = () => {
  let _list = [];
  
  const addProject = (project) => {
    if(isProjectIncluded(project.name)) {
      console.log(isProjectIncluded(project.name));
      alert("This project name is already used. Please try again.");
      return;
    }
    _list.push(project);
    pubSub.publish(Events.PROJECT_LIST_UPDATE,_list);
  }

  const removeProjectWithName = (...ProjectName) => {
    ProjectName.forEach( name => {
      _list = _list.filter( project => project.name !== name);
    });
    pubSub.publish(Events.PROJECT_LIST_UPDATE,_list);
  } 

  const getProjectWithName = (ProjectName) => {
    let projectToFind = null;
    _list.forEach( project => {
      if(project.name === ProjectName) 
        projectToFind = project;
    });
    return projectToFind;
  }

  const isProjectIncluded = (ProjectName) => {
    if(!getProjectWithName(ProjectName))
      return false;
    return true;
  } 

  const exportData = () => {
    let listToExport = [];
    _list.forEach( project => listToExport.push(project.exportData()) );
    return listToExport;
  }

  const importData = (listToImport) => {
    _list = [];
    listToImport.forEach( projectData => {
      const project = Project();
      project.importData(projectData);
      _list.push(project);
    });
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
    exportData,
    importData
  };
}

const projectList = createProjectList();

export {
  projectList
};