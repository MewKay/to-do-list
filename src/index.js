import "./reset.css";
import "./style.css";
import { ToDo } from "./todo";
import { Project } from "./project";

const myProject = Project();

myProject.addToDo(
  ToDo("Get Up"),
  ToDo("Eat breakfast"),
  ToDo("Eat Bread"),
  ToDo("Dance yeah, i know to code wooo!")
  );

myProject.list.forEach(toDo => console.log(toDo.title));

myProject.removeToDoWithTitle("Get Up","Eat breakfast");

myProject.list.forEach(toDo => console.log(toDo.title));
