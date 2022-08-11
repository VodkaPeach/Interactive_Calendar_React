import Day from "./Day.component";
import React from "react";
import {generateData} from "../../../utils/time";
import { useContext } from "react";
import { CalendarContext } from "../../../context/calendar.context";
import {EventsContext} from "../../../context/events.context";
import { UserContext } from "../../../context/user.context";

function Month() {
  const { gDay } = useContext(CalendarContext);
  const {events} = useContext(EventsContext);
  const { currentUser } = useContext(UserContext);
  const days = generateData(gDay, events, currentUser);


  const dayList = days.map((day) => (
    <Day
      id={day.id}
      key={day.id}
      name={day.name}
      isToday={day.isToday}
      hasEvent={day.hasEvent}
      isSelected={day.isSelected}
      isInThisMonth={day.isInThisMonth}
    />
  ));

  return (
    <div className="gridMonth">
      <div className="DayInAWeek">Mon</div>
      <div className="DayInAWeek">Tue</div>
      <div className="DayInAWeek">Wed</div>
      <div className="DayInAWeek">Thu</div>
      <div className="DayInAWeek">Fri</div>
      <div className="DayInAWeek">Sat</div>
      <div className="DayInAWeek">Sun</div>
      {dayList}
    </div>
  );
}
export default Month;
