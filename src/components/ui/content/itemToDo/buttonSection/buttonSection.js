import { createContainer } from "../../../createContainer"

const ButtonSection = () => {
  const _container = createContainer("div");
  _container.classList.add("btn-section");

  return {
    get container () {
      return _container;
    }
  }
}

export {
  ButtonSection
};