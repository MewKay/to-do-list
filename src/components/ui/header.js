const createAppTitle = () => {
  const appTitle = document.createElement("h1");
  appTitle.innerText = "My To-do list";
  return appTitle;
}

const Header = () => {
  const container = document.createElement("header");
  container.appendChild(createAppTitle());
  return container;
}

export {
  Header
};