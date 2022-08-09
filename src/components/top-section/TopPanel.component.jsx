import { Fragment } from "react";
import Month from "./calendar/Month.component";
import Week from "./calendar/Week.component";
import TopBar from "./bar/TopBar.component";
export default function TopPanel({ gDay, mode, currentUser, events, clickDay, handleChange, 
toggleMode }) {
  const monthDisplay = (
    <Month
      id={"monthDisplay"}
      key={`monthDisplay`}
      gDay={gDay}
      currentUser={currentUser}
      events={events}
      clickDay={clickDay}
    />
  );
  const week = <Week id={"weekDisplay"} key={"WeekDisplay"} />;

  let grid = mode === "Month" ? monthDisplay : week;
  return (
    <Fragment>
      <TopBar
        mode={mode}
        clickDay={clickDay}
        gDay={gDay}
        handleChange={handleChange}
        toggleMode={toggleMode}
        currentUser={currentUser}
      />
      {grid}
    </Fragment>
  );
}
