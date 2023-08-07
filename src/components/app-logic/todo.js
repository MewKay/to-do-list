import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { Priority, checkIfPriorityValid } from "../priority";
import { isValid, parseJSON } from "date-fns";

const ToDo = (title = "", dueDate = new Date(), priority = Priority.LOW) => {
  let _description = "";
  let _taskDone = false;
  let _parentProject;
  const NOT_VALID_PRIORITY_VALUE_MESSAGE = "Not a valid priority value.";
  const NOT_VALID_DATE_VALUE_MESSAGE = "Not a valid date.";

  const toggleCompletionStatus = () => {
    _taskDone = !_taskDone;
  }

  const update = (newToDo) => {
    title = newToDo.title;
    _description = newToDo.description;
    priority = newToDo.priority;
    dueDate = newToDo.dueDate;
    
    pubSub.publish(Events.TO_DO_LIST_UPDATE);
  }

  const exportData = () => {
    return {
      title,
      description: _description,
      dueDate,
      priority,
      completionCheck: _taskDone,
      parentProject: _parentProject
    }
  }

  const importData = (toDoData) => {
    title = toDoData.title;
    _description = toDoData.description;
    dueDate = parseJSON(toDoData.dueDate);
    priority = toDoData.priority;
    _taskDone = toDoData.completionCheck;
    _parentProject = toDoData.parentProject;
  }

  return {
    get title() {
      return title;
    },
    set title(value) {
      title = value;
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
      if(!checkIfPriorityValid(value))
        return console.log(NOT_VALID_PRIORITY_VALUE_MESSAGE)
      priority = value;
    },
    get completionCheck() {
      return _taskDone;
    },
    get parentProject() {
      return _parentProject;
    },
    set parentProject(value) {
      _parentProject = value;
    },
    toggleCompletionStatus,
    update,
    exportData,
    importData
  }
}

export {
  ToDo
};