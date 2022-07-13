//import { nanoid } from "nanoid"
import Event from "./components/Event";
import Form from "./components/Form";
import Week from "./components/Week";
import Month from "./components/Month";
import ModeButton from "./components/ModeButton";
import React, { useState } from "react";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;



function App(props) {
  const today = Temporal.Now.plainDateISO().toString();
  const [mode, setMode] = useState("Month");
  const [gDay, setGDay] = useState(today);

  function toggleMode(mode){
    setMode(mode);
  }

  function clickDay(day){
    setGDay(day);
  }
  
  
  const selectDate=(<Form giveDay={gDay} clickDay={clickDay}/>);
  //const backToday=(<Return clickDay={clickDay}/>);
  const monthDisplay = (<Month giveDay={gDay}/>);

  const events = props.eventList.map(event=><Event id={event.id} name={event.name}/>)
  const week = (<Week />)
  const modeSwitch = (
    <ModeButton toggleMode={toggleMode}/>
  );
  
  let grid=(
    <div className="gridMonth">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
    {monthDisplay}
    </div>
  );

  
 if(mode==="Week"){
    grid=(week);
  }else if(mode==="Course"){
    grid=(week);
  }
  return (
    <main className="calendarApp stack-large">
      <section className="topBar">
        <div className="todayDate">
          {selectDate}
        </div>
        {modeSwitch}
        {/* {backToday} */}
      </section>
      {/* {monthDisplay} */}
      {grid}
      <section className="event_top_bar">
        <div>
          <h2>Events</h2>
        </div>
        <div className="query">
          {/* <h2>{selectDate}</h2> */}
        </div>
      </section>
      {events}
    </main>
  );
}

export default App;
