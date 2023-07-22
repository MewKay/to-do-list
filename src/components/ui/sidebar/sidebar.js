import { inbox } from "./inbox";

const createSidebar = () => {
  const container = document.createElement("div");
  container.id = "sidebar";

  container.appendChild(inbox);

  return container;
}

const sidebar = createSidebar();

export {
  sidebar
};