const Priority = Object.freeze({
  HIGH : "Important",
  MEDIUM : "Moderate",
  LOW : "Negligible"
});

const checkIfPriorityValid = (value) => {
  for(let key in Priority) 
    if(Priority[key] === value)
      return true;
  return false;
}

export {
  Priority,
  checkIfPriorityValid
};