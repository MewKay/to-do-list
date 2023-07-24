import { format } from "date-fns";
import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { createContainer } from "../../createContainer";

const createCheckBox = (toDo) => {
  const checkbox = createContainer("input");
  checkbox.type = "checkbox";
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

const ItemToDo = (toDo) => {
  const _container = createContainer("li");
  const _checkbox = createCheckBox(toDo);
  const _label = createToDoLabel(toDo.title);
  const _date = createDueDateDisplay(toDo.dueDate);

  const renderItem = () => {
    if(toDo.completionCheck)
      _container.classList.add("done");
    if(!toDo.completionCheck)
      _container.classList.remove("done"); 

    _container.appendChild(_checkbox);
    _container.appendChild(_label);
    _container.appendChild(_date);
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