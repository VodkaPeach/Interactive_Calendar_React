import Day from "./Day";
import { nanoid } from "nanoid";
import React, { useState } from "react";

import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;


function Month(props){
    const today = Temporal.Now.plainDateISO().toString().slice(8,10);
    const thisMonth = Temporal.Now.plainDateISO().toString().slice(5,7);
    const check = (thisMonth===props.giveDay.slice(5,7));
    
    // {givenDate} is a string of ISO8062, the selected day.
    const givenDate = new Date(props.giveDay);

    // The day of the start of the month of the selected day.
    const startOfMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 1).getDay();
    
    // Mon=1, SUN=7.
    const startDayOfMonth = (startOfMonth===0)?7:startOfMonth;
    
    // number of days in that month.
    const daysInMonth = new Date(givenDate.getFullYear(), givenDate.getMonth()+1, 0).getDate();
    
    // number of days in last month.
    const daysInLastMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 0).getDate();

    function buildData(id, name, isToday, hasEvent, isSelected, isInThisMonth) {
        const day={
            id:{id},
            name:{name},
            isToday:{isToday},
            hasEvent:{hasEvent},
            isSelected:{isSelected},
            isInThisMonth:{isInThisMonth},
        };
        return day;
    }

    const ButtonList = [];

    for (let i=1, j=daysInLastMonth-startDayOfMonth+2; i<startDayOfMonth;i++, j++){
        const day = buildData(String(i)+nanoid(), j, false, false, false, false);
        ButtonList.push(day)
    }
    
    for (let i=0; i<daysInMonth;i++){
        const day = buildData(String(i+startDayOfMonth)+nanoid(), i+1, false, false, false, true);
        if (i+1===Number(today)&&check){
            day.isToday=true;
        }
        ButtonList.push(day);
    }

    for (let i=ButtonList.length, j=1; i<42; i++, j++){
        const day = buildData(String(i)+nanoid(), j, false, false, false, false);
        ButtonList.push(day);
    }
    const [days, setDays] = useState(ButtonList);

    const dayList = ButtonList.map((day)=><Day id={day.id} key={day.id} name={day.name} isToday={day.isToday}
        hasEvent={day.hasEvent} isSelected={day.isSelected} isThisMonth={day.isInThisMonth}
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