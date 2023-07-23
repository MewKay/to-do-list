import { pubSub } from "../../pubsub";
import { createContainer } from "../createContainer";
import { renderContent } from "./renderContent";

const createContent = () => {
  const container = createContainer("main");
  return container;
}

const content = createContent();

pubSub.subscribe("contentUpdated",renderContent);

export {
  content
};