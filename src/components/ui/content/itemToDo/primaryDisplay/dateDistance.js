import { intlFormatDistance, isToday } from "date-fns";
import { createContainer } from "../../../createContainer";

const createDateDistanceDisplay = (date) => {
  const dueDate = createContainer("p");
  const dateDistanceString = intlFormatDistance(date, new Date(), {
    addSuffix: true,
    locale: "en-US"
  });
  dueDate.innerText = isToday(date) ? "Today" : capitalizeFirstLetter(dateDistanceString);
  return dueDate;
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  createDateDistanceDisplay
};