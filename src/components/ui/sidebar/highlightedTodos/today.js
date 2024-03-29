import { todayContentData } from "../../../data/todayContent";
import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { Events } from "../../../../pubsub/eventsName";
import { createIcon } from "../../createIcon"

const createTextToday = () => {
  const text = createContainer("p");

  text.id = "today";
  text.innerText = "Today";

  return text;
}

const createitemToday = () => {
  const item = createContainer("li", createIcon("today") ,createTextToday());
  item.classList.add("nav-item");

  item.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, todayContentData);
  });

  return item;
}

const itemToday = createitemToday();

export {
  itemToday
};