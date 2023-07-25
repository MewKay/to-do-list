import { createContainer } from "./createContainer"

const createIcon = (iconName) => {
  const icon = createContainer("i");
  icon.classList.add("material-symbols-sharp");
  icon.innerText = iconName;
  return icon;
}

export {
  createIcon
};