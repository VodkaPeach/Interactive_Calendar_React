import React, { useState, useContext } from "react";
import { UserContext } from "../context/user.context";
import { EventsContext } from "../context/events.context";
import BottomPanel from "../components/bottom-section/BottomPanel.component";
import { todayDate } from "../utils/time";
import TopPanel from "../components/top-section/TopPanel.component";

function Main() {
  // the selected day.
  const [gDay, setGDay] = useState(todayDate);
  // the current display mode.
  const [mode, setMode] = useState("Month");
  // the User context
  const { currentUser } = useContext(UserContext);
  // the events context
  const { events } = useContext(EventsContext);

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
  return (
    <main className="calendarApp">
      <TopPanel
        gDay={gDay}
        mode={mode}
        currentUser={currentUser}
        events={events}
        handleChange={handleChange}
        toggleMode={toggleMode}
        clickDay={clickDay}
      />
      <BottomPanel
        gDay={gDay}
        mode={mode}
        currentUser={currentUser}
        events={events}
      />
    </main>
  );
}

export default Main;
