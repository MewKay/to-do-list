import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";

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

  return {
    get list() {
      return _list;
    },
    addProject,
    removeProjectWithName,
    getProjectWithName
  };
}

const projectList = createProjectList();

export {
  projectList
};