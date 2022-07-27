//import { nanoid } from "nanoid"
import Event from "./components/Event";
import Week from "./components/Week";
import Month from "./components/Month";
import ModeButton from "./components/ModeButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import Course from "./components/course/course";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

Date.prototype.toTemporalInstant = toTemporalInstant;



function App(props) {
  // Today's date in ISO string
  const todayDate = Temporal.Now.plainDateISO().toString();
  // Today's date-Day
  const today = todayDate.slice(8, 10);
  // Today's date-month
  const thisMonth = todayDate.slice(5, 7);

  // the current display mode.
  const [mode, setMode] = useState("Month");

  // the selected day.
  const [gDay, setGDay] = useState(todayDate);
  const isThisMonth = thisMonth === gDay.slice(5, 7);


  function generateData() {
    // {givenDate} is a string of ISO8062, the selected day.
    const givenDate = new Date(gDay);
    // The day of the start of the month of the selected day.
    const startOfMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 1).getDay();
    // Mon=1, SUN=7.
    const startDayOfMonth = (startOfMonth === 0) ? 7 : startOfMonth;
    // number of days in that month.
    const daysInMonth = new Date(givenDate.getFullYear(), givenDate.getMonth() + 1, 0).getDate();
    // number of days in last month.
    const daysInLastMonth = new Date(givenDate.getFullYear(), givenDate.getMonth(), 0).getDate();

    function buildData(id, name, isToday, hasEvent, isSelected, isInThisMonth) {
      const day = {
        id: id,
        name: name,
        isToday: isToday,
        hasEvent: hasEvent,
        isSelected: isSelected,
        isInThisMonth: isInThisMonth,
      };
      return day;
    }

    const ButtonList = [];

    for (let i = 1, j = daysInLastMonth - startDayOfMonth + 2; i < startDayOfMonth; i++, j++) {
      const day = buildData(`${i}` + nanoid(), j, false, false, false, "last");
      ButtonList.push(day)
    }

    let isTd, isSl = false;
    for (let i = 0; i < daysInMonth; i++) {
      if (i + 1 === Number(today) && isThisMonth) {
        isTd = true;
      }
      if (i + 1 === Number(gDay.slice(8, 10))) {
        isSl = true
      }
      const day = buildData(String(i + startDayOfMonth) + nanoid(), i + 1, isTd, false, isSl, "this");
      isTd = isSl = false;
      ButtonList.push(day);
    }

    for (let i = ButtonList.length, j = 1; i < 35; i++, j++) {
      const day = buildData(String(i) + nanoid(), j, false, false, false, "next");
      ButtonList.push(day);
    }

    /* const ButtonList = [{id:`todo`, name:"1", isToday:false, hasEvent:false, isSelected:false, isInThisMonth:false }, 
    {id:`todo2`, name:"12", isToday:false,hasEvent:false, isSelected:false, isInThisMonth:false }]; */
    return ButtonList;
  }

  // Change the mode.
  function toggleMode(mode) {
    setMode(mode);
  }

  // Change the selected day by click.
  function clickDay(day) {
    setGDay(day);
  }

  // Change the selected day by using an input form.
  function handleChange(e) {
    e.preventDefault();
    setGDay(e.target.value);
  }

  // Month Display.
  const monthDisplay = (<Month id={"monthDisplay"} key={`monthDisplay`} gDay={gDay} clickDay={clickDay} generateData={generateData} />);
  
  // Events
  const events = props.eventList.map(event => <Event id={event.id} key={event.id} name={event.name} />)
  
  // Week Display.
  const week = (<Week id={"weekDisplay"} key={"WeekDisplay"} />)
  
  // Mode buttons.
  const modeSwitch = (
    <ModeButton id={"modeButton"} key={"modeButton"} toggleMode={toggleMode} />
  );


  let grid = monthDisplay;
  if (mode === "Week") {
    grid = (week);
  } else if (mode === "Course") {
    grid = (week);
  }

  const goBack = (
    <button onClick={() => setGDay(todayDate)}>
      Return to Today
    </button>
  );

  const dayPicker = (
    <input type="date" value={gDay} onChange={handleChange} />
  );

  return (
    <main className="calendarApp stack-large">
      <section className="topBar">
        <div className="todayDate">
          {dayPicker}
        </div>
        {modeSwitch}
        {gDay === todayDate ? <span></span> : goBack}
        <div className="Account">
          <a href="/Account">Register/Login</a>
        </div>
      </section>
      {grid}
      <section className="event_top_bar">
        <div>
          <h2>{mode === "Course" ? "Courses" : "Events"}</h2>
        </div>
        <div className="query">
        </div>
      </section>
      {mode === "Course" ? <Course data={require('./courses.json')} /> : events}

    </main>
  );
}

export default App;
