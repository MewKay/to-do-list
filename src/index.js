import "./reset.css";
import "./style.css";
import { ToDo } from "./todo";
import { Project } from "./project";
import { Priority } from "./priority";

const myProject = Project();

myProject.addToDo(
  ToDo("Get Up"),
  ToDo("Eat breakfast"),
  ToDo("Eat Bread"),
  ToDo("Dance yeah, i know to code wooo!")
);

myProject.list[2].toggleCompletionStatus();

myProject.list.forEach( element => console.log(element.completionCheck))