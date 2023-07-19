const ToDo = (title) => {
  let _description;
  let _dueDate;
  let _priority;
 
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
      return _dueDate;
    },
    set dueDate(value) {
      _dueDate = value;
    },
    get priority() {
      return _priority;
    },
    set priority(value) {
      _priority = value;
    }
  }
}

export {
  ToDo
};