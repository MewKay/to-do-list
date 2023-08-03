import { Events } from "../../pubsub/eventsName";
import { pubSub } from "../../pubsub/pubsub";
import { ContentData } from "./contentData";

const projectContentData = (project) => {
  const title = project.name;
  const list = project.list;
  const contentData = ContentData(title,list);

  return contentData;
}

export {
  projectContentData
}