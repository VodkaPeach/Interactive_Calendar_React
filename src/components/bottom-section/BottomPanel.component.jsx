import { useState } from "react";
import BottomBar from "./bar/BottomBar.component";
import Course from "./course/course.component";
import EventAdd from "./event/EventAdd.component";
import Event from "./event/Event.component"
import { useContext } from "react";
import { CalendarContext } from "../../context/calendar.context";
import { UserContext } from "../../context/user.context";
import { EventsContext } from "../../context/events.context";
export default function BottomPanel() {
  const {mode, gDay} = useContext(CalendarContext);
  const {currentUser} = useContext(UserContext);  
  const {events} = useContext(EventsContext);  
  // controls the showing of the add event form
  const [adding, setAdding] = useState(false);
  // toggle cancel adding a event
  function handleAddEvent(val) {
    setAdding(val);
  }

  return (
    <section>
      <BottomBar
        adding={adding}
        handleAddEvent={handleAddEvent}
      />

      {mode === "Course" ? (
        <Course data={require("../../courses.json")} />
      ) : (
        currentUser &&
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
          ))
      )}
      {adding && <EventAdd name="Add" handleAddEvent={handleAddEvent} />}
    </section>
  );
}
