import { pubSub } from "../../pubsub";
import { inboxContentData } from "../../data/inboxContent";

const createInboxText = () => {
  const text = document.createElement("p");
  text.innerText = "Inbox";

  text.addEventListener("click", () => {
    pubSub.publish("contentUpdated", inboxContentData);
  })

  return text;
}

const createInboxContainer = () => {
  const container = document.createElement("div");
  container.id = "inbox";

  container.appendChild(createInboxText());

  return container;
}

const inbox = createInboxContainer();

export {
  inbox
};