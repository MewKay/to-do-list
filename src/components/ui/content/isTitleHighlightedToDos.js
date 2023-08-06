const isTitleHighLightedToDos = (title) => {
  return (
    title === "Today" ||
    title === "This Week" ||
    title === "Important"
  );
}

export {
  isTitleHighLightedToDos
}