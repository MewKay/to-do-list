import { createContainer } from "../../createContainer";

const createTextImportant = () => {
  const text = createContainer("p");

  text.id = "important";
  text.innerText = "Important";

  return text;
}

const createitemImportant = () => {
  const item = createContainer("li",createTextImportant());
  item.classList.add("nav-item");

  return item;
}

const itemImportant = createitemImportant();

export {
  itemImportant
};