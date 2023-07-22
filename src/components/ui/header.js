import { createContainer } from "./createContainer";

const createAppTitle = () => {
  const appTitle = document.createElement("h1");
  appTitle.innerText = "My To-do list";
  return appTitle;
}

const createHeader = () => {
  const container = createContainer("header", createAppTitle());

  return container;
}

const header = createHeader();

export {
  header
};