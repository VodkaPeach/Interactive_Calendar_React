//import { nanoid } from "nanoid"
import Event from "./components/Event";
import Form from "./components/Form";
import Week from "./components/Week";
import Month from "./components/Month";
import ModeButton from "./components/ModeButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import { click } from "@testing-library/user-event/dist/click";
Date.prototype.toTemporalInstant = toTemporalInstant;



function App(props) {
const todayDate = Temporal.Now.plainDateISO().toString();
const today = todayDate.slice(8,10);
const thisMonth = todayDate.slice(5,7);
const [mode, setMode] = useState("Month");
const [gDay, setGDay] = useState(todayDate);
const isThisMonth = thisMonth===gDay.slice(5,7);


function generateData(){
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

  function buildData(id, name, isToday, hasEvent, isSelected, isInThisMonth) {
    const day={
      id:id,
      name:name,
      isToday:isToday,
      hasEvent:hasEvent,
      isSelected:isSelected,
      isInThisMonth:isInThisMonth,
    };
    return day;
  }

  const ButtonList = [];

  for (let i=1, j=daysInLastMonth-startDayOfMonth+2; i<startDayOfMonth;i++, j++){
      const day = buildData(`${i}`+nanoid(), j, false, false, false, "last");
      ButtonList.push(day)
  }
  
  let isTd, isSl = false;
  for (let i=0; i<daysInMonth;i++){
      if (i+1===Number(today)&&isThisMonth){
        isTd=true;
      }
      if (i+1===Number(gDay.slice(8,10))){
        isSl=true
      }
      const day = buildData(String(i+startDayOfMonth)+nanoid(), i+1, isTd, false, isSl, "this");
      isTd=isSl=false;
      ButtonList.push(day);
  }

  for (let i=ButtonList.length, j=1; i<35; i++, j++){
      const day = buildData(String(i)+nanoid(), j, false, false, false, "next");
      ButtonList.push(day);
  }
 
  /* const ButtonList = [{id:`todo`, name:"1", isToday:false, hasEvent:false, isSelected:false, isInThisMonth:false }, 
  {id:`todo2`, name:"12", isToday:false,hasEvent:false, isSelected:false, isInThisMonth:false }]; */
  return ButtonList;
}
function toggleMode(mode){
  setMode(mode);
}
function clickDay(day){
  setGDay(day);
}
function handleChange(e){
  setGDay(e.target.value);
}

//const selectDate=(<Form gDay={gDay} clickDay={clickDay}/>);
const monthDisplay = (<Month gDay={gDay} clickDay={clickDay} generateData={generateData}/>);
const events = props.eventList.map(event=><Event id={event.id} name={event.name}/>)
const week = (<Week />)
const modeSwitch = (
  <ModeButton toggleMode={toggleMode}/>
);

let grid;
if(mode==="Week"){
  grid=(week);
}else if(mode==="Course"){
  grid=(week);
}
else grid = monthDisplay;

const goBack = (
  <button onClick={()=>setGDay(todayDate)}>
    Return to Today
  </button>
);

const dayPicker=(
  <input type="date" value={gDay} onChange={handleChange}/>
);

return (
  <main className="calendarApp stack-large">
    <section className="topBar">
      <div className="todayDate">
        {dayPicker}
      </div>
      {modeSwitch}
      {gDay===todayDate? <span></span> : goBack}
    </section>
    {grid}
    <section className="event_top_bar">
      <div>
        <h2>Events</h2>
      </div>
      <div className="query">
      </div>
    </section>
    {events}
  </main>
);
}

export default App;
