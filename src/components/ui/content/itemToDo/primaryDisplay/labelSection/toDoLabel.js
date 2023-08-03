import { currentContentData } from "../../../../../data/currentData";
import { createContainer } from "../../../../createContainer";

const createToDoLabel = (toDo) => {
  const toDoTitle = createContainer("p");
  toDoTitle.innerText = toDo.title;
  const label = createContainer("label", toDoTitle);

  if( currentContentData.title === "Today" ||
      currentContentData.title === "This Week" ||
      currentContentData.title === "Important") {
    const projectName = createContainer("p");
    projectName.innerText = `[ ${toDo.parentProject} ]`;
    projectName.classList.add("project-name");
    label.appendChild(projectName);
  }

  return label;
}

export {
  createToDoLabel
};