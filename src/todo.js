import { Priority, checkIfPriorityValid } from "./priority";
import { isValid } from "date-fns";

const ToDo = (title, dueDate = new Date(), priority = Priority.LOW) => {
  let _description;
  let _taskDone = false;
  const NOT_VALID_PRIORITY_VALUE_MESSAGE = "Not a valid priority value.";
  const NOT_VALID_DATE_VALUE_MESSAGE = "Not a valid date."; 

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
      if(!isValid(value))
        return console.log(NOT_VALID_DATE_VALUE_MESSAGE);
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