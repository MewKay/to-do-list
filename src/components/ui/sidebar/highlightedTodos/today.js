import { todayContentData } from "../../../data/todayContent";
import { createContainer } from "../../createContainer";
import { pubSub } from "../../../pubsub";

const createTextToday = () => {
  const text = createContainer("p");

  text.id = "today";
  text.innerText = "Today";

  return text;
}

const createitemToday = () => {
  const item = createContainer("li", createTextToday());
  item.classList.add("nav-item");

  item.addEventListener("click", () => {
    pubSub.publish("contentUpdated", todayContentData);
  });

  return item;
}

const itemToday = createitemToday();

export {
  itemToday
};