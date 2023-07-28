import { Events } from "../../../../pubsub/eventsName";
import { pubSub } from "../../../../pubsub/pubsub";
import { createContainer } from "../../createContainer";
import { createDetailsSection } from "./detailsSection";
import { PrimaryDisplay } from "./primaryDisplay/primaryDisplay";

const ItemToDo = (toDo) => {
  const _container = createContainer("li");
  const _primarySection = PrimaryDisplay(toDo);
  const _detailsSection = createDetailsSection(toDo);
  const _buttonSection = _primarySection.buttonSection;

  const renderItem = () => {
    _container.innerText = "";
    _container.appendChild(_primarySection.container);
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