import { importantContentData } from "../../../data/importantContent";
import { createContainer } from "../../createContainer";
import { pubSub } from "../../../pubsub";

const createTextImportant = () => {
  const text = createContainer("p");

  text.id = "important";
  text.innerText = "Important";

  return text;
}

const createitemImportant = () => {
  const item = createContainer("li",createTextImportant());
  item.classList.add("nav-item");
  
  item.addEventListener("click", () => {
    pubSub.publish("contentUpdated", importantContentData);
  });

  return item;
}

const itemImportant = createitemImportant();

export {
  itemImportant
};