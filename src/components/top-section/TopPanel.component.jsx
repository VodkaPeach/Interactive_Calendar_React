import { Fragment } from "react";
import Month from "./calendar/Month.component";
import Week from "./calendar/Week.component";
import TopBar from "./bar/TopBar.component";
import { useContext } from "react";
import { CalendarContext } from "../../context/calendar.context"

export default function TopPanel() {
  const {mode} = useContext(CalendarContext);
  const monthDisplay = <Month key={`monthDisplay`} />;
  const week = <Week id={"weekDisplay"} key={"WeekDisplay"} />;

  let grid = mode === "Month" ? monthDisplay : week;
  return (
    <Fragment>
      <TopBar />
      {grid}
    </Fragment>
  );
}
