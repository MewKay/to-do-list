import { createContainer } from "../../../createContainer"
import { Status } from "./buttonsectionStatus";
import { addCancelButton } from "./cancelButton";
import { addConfirmButton } from "./confirmButton";
import { addDeleteButton } from "./deleteButton";
import { addDetailsButton } from "./detailsButton";
import { addEditButton } from "./editButton";

const ButtonSection = () => {
  const _container = createContainer("div");
  _container.classList.add("btn-section");
  let _status = Status.DEFAULT;

  const render = () => {
    _container.innerText = "";
    if(_status === Status.DEFAULT) {
      addDetailsButton(_container);
      addEditButton(_container);
      addDeleteButton(_container);
    }
    else if (_status === Status.TO_DO_COMPLETED) {
      addDetailsButton(_container);
      addDeleteButton(_container);
    }
    else if (_status === Status.CONFIRMATION_DELETE) {
      addConfirmButton(_container);
      addCancelButton(_container);
    }
  }

  return {
    get container() {
      return _container;
    },
    set status(value) {
      _status = value;
    },
    render
  }
}

export {
  ButtonSection
};