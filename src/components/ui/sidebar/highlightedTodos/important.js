const createTextImportant = () => {
  const text = document.createElement("p");
  text.id = "important";
  text.innerText = "Important";

  return text;
}

const createitemImportant = () => {
  const item = document.createElement("li");

  item.appendChild(createTextImportant());

  return item;
}

const itemImportant = createitemImportant();

export {
  itemImportant
};