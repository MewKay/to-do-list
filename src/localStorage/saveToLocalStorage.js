import { projectList } from "../components/app-logic/projectList";

const saveToLocalStorage = () => {
  localStorage.setItem("project_list", JSON.stringify(projectList.exportData()));
}

export {
  saveToLocalStorage
}