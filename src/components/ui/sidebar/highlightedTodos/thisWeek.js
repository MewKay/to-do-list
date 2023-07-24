import { thisWeekContentData } from "../../../data/thisweekContent";
import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { Events } from "../../../../pubsub/eventsName";

const createTextThisWeek = () => {
  const text = createContainer("p");
  
  text.id = "this-week";
  text.innerText = "This Week";

  return text;
}

const createitemThisWeek = () => {
  const item = createContainer("li",createTextThisWeek());
  item.classList.add("nav-item");

  item.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, thisWeekContentData);
  });
  
  return item;
}

const itemThisWeek = createitemThisWeek();

export {
  itemThisWeek
};