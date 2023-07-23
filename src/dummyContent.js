import { Project } from "./components/app-logic/project";
import { projectList } from "./components/app-logic/projectList";
import { ToDo } from "./components/app-logic/todo";
import { Priority } from "./components/priority";
import { addDays, addWeeks } from "date-fns";

export const addDummyContent = () => {
  const project1 = Project("Project 1");
  project1.addToDo(
    ToDo("Todo1",new Date(),Priority.MEDIUM),
    ToDo("Todo2",addDays(new Date(),20),Priority.HIGH),
    ToDo("Todo3",addWeeks(new Date(),4),Priority.LOW)
  );

  const project2 = Project("Project 2");
  project2.addToDo(
    ToDo("Todo4",addDays(new Date(),10),Priority.MEDIUM),
    ToDo("Todo5",new Date(),Priority.HIGH)
  );

  projectList.addProject(project1,project2);
}