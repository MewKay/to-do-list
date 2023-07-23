import { createContainer } from "../createContainer"

const createToDoTitle = (toDo) => {
  const title = createContainer("p");
  title.innerText = toDo.title;
  return title;
}

const createItemToDo = (toDo) => {
  const item = createContainer("li");
  item.appendChild(createToDoTitle(toDo));
  return item;
}

export {
  createItemToDo
}