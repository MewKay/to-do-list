const createTextToday = () => {
  const text = document.createElement("p");
  text.id = "today";
  text.innerText = "Today";

  return text;
}

const createitemToday = () => {
  const item = document.createElement("li");

  item.appendChild(createTextToday());

  return item;
}

const itemToday = createitemToday();

export {
  itemToday
};