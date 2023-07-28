import { intlFormatDistance, isToday } from "date-fns";
import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { createContainer } from "../../createContainer";
import { ButtonSection } from "./buttonSection/buttonSection";
import { createDetailsSection } from "./detailsSection";

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

const createDateDistanceDisplay = (date) => {
  const dueDate = createContainer("p");
  dueDate.innerText = isToday(date) ? "today" : intlFormatDistance(date,new Date(), {
    addSuffix: true,
    locale: "en-US"
  });
  return dueDate;
}

const ItemToDo = (toDo) => {
  const _container = createContainer("li");
  const _checkbox = createCheckBox(toDo);
  const _label = createToDoLabel(toDo.title);
  const _date = createDateDistanceDisplay(toDo.dueDate);
  const _buttonSection = ButtonSection(toDo);
  const _detailsSection = createDetailsSection(toDo);

  const _labelSection = (() => {
    const div = createContainer("div",_checkbox,_label);
    div.classList.add("label-section");
    return div;
  })();

  const renderItem = () => {
    _container.innerText = "";
    _container.appendChild(_labelSection);
    _container.appendChild(_date);
    _container.appendChild(_buttonSection.container);
    _container.appendChild(_detailsSection);

    if(toDo.completionCheck) {
      _container.classList.add("done");
      _buttonSection.render();
    }
    if(!toDo.completionCheck) {
      _container.classList.remove("done");
      _buttonSection.render();
    }
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