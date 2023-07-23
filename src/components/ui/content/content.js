import { ToDo } from "../../app-logic/todo";
import { createContainer } from "../createContainer";
import { renderContent } from "./renderContent";

const createContent = () => {
  const container = createContainer("main");
  return container;
}

const content = createContent();

export {
  content
};