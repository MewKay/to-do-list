const createList = () => {
  const list = document.createElement("ul");
  list.id = "list";

  return list;
}

const createhighlightedTodoContainer = () => {
  const container = document.createElement("div");
  container.id = "highlighted-todos";

  container.appendChild(createList());

  return container;
} 

const highlightedTodos = createhighlightedTodoContainer();

export {
  highlightedTodos
};