const createProjectsContainer = () => {
  const container = document.createElement("div");
  container.id = "projects";

  return container;
}

const projects = createProjectsContainer();

export {
  projects
};