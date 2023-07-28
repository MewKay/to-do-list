import { intlFormatDistance, isToday } from "date-fns";
import { createContainer } from "../../../createContainer";

const createDateDistanceDisplay = (date) => {
  const dueDate = createContainer("p");
  dueDate.innerText = isToday(date) ? "today" : intlFormatDistance(date,new Date(), {
    addSuffix: true,
    locale: "en-US"
  });
  return dueDate;
}

export {
  createDateDistanceDisplay
};