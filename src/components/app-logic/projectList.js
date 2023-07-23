import { pubSub } from "../pubsub";

const createProjectList = () => {
  let _list = [];
  
  const addProject = (...Project) => {
    _list.push(...Project);
    pubSub.publish("projectListUpdated",_list);
  }

  const removeProjectWithName = (...ProjectName) => {
    ProjectName.forEach( name => {
      _list = _list.filter( project => project.name !== name);
    });
  } 

  return {
    get list() {
      return _list;
    },
    addProject,
    removeProjectWithName
  };
}

const projectList = createProjectList();

export {
  projectList
};