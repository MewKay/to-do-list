import { createContainer } from "../../createContainer";

const createProjectsContainer = () => {
  const container = createContainer("div");

  container.id = "projects";

  return container;
}

const projects = createProjectsContainer();

export {
  projects
};