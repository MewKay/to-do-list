const createTextThisWeek = () => {
  const text = document.createElement("p");
  text.id = "this-week";
  text.innerText = "This Week";

  return text;
}

const createitemThisWeek = () => {
  const item = document.createElement("li");
  
  item.appendChild(createTextThisWeek());

  return item;
}

const itemThisWeek = createitemThisWeek();

export {
  itemThisWeek
};