const Project = () => {
  let _toDoList = [];

  const addToDo = (...toDo) => {
    _toDoList.push(...toDo);
  }

  const removeToDoWithTitle = (...toDoTitles) => {
    toDoTitles.forEach(toDoTitleToRemove => {
      _toDoList = _toDoList.filter(toDo => toDo.title !== toDoTitleToRemove);
    });
  }

  return {
    get list() {
      return _toDoList;
    },
    addToDo,
    removeToDoWithTitle,
  };
}

export {
  Project
};