import { createContainer } from "../../../createContainer";

const createDescriptionDisplay = (toDo) => {
  
  const text = createContainer("p");
  text.innerText = "Description :";
  text.classList.add("description-prefix");
  
  const descriptionText = createContainer("p");
  descriptionText.innerText = toDo.description;
  descriptionText.classList.add("description-content");
  
  const container = createContainer("div",text,descriptionText);
  container.classList.add("description-display");

  if(toDo.description === "") {
    container.innerText = "";
    container.style.height = "0";
  }

  return container; 
}

export {
  createDescriptionDisplay
};