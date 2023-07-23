import { createContainer } from "../createContainer";

const createContent = () => {
  const container = createContainer("main");
  return container;
}

const content = createContent();

export {
  content
};