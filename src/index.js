import "./components/styles/reset.css";
import "./components/styles/style.css";
import { Header } from "./components/ui/header";
import { Sidebar } from "./components/ui/sidebar";
import { Content } from "./components/ui/content";


document.body.appendChild(Header());
document.body.appendChild(Sidebar());
document.body.appendChild(Content());