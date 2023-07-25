import { createContainer } from "../../../createContainer"
import { Status } from "./buttonsectionStatus";

const ButtonSection = () => {
  const _container = createContainer("div");
  _container.classList.add("btn-section");
  let status = Status.DEFAULT;

  return {
    get container () {
      return _container;
    }
  }
}

export {
  ButtonSection
};