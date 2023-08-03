import { Project } from "./components/app-logic/project";
import { projectList } from "./components/app-logic/projectList";
import { ToDo } from "./components/app-logic/todo";
import { Priority } from "./components/priority";
import { addDays, addWeeks } from "date-fns";

export const addDummyContent = () => {
  const project1 = Project("Project 1");

  const toDo1 = ToDo("Todo1",addDays(new Date(),1),Priority.MEDIUM)
  toDo1.description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente nulla, eos tenetur alias consectetur autem ipsam nobis quibusdam cum!"
  project1.addToDo(
    toDo1,
    ToDo("Todo2",addDays(new Date(),20),Priority.HIGH),
    ToDo("Todo3",addWeeks(new Date(),4),Priority.LOW)
  );

  const project2 = Project("Project 2");
  project2.addToDo(
    ToDo("Todo2",addDays(new Date(),10),Priority.MEDIUM),
    ToDo("Todo5",addDays(new Date(),2),Priority.HIGH)
  );

  projectList.addProject(project1,project2);
}