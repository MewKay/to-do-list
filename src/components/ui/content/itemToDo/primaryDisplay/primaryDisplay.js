import { createContainer } from "../../../createContainer";
import { ButtonSection } from "./buttonSection/buttonSection";
import { createDateDistanceDisplay } from "./dateDistance";
import { createLabelSection } from "./labelSection/labelSection"

const PrimaryDisplay = (toDo) => {
  const _labelSection = createLabelSection(toDo);
  const _dateDistanceDisplay = createDateDistanceDisplay(toDo.dueDate);
  const _buttonSection = ButtonSection(toDo);

  const container = createContainer("div",
    _labelSection,
    _dateDistanceDisplay,
    _buttonSection.container);

  container.classList.add("primary");

  return {
    container,
    get buttonSection () {
      return _buttonSection;
    }
  };
}

export {
  PrimaryDisplay
};