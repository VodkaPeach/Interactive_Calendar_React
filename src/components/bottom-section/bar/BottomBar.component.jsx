import { useContext } from "react";
import { CalendarContext } from "../../../context/calendar.context";
import { UserContext } from "../../../context/user.context";
export default function BottomBar({ adding, handleAddEvent }) {
  const {mode} = useContext(CalendarContext);
  const {currentUser} = useContext(UserContext);  
  
  return (
    <section className="event_top_bar">
      <div>
        <h2>{mode === "Course" ? "Courses" : "Events"}</h2>
        {!adding && mode !== "Course" && currentUser && (
          <button onClick={() => handleAddEvent(true)}>Add a new event</button>
        )}
      </div>
    </section>
  );
}
