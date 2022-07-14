import Day from "./Day";
import React, { useState } from "react";

import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;


function Month(props){
    const days=props.generateData();

    function selectDate(day){
        props.clickDay(props.gDay.slice(0,8)+day);
    }
    const dayList = days.map(day=><Day id={day.id} key={day.id} name={day.name} isToday={day.isToday}
        hasEvent={day.hasEvent} isSelected={day.isSelected} isInThisMonth={day.isInThisMonth} selectDate={selectDate}
    />);

    return(
        <div className="gridMonth">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {dayList}
        </div>
    );
}
export default Month;