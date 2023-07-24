import { Events } from "../../../pubsub/eventsName";
import { pubSub } from "../../../pubsub/pubsub";
import { inboxContentData } from "../../data/inboxContent";

const createInboxText = () => {
  const text = document.createElement("p");
  text.innerText = "Inbox";

  return text;
}

const createInboxContainer = () => {
  const container = document.createElement("div");
  container.id = "inbox";
  container.classList.add("nav-item");
  container.classList.add("selected");

  container.addEventListener("click", () => {
    pubSub.publish(Events.CONTENT_UPDATE, inboxContentData);
  })

  container.appendChild(createInboxText());

  return container;
}

const inbox = createInboxContainer();

export {
  inbox
};