const ToDo = (title,dueDate = "Today",priority = "Low") => {
  let _description;
 
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
    }
  }
}

export {
  ToDo
};