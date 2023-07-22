import "./components/styles/reset.css";
import "./components/styles/style.css";
import { header } from "./components/ui/header";
import { sidebar } from "./components/ui/sidebar/sidebar";
import { content } from "./components/ui/content";

document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content);