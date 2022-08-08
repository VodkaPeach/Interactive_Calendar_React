//import { nanoid } from "nanoid"
import Event from "../components/event/Event";
import Week from "../components/calendar/Week";
import Month from "../components/calendar/Month";
import ModeButton from "../components/calendar/ModeButton";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user.context";
import { EventsContext } from "../context/events.context";
import { nanoid } from "nanoid";
import { Temporal, toTemporalInstant } from "@js-temporal/polyfill";
import Course from "../components/course/course";
import EventAdd from "../components/event/EventAdd";

Date.prototype.toTemporalInstant = toTemporalInstant;

function Main() {
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

  // login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [adding, setAdding] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { events } = useContext(EventsContext);

  function generateData() {
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
      const eventI = isLoggedIn
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

    for (let i = ButtonList.length, j = 1; i < 35; i++, j++) {
      const day = buildData(
        String(i) + nanoid(),
        j,
        false,
        false,
        false,
        "next"
      );
      ButtonList.push(day);
    }
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

  // toggle cancel adding a event
  function handleCancel() {
    setAdding(false);
  }

  /*   console.log(EVENTS);
  EVENTS.pop();
  cookies.set("EVENTS", EVENTS, {path: "/"}); */

  // Month Display.
  const monthDisplay = (
    <Month
      id={"monthDisplay"}
      key={`monthDisplay`}
      gDay={gDay}
      clickDay={clickDay}
      generateData={generateData}
    />
  );
  console.log(events);
  // Events
  const eventsDisplay =
    events &&
    events
      .filter((event) => event.date.slice(0, 10) === gDay)
      .map((event) => (
        <Event
          id={event._id}
          key={event._id}
          name={event.name}
          date={event.date}
          startTime={event.startTime}
          endTime={event.endTime}
          description={event.description}
          creator={event.creator}
        />
      ));

  // Week Display.
  const week = <Week id={"weekDisplay"} key={"WeekDisplay"} />;

  let grid = monthDisplay;
  if (mode === "Week") {
    grid = week;
  } else if (mode === "Course") {
    grid = week;
  }

  const goBack = (
    <button onClick={() => setGDay(todayDate)}>Return to Today</button>
  );

  const dayPicker = <input type="date" value={gDay} onChange={handleChange} />;

  return (
    <main className="calendarApp stack-large">
      <section className="topBar">
        <div className="todayDate">{dayPicker}</div>
        <div>
          <ModeButton id={"Month"} key={"Month"} toggleMode={toggleMode} />
        </div>
        {/*         <div>
          <ModeButton id={"Week"} key={"Week"} toggleMode={toggleMode} />
        </div> */}
        <div>
          <ModeButton id={"Course"} key={"Course"} toggleMode={toggleMode} />
        </div>
        <div>
          {gDay === todayDate || mode === "Course" ? <span></span> : goBack}
        </div>
        <div className="Account">
          <a href="/Account">Register/Login</a>
        </div>
        <div className="Account">
          <p>{currentUser && currentUser.username}</p>
        </div>
      </section>
      {grid}
      <section className="event_top_bar">
        <div>
          <h2>{mode === "Course" ? "Courses" : "Events"}</h2>
          {!adding && mode !== "Course" && currentUser && (
            <button onClick={() => setAdding(true)}>Add a new event</button>
          )}
        </div>
        <div className="query"></div>
      </section>
      {mode === "Course" ? (
        <Course data={require("../courses.json")} />
      ) : (
        eventsDisplay
      )}
      {adding && <EventAdd name="Add" handleCancel={handleCancel} />}
    </main>
  );
}

export default Main;
