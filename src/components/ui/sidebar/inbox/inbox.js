import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { inboxContentData } from "../../../data/inboxContent";
import { createContainer } from "../../createContainer";
import { createIcon } from "../../createIcon"

const createInboxText = () => {
  const text = document.createElement("p");
  text.innerText = "Inbox";

  return text;
}

const createInboxContainer = () => {
  const container = createContainer("div", createIcon("inbox"), createInboxText());

  container.id = "inbox";
  container.classList.add("nav-item");
  container.classList.add("selected");
  
  container.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, inboxContentData());
  })

  return container;
}

const inbox = createInboxContainer();

export {
  inbox
};