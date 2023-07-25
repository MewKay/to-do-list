import { format } from "date-fns";
import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { createContainer } from "../../createContainer";

const createCheckBox = (toDo) => {
  const checkbox = createContainer("input");
  checkbox.type = "checkbox";
  checkbox.checked = toDo.completionCheck;
  checkbox.addEventListener("change", () => {
    toDo.toggleCompletionStatus();
    pubSub.publish(Events.TO_DO_ITEM_CONTENT_UPDATE);
  });
  return checkbox;
}

const createToDoLabel = (title) => {
  const label = createContainer("label");
  label.innerText = title;
  return label;
}

const createDueDateDisplay = (date) => {
  const dueDate = createContainer("p");
  dueDate.innerText = format(date,"MMM do");
  return dueDate;
}

const renderButtonSection = (buttons) => {
  const section = createContainer("div");
  section.classList.add("button-section");
  for (const key in buttons) {
    section.appendChild(buttons[key]()); 
  }
  return section;
}

const defaultTaskButtons = {
  details: () => {
    const detailsButton = createContainer("button");
    detailsButton.innerText = "Details";
    return detailsButton;
  },
  edit: () => {
    const editButton = createContainer("button");
    editButton.innerText = "Edit";
    return editButton;
  },
  delete: () => {
    const deleteButton = createContainer("button");
    deleteButton.innerText = "Delete";
    return deleteButton;
  },
}

const confirmationDeleteButtons = {
  yes: () => {
    const yesButton = createContainer("button");
    yesButton.innerText = "Yes";
    return yesButton;
  },
  no: () => {
    const noButton = createContainer("button");
    noButton.innerText = "No";
    return noButton;  
  }
}

const {edit, ...taskCheckedButtons} = defaultTaskButtons;

const ItemToDo = (toDo) => {
  const _container = createContainer("li");
  const _checkbox = createCheckBox(toDo);
  const _label = createToDoLabel(toDo.title);
  const _date = createDueDateDisplay(toDo.dueDate);
  let buttonSection;

  const renderItem = () => {
    _container.innerText = "";
    _container.appendChild(_checkbox);
    _container.appendChild(_label);
    _container.appendChild(_date);


    if(toDo.completionCheck) {
      _container.classList.add("done");
      buttonSection = renderButtonSection(taskCheckedButtons);
    }
    if(!toDo.completionCheck) {
      _container.classList.remove("done"); 
      buttonSection = renderButtonSection(defaultTaskButtons);  
    }

    _container.appendChild(buttonSection);
  }

  renderItem();

  pubSub.subscribe(Events.TO_DO_ITEM_CONTENT_UPDATE,renderItem);

  return {
    get item () {
      return _container;
    }
  };
}

export {
  ItemToDo
}