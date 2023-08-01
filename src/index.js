import "./components/styles/reset.css";
import "./components/styles/style.css";
import { createModal } from "./components/ui/toDoForm/toDoForm";

const myDialog = createModal();
document.body.appendChild(myDialog);
myDialog.showModal();