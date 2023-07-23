import { createContainer } from "../createContainer"

const createToDoTitle = (toDo) => {
  const title = createContainer("p");
  title.innerText = toDo.title;
  return title;
}

const createItemToDo = (toDo) => {
  createToDoTitle(toDo);
}

export {
  createItemToDo
}