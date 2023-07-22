import { createContainer } from "../../createContainer";

const createTextToday = () => {
  const text = createContainer("p");

  text.id = "today";
  text.innerText = "Today";

  return text;
}

const createitemToday = () => {
  const item = createContainer("li", createTextToday());

  return item;
}

const itemToday = createitemToday();

export {
  itemToday
};