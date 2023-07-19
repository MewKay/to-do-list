const Project = (name = "Default") => {
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