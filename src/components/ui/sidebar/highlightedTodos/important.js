import { importantContentData } from "../../../data/importantContent";
import { createContainer } from "../../createContainer";
import { pubSub } from "../../../../pubsub/pubsub";
import { Events } from "../../../../pubsub/eventsName";
import { createIcon } from "../../createIcon";

const createTextImportant = () => {
  const text = createContainer("p");

  text.id = "important";
  text.innerText = "Important";

  return text;
}

const createitemImportant = () => {
  const item = createContainer("li", createIcon("assignment_late"),createTextImportant());
  item.classList.add("nav-item");
  
  item.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, importantContentData);
  });

  return item;
}

const itemImportant = createitemImportant();

export {
  itemImportant
};