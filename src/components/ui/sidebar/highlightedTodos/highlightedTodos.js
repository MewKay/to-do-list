const createhighlightedTodoContainer = () => {
  const container = docuement.createElement("div");
  container.id = "highlighted-todos";

  return container;
} 

const highlightedTodos = createhighlightedTodoContainer();

export {
  highlightedTodos
};