import { Temporal, toTemporalInstant } from "@js-temporal/polyfill";
import { nanoid } from "nanoid";

Date.prototype.toTemporalInstant = toTemporalInstant;

export const todayDate = Temporal.Now.plainDateISO().toString();
export const today = todayDate.slice(8, 10);
export const thisMonth = todayDate.slice(5, 7);

export function generateData(gDay, events, currentUser) {
  const isThisMonth = thisMonth === gDay.slice(5, 7);
  // {givenDate} is a string of ISO8062, the selected day.
  const givenDate = new Date(gDay);
  // The day of the start of the month of the selected day.
  const startOfMonth = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth(),
    1
  ).getDay();
  // Mon=1, SUN=7.
  const startDayOfMonth = startOfMonth === 0 ? 7 : startOfMonth;
  // number of days in that month.
  const daysInMonth = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth() + 1,
    0
  ).getDate();
  // number of days in last month.
  const daysInLastMonth = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth(),
    0
  ).getDate();
  //
  const eventsInThisMonth =
    events &&
    events.filter((event) => event.date.slice(5, 7) === gDay.slice(5, 7));

  function buildData(
    id,
    name,
    isToday,
    hasEvent,
    isSelected,
    isInThisMonth,
  ) {
    const day = {
      id: id,
      name,
      isToday,
      hasEvent,
      isSelected,
      isInThisMonth,
    };
    return day;
  }

  const ButtonList = [];

  for (
    let i = 1, j = daysInLastMonth - startDayOfMonth + 2;
    i < startDayOfMonth;
    i++, j++
  ) {
    const day = buildData(`${i}` + nanoid(), j, false, false, false, "last");
    ButtonList.push(day);
  }

  let isTd,
    isSl = false;
  for (let i = 0; i < daysInMonth; i++) {
    const eventI = currentUser
      ? eventsInThisMonth.filter(
          (event) => Number(event.date.slice(8, 10)) === i + 1
        )
      : [];

    if (i + 1 === Number(today) && isThisMonth) {
      isTd = true;
    }
    if (i + 1 === Number(gDay.slice(8, 10))) {
      isSl = true;
    }
    const day = buildData(
      String(i + startDayOfMonth) + nanoid(),
      i + 1,
      isTd,
      eventI.length > 0,
      isSl,
      "this"
    );
    isTd = isSl = false;
    ButtonList.push(day);
  }
  let numOfBtn;
  ButtonList.length >= 35 ? numOfBtn=42 : numOfBtn=35


  for (let i = ButtonList.length, j = 1; i < numOfBtn; i++, j++) {
    const day = buildData(String(i) + nanoid(), j, false, false, false, "next");
    ButtonList.push(day);
  }
  return ButtonList;
}
