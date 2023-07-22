import { createContainer } from "../../createContainer";

const createTextThisWeek = () => {
  const text = createContainer("p");
  
  text.id = "this-week";
  text.innerText = "This Week";

  return text;
}

const createitemThisWeek = () => {
  const item = createContainer("li",createTextThisWeek());

  return item;
}

const itemThisWeek = createitemThisWeek();

export {
  itemThisWeek
};