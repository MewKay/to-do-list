import { Priority } from "./priority";

const ToDo = (title,dueDate = "Today", priority = Priority.LOW) => {
  let _description;
  let _taskDone = false;
  const NOT_VALID_PRIORITY_VALUE_MESSAGE = "Not a valid priority value.";
  
  const changeToDoStatus = () => {
    _taskDone = !_taskDone;
  }
  
  const checkIfPriorityValid = (value) => {
    for(let key in Priority) 
      if(Priority[key] === value)
        return true;
    return false;
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
      if(checkIfPriorityValid(value))
        priority = value;
      else return console.log(NOT_VALID_PRIORITY_VALUE_MESSAGE)
    },
    changeToDoStatus
  }
}

export {
  ToDo
};