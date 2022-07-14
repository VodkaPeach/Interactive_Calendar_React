import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from "react";
import { nanoid } from "nanoid";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;
// import reportWebVitals from './reportWebVitals';

const DATA = [];
/* const today = Temporal.Now.plainDateISO().toString().slice(8,10);
const thisMonth = Temporal.Now.plainDateISO().toString().slice(5,7);
const check = (thisMonth===props.giveDay.slice(5,7));
const [gDay, setGDay] = useState(today);

// {givenDate} is a string of ISO8062, the selected day.
const givenDate = new Date(gDay);
// The day of the start of the month of the selected day.
const startOfMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 1).getDay();
// Mon=1, SUN=7.
const startDayOfMonth = (startOfMonth===0)?7:startOfMonth;
// number of days in that month.
const daysInMonth = new Date(givenDate.getFullYear(), givenDate.getMonth()+1, 0).getDate();
// number of days in last month.
const daysInLastMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 0).getDate();
function buildData(id, key, name, isToday, hasEvent, isSelected, isInThisMonth) {
    const day={
        id:{id},
        key:{key},
        name:{name},
        isToday:{isToday},
        hasEvent:{hasEvent},
        isSelected:{isSelected},
        isInThisMonth:{isInThisMonth},
    }
    return day;
}
for (let i=1, j=daysInLastMonth-startDayOfMonth+2; i<startDayOfMonth;i++, j++){
    const day = buildData(i, i+nanoid, j, false, false, false, false);
    DATA.push(day)
}

for (let i=0; i<daysInMonth;i++){
    const day = buildData(i+startDayOfMonth, i+nanoid, i+1, false, false, false, true);
    if (i+1===Number(today)&&check){
        day.isToday=true;
    }
    DATA.push(day);
}

for (let i=DATA.length, j=1; i<42; i++, j++){
    const day = buildData(i, i+nanoid, j, false, false, false, false);
    DATA.push(day);
} */





const EVENTS = [{id:`todo-0`, name: "Eat"}, {id:"todo-1", name:"sleep"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dayList={DATA} eventList={EVENTS} displayMode="Month"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
