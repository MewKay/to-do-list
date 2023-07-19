const ToDo = (title,dueDate = "Today",priority = "Low") => {
  let _description;
  let _taskDone = false;
  
  const changeToDoStatus = () => {
    _taskDone = !_taskDone;
  }

  return {
    get title() {
      return title;
    },
    get description() {
      return _description;
    },
    set description(value) {
      _description = value;
    },
    get dueDate() {
      return dueDate;
    },
    set dueDate(value) {
      dueDate = value;
    },
    get priority() {
      return priority;
    },
    set priority(value) {
      priority = value;
    },
    changeToDoStatus
  }
}

export {
  ToDo
};