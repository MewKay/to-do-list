import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";

let currentContentData;

const getCurrentContentData = (contentData) => {
  currentContentData = contentData;
  console.log(currentContentData.title);
};

pubSub.subscribe(Events.CONTENT_UPDATE, getCurrentContentData);

export {
  currentContentData
}