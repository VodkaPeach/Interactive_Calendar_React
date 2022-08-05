import Day from "./Day";
import React, { useState } from "react";
import classes from "./Month.module.css";

import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
Date.prototype.toTemporalInstant = toTemporalInstant;

function Month(props) {
  const days = props.generateData();

  function selectDate(day) {
    props.clickDay(props.gDay.slice(0, 8) + day);
  }
  const dayList = days.map((day) => (
    <Day
      id={day.id}
      key={day.id}
      name={day.name}
      isToday={day.isToday}
      hasEvent={day.hasEvent}
      isSelected={day.isSelected}
      isInThisMonth={day.isInThisMonth}
      selectDate={selectDate}
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
