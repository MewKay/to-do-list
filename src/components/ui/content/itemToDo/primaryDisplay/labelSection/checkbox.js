import { Events } from "../../../../../../pubsub/eventsName";
import { pubSub } from "../../../../../../pubsub/pubsub";
import { createContainer } from "../../../../createContainer";

const createCheckBox = (toDo) => {
  const checkbox = createContainer("input");
  checkbox.type = "checkbox";
  checkbox.checked = toDo.completionCheck;
  checkbox.addEventListener("change", () => {
    toDo.toggleCompletionStatus();
    pubSub.publish(Events.TO_DO_ITEM_CONTENT_UPDATE);
  });
  return checkbox;
}

export {
  createCheckBox
};