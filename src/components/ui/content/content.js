import { Events } from "../../../pubsub/eventsName";
import { pubSub } from "../../../pubsub/pubsub";
import { inboxContentData } from "../../data/inboxContent";
import { createContainer } from "../createContainer";
import { renderContent } from "./renderContent";

const createContent = () => {
  const container = createContainer("main");
  return container;
}

const content = createContent();

pubSub.subscribe(Events.CONTENT_UPDATE,renderContent);

export {
  content
};