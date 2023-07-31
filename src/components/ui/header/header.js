import { createContainer } from "../createContainer";
import { createIcon } from "../createIcon";

const createAppTitle = () => {
  const appTitle = document.createElement("h1");
  appTitle.innerText = "My To-do list";
  return appTitle;
}

const createHeader = () => {
  const container = createContainer("header", createIcon("done_all"), createAppTitle());

  return container;
}

const header = createHeader();

export {
  header
};