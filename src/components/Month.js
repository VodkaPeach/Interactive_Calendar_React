import Day from "./Day";
import { nanoid } from "nanoid";
//import React, { useState } from "react";

import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;


function Month(props){
    const today = Temporal.Now.plainDateISO().toString().slice(8,10);
    const thisMonth = Temporal.Now.plainDateISO().toString().slice(5,7);
    const check = (thisMonth===props.giveDay.slice(5,7));
    console.log(thisMonth);

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

    const ButtonList = [];

    for (let i=1, j=daysInLastMonth-startDayOfMonth+2; i<startDayOfMonth;i++, j++){
        ButtonList.push(<Day id={i} key={i+nanoid()} name={j} isToday={false} hasEvent={false} isSelected={false}
        isInThisMonth={false}/>);
    }
    
    for (let i=0; i<daysInMonth;i++){
        if (i+1===Number(today)&&check){
            ButtonList.push(<Day id={i+startDayOfMonth} key={i+nanoid()} name={i+1} isToday={true} hasEvent={true} isSelected={false}
                isInThisMonth={true}
                />);
        }else{
            ButtonList.push(<Day id={i+startDayOfMonth} key={i+nanoid()} name={i+1} isToday={false} hasEvent={true} isSelected={false}
                isInThisMonth={true}
                />);
        }
        
    }

    for (let i=ButtonList.length, j=1; i<42; i++, j++){
        ButtonList.push(<Day id={i} key={i+nanoid()} name={j} isToday={false} hasEvent={false} isSelected={false}
            isInThisMonth={false}/>);
    }

    return(ButtonList);
}
export default Month;